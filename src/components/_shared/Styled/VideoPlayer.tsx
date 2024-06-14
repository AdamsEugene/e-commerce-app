export default function VideoPlayer() {
  return (
    <video width="100%" height="240" controls preload="none">
      <source src={'/videos/vid.mp4'} type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
