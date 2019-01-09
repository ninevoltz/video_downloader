browser.browserAction.onClicked.addListener(getURL);

browser.contextMenus.create({
    id: "download-youtube-video",
    title: "Download YouTube Video",
    contexts: ["link"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "download-youtube-video") {
        downloadVideo(info.linkUrl);
	}
});

function getURL() {
  browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      downloadVideo(tabs[0].url);
  })
}

function downloadVideo(video_url) {
	
	var formData = new FormData();	
	
	formData.append("video_url", video_url);

	var request = new XMLHttpRequest();
	request.open("POST", "https://192.168.1.2/youtube-dl.php");
	request.send(formData);

}