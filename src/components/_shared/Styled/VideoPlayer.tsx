// @ts-ignore
import Video from "next-video";
// @ts-ignore
import awesomeVideo from "/videos/vid.mp4";

export default function VideoPlayer() {
  return <Video src={awesomeVideo} />;
}
