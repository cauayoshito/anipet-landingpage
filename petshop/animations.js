alert("JavaScript está funcionando!");

document.addEventListener("DOMContentLoaded", function () {
  const observer1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".animar").forEach((el) => {
    observer1.observe(el);
  });

  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".scroll-anim").forEach((img) => {
    observer2.observe(img);
  });
});
