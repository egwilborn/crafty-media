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
  return (
    <div className="w-5/12 py-8 bg-darkGreen h-full rounded-xl flex flex-col justify-start items-center">
      <img src={post.info.photo} className="w-96 h-72" />
      <p className="text-pink">{post.info.description}</p>
      <p>{crafter.data.bio}</p>
    </div>
  );
}
