"use client";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  let videoSrc = "https://youtu.be/YInQ137_J3Y?si=pvws--5hQah3_iWt";

  return (
    <div className="!rounded-2xl !h-[min(500px,60vh)] xs:!h-[min(300px,40vh)] overflow-hidden">
      <ReactPlayer
        className="react-player !rounded-lg h-full"
        width="100%"
        height="100%"
        url={videoSrc}
        controls={false}
        light={false}
        pip={true}
      />
      <source src={videoSrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
