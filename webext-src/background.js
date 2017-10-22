function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.ondata = event => {
    filter.write(event.data)
    filter.disconnect();
  }
  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {
    urls: ["*://*/*.fb2*"],
    types: ["main_frame"]
  },
  ["blocking"]
)

