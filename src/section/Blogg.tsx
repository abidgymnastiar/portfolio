import { useEffect, useState } from "react";
import client from "../../client";
import { PortableText, PortableTextBlock } from "@portabletext/react";

function Blog() {
  interface Post {
    title: string;
    slug: { current: string };
    body: PortableTextBlock[];
    mainImage: { asset: { url: string }; alt: string };
  }

  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Blog News</h1>
      <div>
        {posts.map((post) => (
          <div key={post.slug.current}>
            <h2>{post.title}</h2>
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
            <PortableText value={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
