document.addEventListener("DOMContentLoaded", function() {
  let animatedElements = document.querySelectorAll(".scroll-animation");

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.opacity = "0";
      }
    });
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});
