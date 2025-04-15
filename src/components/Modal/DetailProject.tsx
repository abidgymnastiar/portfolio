import { useState } from "react";
import { CgClose } from "react-icons/cg";
import img from "../../assets/Project/Pj-1/LandingPagedesktop.png";
import img2 from "../../assets/Project/Pj-1/LandingPageMobile.png";

interface DetailedHTMLProps {
  open: boolean;
  onClose: () => void;
}

function DetailProject({ open, onClose }: DetailedHTMLProps) {
  const [mainImage, setMainImage] = useState(img);

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
            {[img, img2].map((thumbnail, index) => (
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

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs text-tertiary-600 bg-quaternary-300 px-3 py-1 rounded">
            webflow
          </span>
        </div>

        {/* <h1 className="text-xl font-semibold mt-4 mb-2">Detail Project show project</h1> */}
        <p>Details about the project will be displayed here.</p>
      </div>
      <p>Show Project</p>
    </div>
  );
}

export default DetailProject;
