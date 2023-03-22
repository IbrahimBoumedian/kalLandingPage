// Add class animation to headings
const headings = Array.from(
  document.querySelectorAll(".special-heading h2 , .special-heading p")
);
headings.forEach((item, index) => {
  item.className += ` wow animate__animated  animate__fadeInDown`;
  item.setAttribute("data-wow-duration", ".7s ");

  let itemTag = item.tagName.toLowerCase();
  if (itemTag === "p") {
    item.setAttribute("data-wow-delay", ".5s");
  }
});

// Add Animation class to terms items
const termsItems = Array.from(
  document.querySelectorAll("#terms .terms-row .term-item")
);
termsItems.forEach((element, index) => {
  element.className += ` wow animate__animated animate__fadeIn`;
  element.setAttribute("data-wow-duration", "1.2s");
  element.setAttribute("data-wow-delay", `${(index + 1) * 0.2}s`);
});

// Add Animation class to area items
const areaItems = Array.from(
  document.querySelectorAll("#areas .areas-items .area")
);

areaItems.forEach((area, index) => {
  area.className += `  wow animate__animated animate__fadeIn`;
  area.setAttribute("data-wow-duration", "1s");
  area.setAttribute("data-wow-delay", ` ${(index + 1) * 0.1}s`);
});

