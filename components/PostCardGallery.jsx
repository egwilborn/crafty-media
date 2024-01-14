import PostCard from "./PostCard";
export default function PostCardGallery({ posts }) {
  let postCards = posts.data.map(function (post) {
    return <PostCard post={post} key={post.id} />;
  });
  return (
    <div className=" flex gap-y-12 py-12 bg-liteGreen h-fit flex-col justify-start items-center">
      {postCards}
    </div>
  );
}
