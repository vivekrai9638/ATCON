const revealScroll = () => {
  const sections = document.querySelectorAll("section");

  const scrollCallBack = function (entries, scrollObserver) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("hiddenScroll");
    scrollObserver.unobserve(entry.target);
  };

  const scrollOpt = {
    root: null,
    threshold: 0.1,
  };
  const scrollObserver = new IntersectionObserver(scrollCallBack, scrollOpt);

  sections.forEach((sec) => {
    sec.classList.add("hiddenScroll");
    sec.style.transition = "1s";
    scrollObserver.observe(sec);
  });
};

export default revealScroll;
