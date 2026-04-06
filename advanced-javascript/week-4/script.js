import { apiKey, crudApi } from "./api.js";

const urlInput = document.getElementById("url-input");
const sendUrlBtn = document.getElementById("send-btn");
const screensContainer = document.getElementById("screens-container");

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
        <a href="${this.url}" target="_blank">${this.url}</a>
        <div class="screen-footer">
          <button type="button" class="fullscreen-btn">Full Screen</button>
          <button type="button" class="delete-btn">Delete Screen</button>
        </div>`;

    const fullBtn = screenItem.querySelector(".fullscreen-btn");
    const delBtn = screenItem.querySelector(".delete-btn");

    delBtn.addEventListener("click", async () => {
      try {
        await fetchWithError(`${crudApi}/${this.id}`, { method: "DELETE" });
        screenItem.remove();
      } catch (err) {
        handleError(err);
      }
    });

    fullBtn.addEventListener("click", () => {
      window.open(this.imageUrl, "_blank");
    });

    screensContainer.appendChild(screenItem);
  }
}

//-- api function

async function saveToCrud(url, screenshotUrl) {
  await fetchWithError(crudApi, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, screenshot: screenshotUrl }),
  });
}

//--
async function loadFromCrud() {
  const res = await fetchWithError(crudApi);
  return await res.json();
}

//--
async function deleteFromCrud(id) {
  await fetchWithError(`${crudApi}/${id}`, { method: "DELETE" });
}

//-- render screenShots List
async function renderList() {
  try {
    const items = await loadFromCrud();
    if (!screensContainer) return;

    screensContainer.innerHTML = "";
    for (let item of items) {
      const shot = new Screenshot(item._id, item.url, item.screenshot);
      shot.render(screensContainer, async (id) => {
        try {
          await deleteFromCrud(id);
          await renderList();
        } catch (err) {
          handleError(err);
        }
      });
    }
  } catch (err) {
    handleError(err);
  }
}

//--
async function fetchWithError(url, options = {}) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new ApiError(`HTTP ${res.status}`);
    return res;
  } catch (err) {
    if (err.message === "Failed to fetch") throw new NetworkError();
    throw err;
  }
}

//--
function handleError(err) {
  if (err instanceof ValidationError) alert(err.toUserMessage());
  else if (err instanceof ApiError) alert(err.toUserMessage());
  else if (err instanceof NetworkError) alert(err.toUserMessage());
  else alert("Error: " + err.message);
  console.error(err);
}

//-- generate Screenshot
sendUrlBtn.addEventListener("click", async () => {
  const url = urlInput.value.trim();
  console.log(url);
  if (!url) {
    handleError(new ValidationError("Please inter a URL."));
    return;
  }
  if (!url.match(/^https?:\/\/.+/)) {
    handleError(new ValidationError("URL must start with http:// or https://"));
    return;
  }
  try {
    const encoded = encodeURIComponent(url);
    const apiUrl = `https://pagepixels-screenshots.p.rapidapi.com/screenshots?url=${encoded}&width=1920&height=1080`;

    const res = await fetchWithError(apiUrl, {
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
      },
    });
    const data = await res.json();
    console.log(data);
    if (!data.screenshotUrl) throw new ApiError("No screenshot from API.");

    await saveToCrud(url, data.screenshotUrl);
    renderList();
    urlInput.value = "";
  } catch (err) {
    handleError(err);
  }
});
//-s
class ValidationError extends Error {
  toUserMessage() {
    return this.message || "Invalid input.";
  }
}
class ApiError extends Error {
  toUserMessage() {
    return this.message || "Server error. Try again later.";
  }
}
class NetworkError extends Error {
  toUserMessage() {
    return "Network problem. Check your connection.";
  }
}
renderList();
