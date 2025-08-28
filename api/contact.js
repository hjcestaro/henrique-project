import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Contato <contato@seu-dominio.com>",
      to: "hjcestaro70@gmail.com",
      subject: `Nova mensagem de ${name}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erro Resend:", err);
    res.status(500).json({ error: "Erro ao enviar email" });
  }
}
