document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  function revealSections() {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 120) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  const title = document.getElementById("id1");
  if (title) {
    title.addEventListener("mouseenter", () => {
      title.style.transform = "scale(1.15)";
    });

    title.addEventListener("mouseleave", () => {
      title.style.transform = "scale(1)";
    });
  }

  const subtitle = document.getElementById("paragraph1");
  if (subtitle) {
    const text = subtitle.innerText;
    subtitle.innerText = "";

    let i = 0;
    function typingEffect() {
      if (i < text.length) {
        
        if (text.charAt(i) === ' ') {
          subtitle.innerHTML += '&nbsp;';
        }

        subtitle.innerText += text.charAt(i);
        i++;
        setTimeout(typingEffect, 65);
      }
    }

    typingEffect();
  }

  const videoElement = document.getElementById("feature-video");
  if (videoElement) {
    const videoOptions = [
      {
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
      },
      {
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
      },
      {
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/earth.mp4",
        poster: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
      }
    ];

    let videoIndex = Math.floor(Math.random() * videoOptions.length);

    const setVideo = () => {
      const choice = videoOptions[videoIndex];
      videoElement.src = choice.src;
      videoElement.poster = choice.poster;
      videoElement.load();
    };

    const showFallback = () => {
      if (!document.querySelector("b.video-fallback")) {
        videoElement.insertAdjacentHTML(
          "afterend",
          '<p class="video-fallback">Video is unavailable right now. Please try reloading.</p>'
        );
      }
    };

    const tryNext = () => {
      videoIndex = (videoIndex + 1) % videoOptions.length;
      setVideo();
    };

    videoElement.addEventListener("error", () => {
      // Rotate through sources; if it keeps failing, show fallback.
      tryNext();
      setTimeout(showFallback, 500);
    });

    setVideo();
  }

  const audioToggle = document.getElementById("audio-toggle");
  if (audioToggle) {
    const backgroundAudio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    backgroundAudio.loop = true;
    backgroundAudio.volume = 0.35;
    let isPlaying = false;

    const updateButton = playing => {
      audioToggle.textContent = playing ? "Pause music" : "Play music";
      audioToggle.setAttribute("aria-pressed", playing);
    };

    audioToggle.addEventListener("click", () => {
      if (!isPlaying) {
        backgroundAudio.play().then(() => {
          isPlaying = true;
          updateButton(true);
        }).catch(() => {});
      } else {
        backgroundAudio.pause();
        isPlaying = false;
        updateButton(false);
      }
    });
  }
});





