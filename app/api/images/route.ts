import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all images
export async function GET(request: NextRequest) {
  try {
    const images = await prisma.image.findMany({
      orderBy: { createdAt: "desc" }, // Adjust according to your schema
    });
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching images" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
