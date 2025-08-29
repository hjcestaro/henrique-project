import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: "Henrique <onboarding@resend.dev>",
      to: "seuemail@exemplo.com",
      subject: "Novo contato do site",
      html: `<p>Mensagem: ${req.body.message}</p>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
