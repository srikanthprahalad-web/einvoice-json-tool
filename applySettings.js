(function applyThemeGlobally() {
  const themeVars = JSON.parse(localStorage.getItem("activeThemeVars") || "{}");
  if (!Object.keys(themeVars).length) return;
  Object.entries(themeVars).forEach(([k, v]) => {
    document.documentElement.style.setProperty(k, v);
  });
})();
const SETTINGS_KEY = "eInvSettings";
const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");

function getSetting(key, fallback) {
  return settings[key]?.value ?? fallback;
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

function loadHomePage() {
  // your home page file name
  const home = "../index.html";
  
  // get current page name
  const current = window.location.pathname.split("/").pop();
  
  // if already on home page, do nothing
  if (current === home || current === "") {
    return;
  }
  
  // otherwise redirect to home page
  window.location.href = home;
}