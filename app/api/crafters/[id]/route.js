import { db } from "@/firebase";

export async function GET(_, { params }) {
  try {
    const res = await db.collection("crafters").doc(params.id).get();
    if (!res.exists) {
      return Response.json(
        { status: "error", message: "document not found" },
        { status: 404 }
      );
    } else {
      return Response.json(
        { status: "success", data: res.data() },
        { status: 200 }
      );
    }
  } catch (err) {
    return Response.json(
      { status: "error", message: JSON.stringify(err) },
      { status: 500 }
    );
  }
}
