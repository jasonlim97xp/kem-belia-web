const VideoCard = ({ video, triggerVideoModal }) => {
  return (
    <button
      className="flex flex-col rounded bg-white shadow-lg transition duration-300 ease-in-out hover:bg-gray-100"
      onClick={triggerVideoModal(video)}
    >
      <div className="flex w-full px-4 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-1 text-start">
            <span className="text-black">{video.title}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default VideoCard;
