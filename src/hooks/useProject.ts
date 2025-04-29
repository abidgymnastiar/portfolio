import { useEffect, useState } from "react";
import client from "../../client";
import { PortableTextBlock } from "@portabletext/react";

export interface Project {
  id: string;
  title: string;
  mainImage: { asset: { url: string }; alt: string }[];
  description: PortableTextBlock[];
  programLanguage: {
    id: string;
    name: string;
  }[];
  link: string;
}

function useProject() {
  const [project, setProject] = useState<Project[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
            id,
            title,
            mainImage []{
                asset -> {
                    _id,
                    url
                },
                alt
            },
            programLanguage[]->{
                _id,
                name
            },
            description,
            link,
            }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);
  return { project };
}

export default useProject;
