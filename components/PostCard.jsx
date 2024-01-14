export default function PostCard({ post }) {
  return (
    <div className="w-6/12 bg-darkGreen h-2/5 rounded-xl">
      <p className="text-pink">{post.info.description}</p>
    </div>
  );
}
