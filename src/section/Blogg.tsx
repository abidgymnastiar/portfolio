import { PortableText } from "@portabletext/react";
import useProject from "../hooks/useProject";

function Blog() {
  const { project } = useProject();

  return (
    <div className="text-white">
      <h1>Blog News</h1>
      <div>
        {project.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.mainImage[0].asset.url} alt={post.mainImage[0].alt} />
            <PortableText value={post.description} />
            <p>
              {post.programLanguage.map((lang, index) => (
                <span key={`${post.id}-${index}`}>{lang.name}</span>
              ))}
            </p>
            <p>{post.link}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
