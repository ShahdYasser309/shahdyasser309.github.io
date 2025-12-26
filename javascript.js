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
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        poster: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
      },
      {
        src: "https://cdn.coverr.co/videos/coverr-a-remote-fire-4363/1080p.mp4",
        poster: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
      },
      {
        src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
        poster: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
      }
    ];

    const chosenVideo = videoOptions[Math.floor(Math.random() * videoOptions.length)];
    videoElement.src = chosenVideo.src;
    videoElement.poster = chosenVideo.poster;
    videoElement.load();
    videoElement.play().catch(() => {});
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





