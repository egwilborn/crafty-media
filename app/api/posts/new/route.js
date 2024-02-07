import S3 from "aws-sdk/clients/s3";

export async function POST(request) {
  // accessing formdata
  const formData = await request.formData();
  // saving the file and the caption
  const data = formData.get("caption");
  const file = formData.get("file");
  // if there is no file --> error
  if (!file) {
    return Response.json(
      { status: "error", message: JSON.stringify("No files received") },
      { status: 400 }
    );
  }
  // getting the file as a buffer
  const buffer = Buffer.from(await file.arrayBuffer());
  // need to then gather information for putting file in aws bucket
  const clientS3 = new S3({});
  const BUCKET_NAME = process.env.BUCKET_NAME;
  const filePath = `craftymedia/posts/${req.file.originalname}`; //CONSIDER ADDING LOGGEDIN USER ID TO FIlENAME
  const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };
  // make the aws request and get back the url for the file
  // then need to put all the Post information into firebase
  return Response.json({ status: "success", data: buffer });
}
