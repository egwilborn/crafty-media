export default function PostCard({ post }) {
  return (
    <div className="w-5/12 py-8 bg-darkGreen h-full rounded-xl flex flex-col justify-start items-center">
      <img src={post.info.photo} className="w-96 h-72" />
      <p className="text-pink">{post.info.description}</p>
    </div>
  );
}
