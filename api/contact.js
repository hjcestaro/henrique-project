const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Contato <no-reply@seuprojeto.com>",
      to: "cestarodev@gmail.com",
      subject: `Mensagem de ${name}`,
      html: `
        <h2>Nova mensagem</h2>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao enviar" });
  }
};
