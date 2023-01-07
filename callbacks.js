function loadScript(src, callback) {
  let script = document.createElement("src");
  script.src = src;
  script.onload = function () {
    console.log("script is loading with: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("script did not load");
    callback(new error("error occured"));
  };
}
function helloworld(error, src) {
  if (error) {
    console.log(error);
  } else {
    console.log("Hello world");
    console.log("script loaded with: " + src);
  }
}
loadScript("https://asdasd.com", helloworld);