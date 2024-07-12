import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// revalidates the about page
async function GET() {
  revalidatePath("/about");
  return NextResponse.json({ msg: "Route revalidated!" }, { status: 200 })
}

export {
  GET
}

