import { transporter } from "./tansporter";

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  await transporter.sendMail({
    from: `"Emara Trade" <no-reply@emaratrade.com>`,
    to,
    subject,
    html,
  });
};