import { api, crudApi } from "./api.js";

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
  }
}
