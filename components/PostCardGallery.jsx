import PostCard from "./PostCard";
export default function PostCardGallery({ posts }) {
  let postCards = posts.data.map(function (post) {
    return <PostCard post={post} />;
  });
  return (
    <div className=" flex gap-y-6 py-6 bg-liteGreen h-screen flex-col justify-start items-center">
      {postCards}
    </div>
  );
}
