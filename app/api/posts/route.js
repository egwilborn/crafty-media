import { db } from "@/firebase";

export async function GET(_) {
  let posts = [];
  try {
    const res = await db.collection("posts");
    console.log(res, posts);
    res.forEach(function (doc) {
      posts.push(doc);
    });
    return Response.json({ status: "success", data: posts }, { status: 200 });
  } catch (err) {
    return Response.json(
      { status: "error", message: JSON.stringify(err) },
      { status: 400 }
    );
  }
}
