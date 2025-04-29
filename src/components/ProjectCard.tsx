interface ProjectCardProps {
  url: string;
  alt: string;
  title: string;
  programLanguage: {
    id: string;
    name: string;
  }[];
}

function ProjectCard({ url, alt, title, programLanguage }: ProjectCardProps) {
  return (
    <div className="h-full bg-tertiary-200 rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={url}
        alt={alt}
        className="w-full h-72 md:h-80 object-top object-cover"
      />
      <div className="px-4 py-5">
        <h3 className="text-base text-start font-semibold line-clamp-2 overflow-hidden text-ellipsis text-primaryy-200">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {programLanguage.map((lge) => (
            <span
              key={lge.id}
              className="text-xs text-tertiary-600 bg-quaternary-300 px-3 py-1 rounded"
            >
              {lge.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
