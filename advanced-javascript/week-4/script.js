import { apiKey, crudApi } from "./api.js";

const urlInput = document.getElementById("url-input");
const sendUrlBtn = document.getElementById("send-btn");
const screensContainer = document.getElementById("screens-Container");

//- screenShot class
class Screenshot {
  constructor(id, url, imageUrl) {
    this.id = id;
    this.url = url;
    this.imageUrl = imageUrl;
  }
  render(screensContainer) {
    const screenItem = document.createElement("div");
    screenItem.className = "screen-item";
    screenItem.innerHTML = `
        <img src="${this.imageUrl}" alt="Screenshot" />
        <p class="url">${this.url}</p>
        <div class="screen-footer">
          <button type="button" class="fullscreen-btn">Full Screen</button>
          <button type="button" class="delete-btn">Delete Screen</button>
        </div>`;
    screensContainer.appendChild(screenItem);
  }
}

//-- generate Screenshot
sendUrlBtn.addEventListener("click", async () => {
  const url = urlInput.ariaValueMax.trim();
  if (!url) {
    alert("Please inter a URL.");
    return;
  }
  if (!url.match(/^https?:\/\/.+/)) {
    alert("URL must start with http:// or https://");
    return;
  }
  try {
    const encoded = encodeURIComponent(url);
    const apiUrl = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encoded}&width=1920&height=1080`;

    const res = await fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
      },
    });
    const data = await res.json();
    if (!data.ScreenshotUrl) throw new Error("No screenshot from API.");
  } catch (err) {
    console.error(err);
  }
});
