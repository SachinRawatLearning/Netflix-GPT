import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-12 py-3 text-xl rounded-md bg-opacity-45">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 py-3 text-xl rounded-md bg-opacity-45">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;