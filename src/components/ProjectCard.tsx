interface ProjectCardProps {
  imgUrl: string;
  title: string;
  tags: { tags: string }[];
}

function ProjectCard({ imgUrl, title, tags }: ProjectCardProps) {
  return (
    <div className="h-full bg-tertiary-200 rounded-xl overflow-hidden shadow-md mx-2">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
      />
      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis text-primaryy-200">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-tertiary-600 bg-quaternary-300 px-3 py-1 rounded"
            >
              {tag.tags}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
