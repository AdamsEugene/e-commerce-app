"use client";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  let videoSrc = "https://youtu.be/FB_am3ZPY7I?si=bx6CODbGiEFCBfEk";

  return (
    <div>
      <ReactPlayer
        className="react-player"
        width="100%"
        height="400px"
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
