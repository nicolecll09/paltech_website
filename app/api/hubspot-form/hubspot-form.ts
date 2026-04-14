// pages/api/hubspot-form.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = req.body;

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formGuid = process.env.HUBSPOT_FORM_GUID;

    if (!portalId || !formGuid) {
      return res
        .status(500)
        .json({ ok: false, error: "Missing HubSpot environment variables" });
    }

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: body.name ?? "" },
        { name: "email", value: body.email ?? "" },
        { name: "phone", value: body.phone ?? "" },
        { name: "company", value: body.company ?? "" },
        { name: "request_type", value: body.requestType ?? "" },
        { name: "address", value: body.address ?? "" },
        { name: "farm_size", value: body.farmSize ?? "" },
        { name: "anbauverband", value: body.anbauverband ?? "" },
        { name: "weeds", value: Array.isArray(body.weeds) ? body.weeds.join(";") : "" },
        { name: "other_weeds", value: body.otherWeeds ?? "" },
        { name: "message", value: body.message ?? "" },
        { name: "newsletter_opt_in", value: body.newsletter ? "true" : "false" },
      ],
      context: {
        pageUri: body.pageUri ?? "",
        pageName: body.pageName ?? "Website contact form",
      },
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotPayload),
      }
    );

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      return res.status(response.status).json({
        ok: false,
        error: "HubSpot submission failed",
        details: result,
      });
    }

    return res.status(200).json({ ok: true, result });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}