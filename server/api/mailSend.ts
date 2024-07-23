import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export default defineEventHandler(async (request) => {
  try {
    const req = await readBody(request);
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dwaynethornton999@gmail.com",
      subject: `Hyperswift message from ${req.name}`,
      html: `<p>
        <h3>You received message from <strong>${req.name}</strong></h3>
        <br></br>
        <strong>Name: </strong>${req.name}
        <br></br>
        <strong>Email: </strong>${req.email}
        <br></br>
        <strong>Budget: </strong>${req.budget}
        <br></br>
        <strong>Explanation: </strong>
        <br></br>
        ${req.explanation}
        </p>`,
    });

    return response;
  } catch (error) {
    return { error };
  }
});
