import React from "react";

const Video = () => {
  return (
    <section
      className="video-section fix"
      data-bg-image="./assets/images/video/h1-video-bg.jpg"
      data-cursor='<i className="fa-sharp fa-solid fa-play-pause"></i>'
    >
      <div className="video_wrapper">
        <video
          className="playPause"
          poster="./assets/images/video/h1-video-bg.jpg"
          autoPlay
          muted
          loop
        >
          <source src="./assets/video/agency_video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
export default Video;
