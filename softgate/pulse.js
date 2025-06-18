document.addEventListener("DOMContentLoaded", () => {
  let startTime = Date.now();
  let hoverSigils = document.querySelectorAll(".sigil");
  
  hoverSigils.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      let hoverTime = Date.now() - startTime;
      if (hoverTime > 4200) {
        el.classList.add("pulse");
      }
    });
  });
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 88 && window.scrollY < 188) {
    document.body.classList.add("soft-open");
    }
  });
});
