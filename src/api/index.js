export default async function sendToTg(req, res) {
  if (req.method === "POST") {
    try {
      const token = "5852135537:AAFYo42e_v1dmPjyiBL0mNpy8bk8SghqjAs";
      const chatId = "383265817";
      const messageTg = `Name: ${req.body.name}
        %0AEmail: ${req.body.email}
        %0AMessage: ${req.body.message}
        `;
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${messageTg}&parse_mode=HTML`;

      const res = await fetch(url);
      return res;
    } catch (err) {
      res.status(401).json(err);
    }
  }
}
