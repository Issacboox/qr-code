import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const numId = Number(id);

  if (!numId) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await prisma.product.delete({
    where: { id: numId },
  });

  return NextResponse.json({ success: true });
}
