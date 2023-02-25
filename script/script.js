

var VideosLink = document.getElementById("Videos-link");
VideosLink.addEventListener("mouseover", function() {
  var videoOverlay = document.createElement("div");
  videoOverlay.setAttribute("id", "video-overlay");
  videoOverlay.addEventListener("mouseout", function() {
    video.pause();
    document.body.removeChild(videoOverlay);
  });

  var video = document.createElement("video");
  video.setAttribute("src", "img/video.mp4");
  video.setAttribute("autoplay", "true");
  video.setAttribute("controls", "true");

  videoOverlay.appendChild(video);
  document.body.appendChild(videoOverlay);

  videoOverlay.addEventListener("click", function() {
    video.pause();
    document.body.removeChild(videoOverlay);
  });
});





