import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  console.log("slug" + slug);
  try {
    if (slug === "popular") {
      const posts = await prisma.post.findMany({
        take: 5,
        orderBy: { views: "desc" },
        include: { user: true },
      });

      return new NextResponse(JSON.stringify(posts, { status: 200 }));
    }

    if (slug === "featured") {
      const posts = await prisma.post.findMany({
        take: 1,
        orderBy: { createdAt: "desc" },
        include: { user: true },
      });

      return new NextResponse(JSON.stringify(posts, { status: 200 }));
    }

    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
