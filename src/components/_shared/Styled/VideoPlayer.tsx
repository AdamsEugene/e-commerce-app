"use client";
import ReactPlayer from "react-player";

type PROPS = {
  url?: string;
};

let videoSrc = "https://youtu.be/YInQ137_J3Y?si=pvws--5hQah3_iWt";

const VideoPlayer = ({ url = videoSrc }: PROPS) => {
  return (
    <div className="!h-[min(500px,60vh)] xs:!h-[min(300px,40vh)] overflow-hidden !w-full">
      <ReactPlayer
        className="react-player !rounded-lg h-full"
        width="100%"
        height="100%"
        url={url}
        controls={false}
        light={false}
        pip={true}
      />
      <source src={url} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
