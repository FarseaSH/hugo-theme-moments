let currentPlayBtn = null;
let currentPlaySong = null;

function togglePlay(nextPlaySong, nextBtn) {
    if (currentPlaySong == nextPlaySong) {
        // pause
        currentPlayBtn.classList.replace("fa-pause", "fa-play");
        currentPlaySong.pause();
        currentPlayBtn = null;
        currentPlaySong = null;
        return;
    } 
   
    if (currentPlaySong != null) {
        // currently there is no music playing.
        currentPlaySong.pause();
        currentPlayBtn.classList.replace("fa-pause", "fa-play");
    }
    
    // currenty there is music playing.
    currentPlayBtn = nextBtn
    currentPlaySong = nextPlaySong
    nextBtn.classList.replace("fa-play", "fa-pause");
    nextPlaySong.play();
}


function setProgressBar(e, playerProgressEl, song) {
    const width = playerProgressEl.clientWidth;
    const xValue = e.offsetX;
    console.log(width);
    console.log(xValue);
    song.currentTime = (xValue / width) * song.duration;
}

function updateProgressBar(progressEl, durationEl, currentTimeEl, song) {
    const { duration, currentTime } = song;
    const ProgressPercent = (currentTime / duration) * 100;
    progressEl.style.width = `${ProgressPercent}%`;
    const formattime = (timeRanges) =>
        String(Math.floor(timeRanges)).padStart(2, "0");
    durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
        duration % 60,
    )}`;
    currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
        currentTime % 60,
    )}`;
}

