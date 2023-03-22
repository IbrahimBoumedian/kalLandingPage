// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 800,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 800,
    delay: 700,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 800,
    easing: "easeOutExpo",
    delay: 1000,
  });

  const refSec = document.querySelector("#referral");
  const helloItem = document.querySelector("#lineDrawing");
  //   LOAD
  let lineDrawing = anime({
    targets: "#lineDrawing .lines path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1600,
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
window.addEventListener("scroll", () => {
  if (window.scrollY >= refSec.offsetTop - 310) {
    helloItem.classList.add("active");
    setTimeout(() => {
      helloItem.classList.remove("active");
      helloItem.remove();
    }, 5000);
  } else {
    // helloItem.classList.remove("active");
  }
});
