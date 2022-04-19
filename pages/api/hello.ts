// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { OktaAuthOptions } from "@okta/okta-auth-js";
import { OktaAuth } from "@okta/okta-auth-js";

const oktaAuthConfig: OktaAuthOptions = {
  issuer: "https://<okta-domain>/oauth2/default",
  clientId: "<okta-client-id>",
  redirectUri: "<redirect-uri>",
  responseType: "code",
  scopes: ["openid", "email", "offline_access"],
  responseMode: "fragment",
};

const oktaAuth = new OktaAuth(oktaAuthConfig);

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(oktaAuth.options);
  res.status(200).json({ name: "John Doe" });
}
