const navbarObserver = () => {
  const navBar = document.querySelector(".navbar-start");
  const headerEl = document.querySelector("header");
  const navLink = document.querySelectorAll(".nav-link");

  const navOptions = {
    rootMargin: "-150px",
  };

  const navObserver = new IntersectionObserver(function (entries, navObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        navBar.classList.add("scrolled");
        navLink.forEach((nav) => nav.classList.add("scrolled-color"));
      } else {
        navBar.classList.remove("scrolled");
        navLink.forEach((nav) => nav.classList.remove("scrolled-color"));
      }
    });
  }, navOptions);

  navObserver.observe(headerEl);
};

export default navbarObserver;
