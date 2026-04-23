import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";
import { isValidCode } from "@/app/lib/validation";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { id: "asc" },
    });
    return NextResponse.json(products);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code } = body;

    if (!isValidCode(code)) {
      return NextResponse.json({ error: "Invalid format" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: { code },
    });

    return NextResponse.json(product);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error" }, { status: 400 });
  }
}