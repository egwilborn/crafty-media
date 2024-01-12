"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
        console.log(posts);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No profile data</p>;

  const allPosts = posts.data.map(function (post) {
    return (
      <div>
        <p>{post.id}</p>
        <p>{post.info.description}</p>
      </div>
    );
  });
  return <div>{allPosts}</div>;
}
