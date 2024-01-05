import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const VideoCard = ({ video }) => {
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const handleCardClick = () => {
    setShowVideoPlayer((current) => !current);
  };
  return (
    <button
      className="flex flex-col rounded bg-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-100"
      onClick={handleCardClick}
    >
      <div className="flex w-full  px-6 py-4">
        <div className="mb-2 flex w-full items-center justify-between">
          <div className="flex flex-1 ">
            <span>{video.title}</span>
          </div>
          <div className="flex items-center">
            {showVideoPlayer ? (
              <FaChevronUp className="h-6 w-6 text-gray-500" />
            ) : (
              <FaChevronDown className="h-6 w-6 text-gray-500" />
            )}
          </div>
        </div>
      </div>

      {showVideoPlayer && (
        <div className="mb-2 flex w-full flex-1 items-center justify-center">
          <div className="">
            <video
              src={`http://localhost:3000/videos/${video.url}`}
              controls
              width="400"
            />
          </div>
        </div>
      )}
    </button>
  );
};

export default VideoCard;
