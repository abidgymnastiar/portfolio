import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

interface DetailedHTMLProps {
  open: boolean;
  onClose: () => void;
  data?: {
    title: string;
    image: string[];
    tags: string[];
    description?: string;
  };
}

function DetailProject({ open, onClose, data }: DetailedHTMLProps) {
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (data && data.image && data.image.length > 0) {
      setMainImage(data.image[0]);
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
          <h2>Project 1</h2>
          <CgClose className="cursor-pointer" onClick={onClose} />
        </div>

        <div className="flex flex-row w-full gap-3">
          {/* Gambar utama */}
          <div className="max-h-[400px] overflow-y-auto mb-4 w-full">
            <img src={mainImage} alt="Landing Page" className="w-full" />
          </div>

          {/* Thumbnail */}
          <div className="w-[100px] flex flex-col gap-2">
            {data.image.map((thumbnail, index) => (
              <div
                key={index}
                onClick={() => setMainImage(thumbnail)}
                className="cursor-pointer border border-gray-300 hover:border-blue-500 transition duration-200"
              >
                <img
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-[70px] object-top object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-white bg-blue-500 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {data.description && (
          <p className="mt-4 text-sm text-gray-700">{data.description}</p>
        )}
      </div>
    </div>
  );
}

export default DetailProject;
