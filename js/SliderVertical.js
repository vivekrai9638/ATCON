const sliderVertical = function () {
  const backgrounds = document.querySelectorAll(".bg-main");
  let z;
  let toggle = false;
  backgrounds.forEach((bg, i) => {
    setTimeout(function () {
      z = bg.style.zIndex;
      // bg.style.opacity = 1;
      toggle
        ? (bg.style.transform = "translateY(-100%)")
        : (bg.style.transform = "translateY(100%)");
      toggle = !toggle;
    }, (i + 1) * 5000);

    setTimeout(function () {
      z = z - 4;
      bg.style.zIndex = z;
      // bg.style.opacity = 0;
      bg.style.transform = "translateY(0%)";
    }, 1500 + (i + 1) * 5000);
  });
};

export default sliderVertical;
