"use client";
import { useState, useEffect } from "react";
import PostCardGallery from "@/components/PostCardGallery";
export default function Home() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!posts) return <p>No profile data</p>;

  return (
    <div>
      <PostCardGallery posts={posts} />
    </div>
  );
}
