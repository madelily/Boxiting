// elements
const toggleThemeBtn = document.querySelector(".header__theme-button");

// toggle theme button
toggleThemeBtn.addEventListener("click", () => {
  // toggle root class
  document.documentElement.classList.toggle("darkTheme");
});

// set initail theme from LocalStorage
document.onload = setInitailTheme(localStorage.getItem("theme"));
function setInitailTheme(themeKey) {
  if (themeKey === "dark") {
    document.documentElement.classList.add("darkTheme");
  } else {
    document.documentElement.classList.remove("darkTheme");
  }
}

// // Toggle Theme button
// toggleThemeBtn.addEventListener("click", () => {
//   // Toggle root class
//   document.documentElement.classList.toggle("darkTheme");

//   // Saving current theme on LocalStorage
//   if (document.documentElement.classList.contains("darkTheme")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "Light");
//   }
// });
