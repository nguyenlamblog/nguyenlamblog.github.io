// dark style
let root = document.documentElement,
  toggle = root.querySelector('button[data-toggle="dark"');
toggle.addEventListener(
  "click",
  (e) => {
    root.classList.toggle("dark");
    if (root.classList.contains("dark")) {
      localStorage.setItem("is-dark", 1);
    } else {
      localStorage.removeItem("is-dark");
    }
    e.preventDefault();
  },
  false
);
