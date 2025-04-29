import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

interface DetailProjectProps {
  open: boolean;
  onClose: () => void;
  data?: {
    title: string;
    mainImage: { asset: { url: string }; alt?: string }[];
    programLanguage?: { id: string; title: string }[];
    description?: string;
    link?: string;
  };
}

function DetailProject({ open, onClose, data }: DetailProjectProps) {
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (data && data.mainImage && data.mainImage.length > 0) {
      setMainImage(data.mainImage[0].asset.url);
    }
  }, [data]);

  if (!data) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-2xl  ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row justify-between items-center mb-4">
          <h2>{data.title}</h2>
          <CgClose className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex flex-row w-full gap-3">
          {/* Gambar utama */}
          <div className="max-h-[400px] overflow-y-auto mb-4 w-full">
            <img src={mainImage || ""} alt="Landing Page" className="w-full" />
          </div>

          {/* Thumbnail */}
          <div className="w-[100px] flex flex-col gap-2">
            {data.mainImage.map((thumbnail, index) => (
              <div
                key={index}
                onClick={() => setMainImage(thumbnail.asset.url)}
                className="cursor-pointer border border-gray-300 hover:border-blue-500 transition duration-200"
              >
                <img
                  src={thumbnail.asset.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-[70px] object-top object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* programLanguage */}
        <div className="flex flex-wrap gap-2 mt-4">
          {data.programLanguage?.map((lge) => (
            <span
              key={lge.id}
              className="text-xs text-white bg-blue-500 px-3 py-1 rounded-full"
            >
              {lge.title}
            </span>
          ))}
        </div>

        {data.description && (
          <p className="mt-4 text-sm text-gray-700">{data.description}</p>
        )}
        <div className="">
          <a
            href={data.link}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tampilan Projek
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailProject;
