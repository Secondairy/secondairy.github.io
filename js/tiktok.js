(async function () {
    if(!window.location.host.toLowerCase().includes("tiktok.com")) return console.log("Auto-TikTok-Scroller Error: Not on TikTok website.");
    else console.log("Auto-TikTok-Scroller Log: Starting bookmarklet...")
    function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function VideoDuration(duration, minusBy = 300) {
      return duration * 1000 - minusBy;
    }

    async function LoadVideos() {
    console.log("Auto-TikTok-Scroller Log: Loading Videos...");
    for (let i = 0; i < 8; i++) {
        let videos = Array.from(document.querySelectorAll('[data-e2e="recommend-list-item-container"]'));
        videos[videos.length - 1].scrollIntoView({
        block: "end",
        inline: "nearest",
        });
        await sleep(3000);
    }
    }
    await LoadVideos();
    /*
    if (document.querySelector('[data-e2e="recommend-list-item-container"]')) {
    document
        .querySelector(".lazyload-wrapper span.event-delegate-mask")
        ?.click();
    }
     */
    await sleep(8000);
    let downBtn = document.querySelector('[data-e2e="arrow-right"]');
    let video = document.getElementsByTagName("video")[0];
    console.log("Auto-TikTok-Scroller Log: Starting scrolling...");
    while (true) {
    await sleep(VideoDuration(video.duration, 740));
    if (document.querySelector('[data-e2e="arrow-right"]')) downBtn.click();
    else return;
    await sleep(1000);
    video = document.getElementsByTagName("video")[0];
    }
})();
