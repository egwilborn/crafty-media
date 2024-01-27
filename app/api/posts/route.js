import { db } from "@/firebase";

export async function GET(_) {
  let posts = [];
  try {
    const res = await db.collection("posts").orderBy("datePosted").get();
    res.forEach(function (doc) {
      posts.push({ id: doc.id, info: doc.data() });
    });
    return Response.json({ status: "success", data: posts }, { status: 200 });
  } catch (err) {
    return Response.json(
      { status: "error", message: JSON.stringify(err) },
      { status: 400 }
    );
  }
}

export async function POST(request) {
  const formData = await request.formData();
  const data = formData.get("caption");
  const file = formData.get("file");
  if (!file) {
    return Response.json(
      { status: "error", message: JSON.stringify("No files received") },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  console.log(data);
  return Response.json({ status: "success", data: buffer });
}
