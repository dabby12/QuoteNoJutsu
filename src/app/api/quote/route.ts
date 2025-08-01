// app/api/quote/route.ts
import { request } from "http";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch("https://yurippe.vercel.app/api/quotes?random=1");
  const data = await res.json();
  return new Response(JSON.stringify(data[0]), {
    headers: { "Content-Type": "application/json" },
  });
}
;