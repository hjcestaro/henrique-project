import { Resend } from "resend";

export default async function handler(req, res) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["seuemail@gmail.com"],
      subject: "Nova mensagem do formulário",
      html: "<p>Mensagem recebida!</p>",
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Erro Resend:", error);
    res.status(500).json({ error: error.message });
  }
}
