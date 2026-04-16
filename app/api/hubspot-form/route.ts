import { NextRequest, NextResponse } from "next/server";

type RequestType =
  | "purchase_inquiry"
  | "demo_registration"
  | "newsletter"
  | "other_request";

type FormPayload = {
  requestTypes: RequestType[];
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

    const requestTypes = Array.isArray(body.requestTypes) ? body.requestTypes : [];

    if (!body.name?.trim() || !body.email?.trim() || requestTypes.length === 0) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isPurchaseInquiry = requestTypes.includes("purchase_inquiry");
    const isOtherRequest = requestTypes.includes("other_request");

    if (isPurchaseInquiry) {
      if (!body.address?.trim() || !body.anbauverband?.trim()) {
        return NextResponse.json(
          {
            ok: false,
            error: "Address and anbauverband are required for purchase inquiries",
          },
          { status: 400 }
        );
      }
    }

    if (isOtherRequest && !body.message?.trim()) {
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
        { name: "firstname", value: body.name.trim() },
        { name: "email", value: body.email.trim() },
        { name: "phone", value: body.phone?.trim() ?? "" },
        { name: "company", value: body.company?.trim() ?? "" },
        { name: "request_types", value: requestTypes.join(";") },
        { name: "address", value: body.address?.trim() ?? "" },
        { name: "farm_size", value: body.farmSize?.trim() ?? "" },
        { name: "anbauverband", value: body.anbauverband?.trim() ?? "" },
        { name: "weeds", value: Array.isArray(body.weeds) ? body.weeds.join(";") : "" },
        { name: "other_weeds", value: body.otherWeeds?.trim() ?? "" },
        { name: "message_client", value: body.message?.trim() ?? "" },
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