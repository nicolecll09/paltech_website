// app/api/hubspot-form/route.ts
import { NextRequest, NextResponse } from "next/server";

type FormPayload = {
  requestType: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  farmSize?: string;
  anbauverband?: string;
  weeds?: string[];
  otherWeeds?: string;
  message?: string;
  newsletter?: boolean;
  pageUri?: string;
  pageName?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as FormPayload;

    if (!body.name || !body.email || !body.requestType) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (body.requestType === "purchase_inquiry") {
      if (!body.address || !body.anbauverband) {
        return NextResponse.json(
          {
            ok: false,
            error: "Address and anbauverband are required for purchase inquiries",
          },
          { status: 400 }
        );
      }
    }

    if (body.requestType === "other_request" && !body.message) {
      return NextResponse.json(
        { ok: false, error: "Message is required for other requests" },
        { status: 400 }
      );
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const formGuid = process.env.HUBSPOT_FORM_GUID;

    if (!portalId || !formGuid) {
      return NextResponse.json(
        { ok: false, error: "Missing HubSpot environment variables" },
        { status: 500 }
      );
    }

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: body.name },
        { name: "email", value: body.email },
        { name: "phone", value: body.phone ?? "" },
        { name: "company", value: body.company ?? "" },

        { name: "request_type", value: body.requestType },
        { name: "address", value: body.address ?? "" },
        { name: "farm_size", value: body.farmSize ?? "" },
        { name: "anbauverband", value: body.anbauverband ?? "" },
        { name: "weeds", value: body.weeds?.join(";") ?? "" },
        { name: "other_weeds", value: body.otherWeeds ?? "" },
        { name: "message_client", value: body.message ?? "" },
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      }
    );

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "HubSpot submission failed",
          details: result,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}