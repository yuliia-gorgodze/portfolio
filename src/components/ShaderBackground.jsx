import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "../theme";
import styles from "./ShaderBackground.module.css";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

// Inspired by Shadertoy "Ether" (nimitz) — light: soft crimson on plaster;
// dark: ember caustics on charcoal (matches hero blazer palette).
const FRAGMENT_SHADER = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_lightMode;

  mat2 rot(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c, -s, s, c);
  }

  float map(vec3 p, float t) {
    p.xz *= rot(t * 0.32);
    p.xy *= rot(t * 0.48);
    vec3 q = p * 1.85 + t * 1.1;
    return length(p + vec3(sin(t * 0.55))) * log(length(p) + 1.0)
         + sin(q.x + sin(q.z + sin(q.y))) * 0.45 - 1.05;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.y - vec2(
      u_resolution.x / u_resolution.y * 0.52,
      0.48
    );

    float t = u_time;
    vec3 cl = vec3(0.0);
    float d = 2.35;

    if (u_lightMode < 0.5) {
      for (int i = 0; i <= 5; i++) {
        vec3 p = vec3(0.15, -0.05, 5.1) + normalize(vec3(uv, -1.0)) * d;
        float rz = map(p, t);
        float f = clamp((rz - map(p + 0.1, t)) * 0.5, -0.1, 1.0);
        vec3 l = vec3(0.42, 0.1, 0.12) + vec3(3.4, 1.4, 1.2) * f;
        cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.7 * l;
        d += min(rz, 1.0);
      }
      vec3 sky = vec3(0.07, 0.06, 0.055);
      float s1 = sin(uv.x * 2.8 - t * 0.18) * sin(uv.y * 3.2 + t * 0.12);
      float s2 = sin(uv.x * 1.6 + uv.y * 2.1 - t * 0.08) * 0.65;
      float glow = smoothstep(-0.35, 0.45, s1 + s2);
      vec3 spot = vec3(0.22, 0.1, 0.1);
      sky = mix(sky, spot, glow * 0.4);
      cl = sky + cl * 0.36;
      cl = clamp(cl, 0.0, 1.0);
    } else {
      for (int i = 0; i <= 5; i++) {
        vec3 p = vec3(0.15, -0.05, 5.1) + normalize(vec3(uv, -1.0)) * d;
        float rz = map(p, t);
        float f = clamp((rz - map(p + 0.1, t)) * 0.5, -0.1, 1.0);
        vec3 l = vec3(0.45, 0.14, 0.12) + vec3(2.4, 1.2, 0.9) * f;
        cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.6 * l;
        d += min(rz, 1.0);
      }
      vec3 sky = vec3(0.9, 0.88, 0.84);
      float s1 = sin(uv.x * 2.8 - t * 0.18) * sin(uv.y * 3.2 + t * 0.12);
      float s2 = sin(uv.x * 1.6 + uv.y * 2.1 - t * 0.08) * 0.65;
      float dark = smoothstep(-0.35, 0.45, s1 + s2);
      vec3 spot = vec3(0.82, 0.76, 0.72);
      sky = mix(sky, spot, dark * 0.28);
      cl = sky + cl * 0.16;
      cl = clamp(cl, 0.0, 1.0);
    }

    gl_FragColor = vec4(cl, 1.0);
  }
`;

function initWebGL(canvas) {
  const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
  if (!gl) return null;

  function compileShader(src, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = compileShader(VERTEX_SHADER, gl.VERTEX_SHADER);
  const fs = compileShader(FRAGMENT_SHADER, gl.FRAGMENT_SHADER);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  const aPos = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  return {
    gl,
    uTime: gl.getUniformLocation(program, "u_time"),
    uResolution: gl.getUniformLocation(program, "u_resolution"),
    uLightMode: gl.getUniformLocation(program, "u_lightMode"),
  };
}

export default function ShaderBackground({ className = "" }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const lightModeRef = useRef(1);
  const reduceMotion = useReducedMotion();
  const { isDark } = useTheme();

  lightModeRef.current = isDark ? 0 : 1;

  useEffect(() => {
    if (reduceMotion) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = initWebGL(canvas);
    if (!ctx) return undefined;

    const { gl, uTime, uResolution, uLightMode } = ctx;
    const startTime = performance.now();
    let running = true;
    let visible = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function render() {
      if (!running) return;
      if (visible) {
        const t = ((performance.now() - startTime) / 1000) * 0.28;
        gl.uniform1f(uTime, t);
        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uLightMode, lightModeRef.current);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      rafRef.current = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            ([entry]) => {
              visible = entry.isIntersecting;
            },
            { rootMargin: "80px" }
          )
        : null;
    io?.observe(canvas);

    rafRef.current = requestAnimationFrame(render);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
      io?.disconnect();
    };
  }, [reduceMotion]);

  return (
    <div
      className={`${styles.wrap} ${isDark ? styles.dark : styles.light} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className={styles.fallback} />
      {!reduceMotion && <canvas ref={canvasRef} className={styles.canvas} />}
    </div>
  );
}
