const themes = {
  // 1. Light
  light: {
    "--primary-color": "#1e3a8a",
    "--secondary-color": "#e0f2fe",
    "--accent-color": "#3b82f6",
    "--hover-color": "#1d4ed8",
    "--border-color": "#93c5fd",
    "--text-color": "#0f172a",
    "--bg-color": "#ffffff",
    "--danger-color": "#dc2626"
  },
  
  // 2. Dark
  dark: {
    "--primary-color": "#0f172a",
    "--secondary-color": "#1e293b",
    "--accent-color": "#3b82f6",
    "--hover-color": "#2563eb",
    "--border-color": "#334155",
    "--text-color": "#f1f5f9",
    "--bg-color": "#0f172a",
    "--danger-color": "#f87171"
  },
  
  // 3. Blue
  blue: {
    "--primary-color": "#1e40af",
    "--secondary-color": "#dbeafe",
    "--accent-color": "#2563eb",
    "--hover-color": "#1e3a8a",
    "--border-color": "#93c5fd",
    "--text-color": "#0f172a",
    "--bg-color": "#f8fafc",
    "--danger-color": "#ef4444"
  },
  
  // 4. Green
  green: {
    "--primary-color": "#065f46",
    "--secondary-color": "#d1fae5",
    "--accent-color": "#10b981",
    "--hover-color": "#047857",
    "--border-color": "#6ee7b7",
    "--text-color": "#064e3b",
    "--bg-color": "#ffffff",
    "--danger-color": "#dc2626"
  },
  ocean: {
    "--primary-color": "#1e3a8a",
    "--secondary-color": "#e0f7fa",
    "--accent-color": "#00bcd4",
    "--hover-color": "#0288d1",
    "--border-color": "#4dd0e1",
    "--text-color": "#0d3b66",
    "--bg-color": "#f0fdfa",
    "--danger-color": "#d32f2f"
  },
  lava: {
    "--primary-color": "#ff5722",
    "--secondary-color": "#fff3e0",
    "--accent-color": "#ff9800",
    "--hover-color": "#e65100",
    "--border-color": "#ffcc80",
    "--text-color": "#3e2723",
    "--bg-color": "#fff8f1",
    "--danger-color": "#b71c1c"
  },
  galaxy: {
    "--primary-color": "#4c1d95",
    "--secondary-color": "#0f172a",
    "--accent-color": "#6366f1",
    "--hover-color": "#9333ea",
    "--border-color": "#7dd3fc",
    "--text-color": "#e0f2fe",
    "--bg-color": "#1e1b4b",
    "--danger-color": "#f43f5e"
  },
  autumn: {
    "--primary-color": "#92400e",
    "--secondary-color": "#fff7ed",
    "--accent-color": "#d97706",
    "--hover-color": "#b45309",
    "--border-color": "#fcd34d",
    "--text-color": "#451a03",
    "--bg-color": "#fef3c7",
    "--danger-color": "#991b1b"
  },
  rainbow: {
    "--primary-color": "#e11d48", // red
    "--secondary-color": "#fef3c7", // yellow
    "--accent-color": "#22c55e", // green
    "--hover-color": "#3b82f6", // blue
    "--border-color": "#a78bfa", // violet
    "--text-color": "#111827",
    "--bg-color": "#ffffff",
    "--danger-color": "#dc2626"
  },
  // 5. Sunset
  sunset: {
    "--primary-color": "#b91c1c",
    "--secondary-color": "#fef3c7",
    "--accent-color": "#f97316",
    "--hover-color": "#c2410c",
    "--border-color": "#fdba74",
    "--text-color": "#431407",
    "--bg-color": "#fff7ed",
    "--danger-color": "#991b1b"
  },
  
  // 6. Neon
  neon: {
    "--primary-color": "#0ff",
    "--secondary-color": "#111827",
    "--accent-color": "#f0f",
    "--hover-color": "#ff0",
    "--border-color": "#22d3ee",
    "--text-color": "#e5e7eb",
    "--bg-color": "#000000",
    "--danger-color": "#ff1744"
  },
  
  // 7. Pastel
  pastel: {
    "--primary-color": "#a78bfa",
    "--secondary-color": "#f5d0fe",
    "--accent-color": "#f9a8d4",
    "--hover-color": "#f472b6",
    "--border-color": "#fbcfe8",
    "--text-color": "#4b5563",
    "--bg-color": "#fdf4ff",
    "--danger-color": "#fb7185"
  },
  
  // 8. Coffee
  coffee: {
    "--primary-color": "#6b4226",
    "--secondary-color": "#ede0d4",
    "--accent-color": "#a47148",
    "--hover-color": "#5c3d2e",
    "--border-color": "#ddb892",
    "--text-color": "#3e2723",
    "--bg-color": "#fff8f1",
    "--danger-color": "#b91c1c"
  },
  
  // 9. Solarized
  solarized: {
    "--primary-color": "#268bd2",
    "--secondary-color": "#fdf6e3",
    "--accent-color": "#2aa198",
    "--hover-color": "#859900",
    "--border-color": "#93a1a1",
    "--text-color": "#657b83",
    "--bg-color": "#eee8d5",
    "--danger-color": "#dc322f"
  },
  
  // 10. Purple
  purple: {
    "--primary-color": "#4c1d95",
    "--secondary-color": "#ede9fe",
    "--accent-color": "#7c3aed",
    "--hover-color": "#6d28d9",
    "--border-color": "#c4b5fd",
    "--text-color": "#1e1b4b",
    "--bg-color": "#f5f3ff",
    "--danger-color": "#e11d48"
  },
  
  // 11. Monochrome
  mono: {
    "--primary-color": "#444",
    "--secondary-color": "#f5f5f5",
    "--accent-color": "#666",
    "--hover-color": "#222",
    "--border-color": "#bbb",
    "--text-color": "#111",
    "--bg-color": "#fff",
    "--danger-color": "#e60000"
  },
  
  // 12. Gradient
  gradient: {
    "--primary-color": "#0f766e",
    "--secondary-color": "#e0f2fe",
    "--accent-color": "#6366f1",
    "--hover-color": "#312e81",
    "--border-color": "#a5f3fc",
    "--text-color": "#0f172a",
    "--bg-color": "#f0f9ff",
    "--danger-color": "#dc2626"
  },
  
  // EXTRA THEMES
  
  // 13. Rose
  rose: {
    "--primary-color": "#be123c",
    "--secondary-color": "#ffe4e6",
    "--accent-color": "#f43f5e",
    "--hover-color": "#9f1239",
    "--border-color": "#fecdd3",
    "--text-color": "#881337",
    "--bg-color": "#fff1f2",
    "--danger-color": "#e11d48"
  },
  
  // 14. Aqua
  aqua: {
    "--primary-color": "#0891b2",
    "--secondary-color": "#cffafe",
    "--accent-color": "#06b6d4",
    "--hover-color": "#155e75",
    "--border-color": "#a5f3fc",
    "--text-color": "#083344",
    "--bg-color": "#ecfeff",
    "--danger-color": "#e11d48"
  },
  
  // 15. Forest
  forest: {
    "--primary-color": "#14532d",
    "--secondary-color": "#dcfce7",
    "--accent-color": "#22c55e",
    "--hover-color": "#166534",
    "--border-color": "#86efac",
    "--text-color": "#052e16",
    "--bg-color": "#f0fdf4",
    "--danger-color": "#b91c1c"
  },
  
  // 16. Gold
  gold: {
    "--primary-color": "#b45309",
    "--secondary-color": "#fef9c3",
    "--accent-color": "#facc15",
    "--hover-color": "#92400e",
    "--border-color": "#fde68a",
    "--text-color": "#451a03",
    "--bg-color": "#fffbeb",
    "--danger-color": "#b91c1c"
  },
  
  // 17. Silver
  silver: {
    "--primary-color": "#737373",
    "--secondary-color": "#f5f5f5",
    "--accent-color": "#a3a3a3",
    "--hover-color": "#525252",
    "--border-color": "#d4d4d4",
    "--text-color": "#262626",
    "--bg-color": "#fafafa",
    "--danger-color": "#d00000"
  },
  
  // 18. Crimson
  crimson: {
    "--primary-color": "#7f1d1d",
    "--secondary-color": "#fee2e2",
    "--accent-color": "#dc2626",
    "--hover-color": "#991b1b",
    "--border-color": "#fecaca",
    "--text-color": "#450a0a",
    "--bg-color": "#fef2f2",
    "--danger-color": "#b91c1c"
  },
  
  // 19. Indigo
  indigo: {
    "--primary-color": "#312e81",
    "--secondary-color": "#e0e7ff",
    "--accent-color": "#4338ca",
    "--hover-color": "#3730a3",
    "--border-color": "#c7d2fe",
    "--text-color": "#1e1b4b",
    "--bg-color": "#eef2ff",
    "--danger-color": "#b91c1c"
  },
  
  // 20. Cyberpunk
  cyberpunk: {
    "--primary-color": "#ff007f",
    "--secondary-color": "#1a1a2e",
    "--accent-color": "#00fff7",
    "--hover-color": "#ff4dff",
    "--border-color": "#39ff14",
    "--text-color": "#f8f9fa",
    "--bg-color": "#0f0f1a",
    "--danger-color": "#ff3131"
  }
};

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("appTheme") || "light";
  setTheme(saved);
});

const themeBtn = document.getElementById("themeBtn");
const themeOptions = document.getElementById("themeOptions");

// Toggle dropdown on button click
themeBtn.addEventListener("click", () => {
  themeOptions.classList.toggle("hidden");
});

// Apply selected theme
function setTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  Object.keys(theme).forEach(key => {
    document.documentElement.style.setProperty(key, theme[key]);
  });
  localStorage.setItem("appTheme", themeName);
  themeOptions.classList.add("hidden"); // auto-close menu
}

// Hook up buttons
document.querySelectorAll(".theme-options button").forEach(btn => {
  btn.addEventListener("click", () => {
    setTheme(btn.dataset.theme);
  });
});


