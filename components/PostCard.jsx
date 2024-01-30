import { useState, useEffect } from "react";

export default function PostCard({ post }) {
  const [crafter, setCrafter] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/crafters/${post.info.crafterId}`)
      .then((res) => res.json())
      .then((crafter) => {
        setCrafter(crafter);
        setLoading(false);
        console.log(crafter);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-5/12 py-8 bg-darkGreen h-full h-full rounded-xl flex flex-col justify-start items-center">
      <img src={post.info.photo} className="w-96 h-auto" />
      <div className="flex flex-row items-center justify-start w-full gap-3 pt-5">
        <div className="flex flex-col items-center pl-1 pt-1 w-3/12">
          <img
            className="h-16 w-16 rounded-full"
            src={crafter.data.profilePhotoUrl}
          />
          <p className="text-liteGreen">
            {crafter.data.firstName} {crafter.data.lastName}
          </p>
        </div>
        <p className="text-pink col-span-2 w-9/12 pr-2">
          {post.info.description}
        </p>
      </div>
    </div>
  );
}
