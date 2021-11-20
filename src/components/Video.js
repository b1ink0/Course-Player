import React from "react";
import { useStateContext } from "../context/StateContext";

export default function Video() {
  const { videoUrl, autoplay } = useStateContext();
  return (
    <div style={{ width: "60vw" }}>
      {videoUrl === "" ? (
        <h1 className="videoH1">Select a video</h1>
      ) : (
        <video
          id="video"
          width="500"
          height="281.25"
          controls
          src={videoUrl}
          autoPlay={autoplay}
        ></video>
      )}
    </div>
  );
}
