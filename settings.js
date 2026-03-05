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


const settings = {
  // Appearance
  theme: {
    value: "light",
    type: "select",
    options: {
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
    },
    label: "Theme",
    desc: "Select your preferred color theme for the E-Invoice Generator."
  },
  
  // Default Options
  defaultBuyer: {
    value: "",
    type: "select",
    options: {}, // This will be dynamically populated with buyer names
    label: "Default Buyer",
    desc: "Select the default buyer to be pre-selected when creating a new invoice."
  }
};
const actualBuyerMap = {
  0: {
    Gstin: "Select",
    LglNm: "Please select the buyer",
    Addr1: null,
    Addr2: null,
    Loc: null,
    Pin: null,
    Pos: null,
    Stcd: null,
    Ph: null,
    Em: null
  },
  "33AAACS7032B1ZZ": {
    Gstin: "33AAACS7032B1ZZ",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "PB NO-4 HARITHA HOSUR",
    Addr2: "TAMILNADU",
    Loc: "TAMILNADU",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  "29AAACS7032B1ZO": {
    Gstin: "29AAACS7032B1ZO",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "POST BOX 1 KADAKOLA POST,BYTHALI KARNATAK",
    Addr2: "KARNATAKA",
    Loc: "KARNATAKA",
    Pin: 591287,
    Pos: "29",
    Stcd: "29",
    Ph: null,
    Em: null
  },
  3: {
    Gstin: "02AAACS7032B1Z4",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "HIMACHAL PRADESH",
    Addr2: "HIMACHAL PRADESH",
    Loc: "HIMACHAL PRADESH",
    Pin: 176052,
    Pos: "02",
    Stcd: "02",
    Ph: null,
    Em: null
  },
  4: {
    Gstin: "36AAACB5861B1Z1",
    LglNm: "BERAR FINANCE LTD",
    Addr1: "2N, 2, WARANGAL CITY CENTER, MULGU ROAD, INDUSTRIAL ETATE,Hanumakonda",
    Addr2: "WARANGAL",
    Loc: "WARANGAL",
    Pin: 503002,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  5: {
    Gstin: "36AFHFS4680J1ZH",
    LglNm: "SAVERA AUTOCRAFT LLP",
    Addr1: "PLOT NO 22/5-3,NH 7",
    Addr2: "KAMAREDDY",
    Loc: "KAMAREDDY",
    Pin: 503111,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  6: {
    Gstin: "36AAACS7018R1ZU",
    LglNm: "SHRIRAM FINANCE LIMITED",
    Addr1: "3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Addr2: " 3-6-478,4TH FLOOR,ANAND ESTATES,LIBERTY ROAD,HIMAYATH NAGAR",
    Loc: "HYDERABAD",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  7: {
    Gstin: "36AADCT0724A1ZY",
    LglNm: "TVS CREDIT SERVICES LIMITED",
    Addr1: "KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  8: {
    Gstin: "33AAJFH7551C1ZL",
    LglNm: "HARITA INSURANCE BROKING LLP",
    Addr1: "NO 29,JAYALAKSHMI ESTATES,SECOND FLOOR,HADDOWS ROAD,NANGAMBAKKAM,CHENNAI",
    Addr2: "CHENNAI",
    Loc: "CHENNAI",
    Pin: 600006,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  },
  9: {
    Gstin: "36BPSPK8565G1Z6",
    LglNm: "SRI SAI MOTORS",
    Addr1: "3-39/4/E2,BANSWADA ROAD,PITLAM",
    Addr2: "PITLAM",
    Loc: "PITLAM",
    Pin: 503310,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  10: {
    Gstin: "36AAKCA3283E1ZQ",
    LglNm: "ADARSHA MOTOR SALES PRIVATE LIMITED",
    Addr1: "8-6-301/18,BYPASS ROAD,KARIMNAGAR",
    Addr2: "KARIMNAGAR",
    Loc: "KARIMNAGAR",
    Pin: 505001,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  11: {
    Gstin: "36BCUPG1861Q1ZT",
    LglNm: "AKSHAYA MOTORS",
    Addr1: "14-84/1/A,OPPOSITE HANUMAN MANDIR,BALKONDA",
    Addr2: "BALKONDA",
    Loc: "BALKONDA",
    Pin: 503217,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  12: {
    Gstin: "36AAACI1314G1Z4",
    LglNm: "INDUSIND BANK LTD",
    Addr1: "CONSUMER FINANCE DIVISION CONSUMER FINANCE DIVISION",
    Addr2: "SECUNDERABAD",
    Loc: "SECUNDERABAD",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  13: {
    Gstin: "27AAECI3370G1ZN",
    LglNm: "INDICOSMIC CAPITAL PVT.LTD",
    Addr1: "OFFICE NO 101,BABA HOUSE NEXT TO WEH METRO STATION ANDHERI EAST,MUMBAI",
    Addr2: "MUMBAI",
    Loc: "MUMBAI",
    Pin: 400093,
    Pos: "27",
    Stcd: "27",
    Ph: null,
    Em: null
  },
  14: {
    Gstin: "36ADWFS8368L1ZT",
    LglNm: "SRI SIDDARAMESHWARA AUTO MOTIVES",
    Addr1: "8-135/1,OPP GOVT HIGH SCHOOL,BHIKNOOR MAIN ROAD 8-135/1,OPP GOVT HIGH",
    Addr2: "SCHOOL,BHIKNOOR MAIN ROAD",
    Loc: "BHIKNOOR",
    Pin: 503101,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  15: {
    Gstin: "36ABVPU7412L1ZS",
    LglNm: "SRI VINAYAKA MOTORS",
    Addr1: "JANNEPALLY ROAD   8-194/1/B,MAIN ROAD,NAVIPET",
    Addr2: "NAVIPET",
    Loc: "NAVIPET",
    Pin: 503245,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  16: {
    Gstin: "36AAMCS8857L2ZC",
    LglNm: "SBI General Insurance company limited",
    Addr1: "Ozone Commercial Complex,3rd,Panjagutta Main Road,Hyderabad",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  17: {
    Gstin: "36AABCT3518Q1ZX",
    LglNm: "TATA AIG GENERAL INSURANCE CO LTD",
    Addr1: "Imperial Towers,H.No 7-1-6-617/A,5th and 6th Floor,GHMC no - 615,616, Ameerpet,Hyderabad,500016",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500016,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  18: {
    Gstin: "36AAYCA8340E1ZC",
    LglNm: "ANTARIKSH MOTORS PRIVATE LIMITED",
    Addr1: "8-1-351/a/11, RAHUL COLONY,Tolichowki Road,Hyderabad,500008",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500008,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  19: {
    Gstin: "36AAACS7032B1ZT",
    LglNm: "TVS MOTOR COMPANY LTD",
    Addr1: "FIRST FLOOR,2-11-30,PLOT NO-11,RUKMINI TOWER,PAIGHA COLONY,SECUNDRABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500003,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  20: {
    Gstin: "36AAFCL0077Q1Z1",
    LglNm: "LAXMI AUTO AGENCIES PRIVATE LIMITED",
    Addr1: "1-13-173,VINAYAK NAGAR,NIZAMABAD",
    Addr2: "NIZAMABAD",
    Loc: "NIZAMABAD",
    Pin: 503001,
    Pos: "36",
    Stcd: "36",
    Ph: 9440090930,
    Em: null,
  },
  21: {
    Gstin: "36AAACU5552C1ZK",
    LglNm: "UNITED INDIA INSURANCE COMPANY LIMITED",
    Addr1: "UNITED INDIA TOWERS 3 - 5 - 817 818,Floor No 2, OLD MLA QRTRS ROAD,BASHEERBAGH",
    Addr2: "BASHEERBAGH",
    Loc: "BASHEERBAGH",
    Pin: 500029,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36AADCI6523Q1Z3": {
    Gstin: "36AADCI6523Q1Z3",
    LglNm: "IDFC FIRST BANK LIMITED",
    Addr1: "Punnaiah Plaza,Plot No 83 and 84,Road No 2,Hyderabad",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500034,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36AAACI7573H1ZD": {
    Gstin: "36AAACI7573H1ZD",
    LglNm: "IFFCO-TOKIO GENERAL INSURANCE COMPANY LTD",
    Addr1: "1st Floor,Municipal No. 6-3-1107 and 6-3-1108, Raj Bhavan Road,SOMAJIGUDA",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  
  "36AAACK5934A1ZW": {
    Gstin: "36AAACK5934A1ZW",
    LglNm: "KOTAK MAHINDRA PRIME LIMITED",
    Addr1: "BRR COMPLEX   6-3-1107,1108-301 3RD FLOOR,RAJ BHAVAN ROAD SOMAJIGUDA,HYDERABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36ACMFS9275M2Z2": {
    Gstin: "36ACMFS9275M2Z2",
    LglNm: "SRI LAXMINARASIMHA MOTORS",
    Addr1: "19/41,,OPPOSITE SBH,RAMAYAMPET",
    Addr2: "RAMAYAMPET",
    Loc: "MEDAK",
    Pin: 502110,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null,
  },
  "36AAACR5055K1Z8": { Gstin: "36AAACR5055K1Z8", LglNm: "RELIANCE INDUSTRIES LIMITED", Addr1: "Lake Shore Towers, Rajbhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AABCR1718E1ZQ": { Gstin: "36AABCR1718E1ZQ", LglNm: "RELIANCE RETAIL LIMITED", Addr1: "Lake Shore Towers, Rajbhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACB2894G1ZO": { Gstin: "36AAACB2894G1ZO", LglNm: "BHARTI AIRTEL LIMITED", Addr1: "Splendid Towers, Huda Road, Begumpet", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500016, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACH7467D1ZL": { Gstin: "36AAACH7467D1ZL", LglNm: "HONDA MOTORCYCLE AND SCOOTER INDIA PRIVATE LIMITED", Addr1: "MB Towers, Road No.10, Banjara Hills", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACD7999Q1ZL": { Gstin: "36AAACD7999Q1ZL", LglNm: "DR REDDY'S LABORATORIES LTD", Addr1: "Banjara Hills, Road No.3 (principal place)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACA5443N3ZH": { Gstin: "36AAACA5443N3ZH", LglNm: "APOLLO HOSPITALS ENTERPRISE LIMITED", Addr1: "Apollo Health City Campus, Jubilee Hills", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500096, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACT2727Q1ZX": { Gstin: "36AAACT2727Q1ZX", LglNm: "TATA MOTORS LIMITED", Addr1: "Gumidelli Towers / Begumpet office (public record)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500016, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACB2902M1ZU": { Gstin: "36AAACB2902M1ZU", LglNm: "BHARAT PETROLEUM CORPORATION LTD", Addr1: "Banjara Hills state office (public record)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACS8577K1ZQ": { Gstin: "36AAACS8577K1ZQ", LglNm: "STATE BANK OF INDIA", Addr1: "Bank Street, Sultan Bazar, Koti", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500095, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACI1195H1ZN": { Gstin: "36AAACI1195H1ZN", LglNm: "ICICI BANK LIMITED", Addr1: "Jayalakshmi Towers / Begumpet (public record)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500016, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACK5934A1ZW": { Gstin: "36AAACK5934A1ZW", LglNm: "KOTAK MAHINDRA PRIME LIMITED", Addr1: "BRR Complex / Raj Bhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACA5443N3ZH": { Gstin: "36AAACA5443N3ZH", LglNm: "APOLLO HOSPITALS ENTERPRISE LTD", Addr1: "Apollo Health City Campus, Jubilee Hills", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500096, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "29AAACI4798L1ZU": { Gstin: "29AAACI4798L1ZU", LglNm: "INFOSYS LIMITED", Addr1: "Electronic City, 3rd Cross, Bangalore", Addr2: "Bengaluru", Loc: "Bengaluru", Pin: 560100, Pos: "29", Stcd: "29", Ph: null, Em: null },
  "24AAACM0829Q2Z9": { Gstin: "24AAACM0829Q2Z9", LglNm: "MARUTI SUZUKI INDIA LIMITED", Addr1: "Village Hansalpur, Near Becharaji (Ahmedabad)", Addr2: "Ahmedabad", Loc: "Ahmedabad", Pin: 382130, Pos: "24", Stcd: "24", Ph: null, Em: null },
  "27AAADCS3124K1ZD": { Gstin: "27AAADCS3124K1ZD", LglNm: "SUN PHARMACEUTICAL INDUSTRIES LTD", Addr1: "Sun House, Western Express Hwy, Goregaon East", Addr2: "Mumbai", Loc: "Mumbai", Pin: 400063, Pos: "27", Stcd: "27", Ph: null, Em: null },
  "27AAACI3370G1ZN": { Gstin: "27AAECI3370G1ZN", LglNm: "INDICOSMIC CAPITAL PVT. LTD", Addr1: "Andheri East office listing", Addr2: "Mumbai", Loc: "Mumbai", Pin: 400093, Pos: "27", Stcd: "27", Ph: null, Em: null },
  "36AAACK5934A1ZW": { Gstin: "36AAACK5934A1ZW", LglNm: "KOTAK MAHINDRA PRIME LIMITED", Addr1: "BRR Complex, Raj Bhavan Road, Somajiguda", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500082, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AAACS8577K1ZQ": { Gstin: "36AAACS8577K1ZQ", LglNm: "STATE BANK OF INDIA", Addr1: "Sultan Bazar / Koti district office listing (public)", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500095, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AADCI6523Q1Z3": { Gstin: "36AADCI6523Q1Z3", LglNm: "IDFC FIRST BANK LIMITED", Addr1: "Punnaiah Plaza, Road No 2, Hyderabad", Addr2: "Hyderabad", Loc: "Hyderabad", Pin: 500034, Pos: "36", Stcd: "36", Ph: null, Em: null },
  "36AABCB8091L1ZB": {
    Gstin: "36AABCB8091L1ZB",
    LglNm: "EMDE INSURANCE BROKERS LTD",
    Addr1: "3RD FLOOR, 6-3-1090/A/T-2 AND 6-3-1090/A/S1, Bhupal Towers, 6-3-1090/A, Raj Bhavan Road",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500082,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AAACE3882D1ZT": {
    Gstin: "36AAACE3882D1ZT",
    LglNm: "EICHER MOTORS LIMITED",
    Addr1: "Ground floor, 8-3-166/B to F, Erragadda Main Road, Besides Gokul Theatre, Erragadda",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500018,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "36AAAGC0017Q1ZJ": {
    Gstin: "36AAAGC0017Q1ZJ",
    LglNm: "CANTEEN STORE DEPARTMENT",
    Addr1: "R A LINES, TRIMULGIRY, TRIMULGIRY, SECUNDERABAD",
    Addr2: "Hyderabad",
    Loc: "Hyderabad",
    Pin: 500015,
    Pos: "36",
    Stcd: "36",
    Ph: null,
    Em: null
  },
  "33AAACE3882D1ZZ": {
    Gstin: "33AAACE3882D1ZZ",
    LglNm: "ROYAL ENFIELD (A UNIT OF EICHER MOTORS LIMITED)",
    Addr1: "Plot No 90/3, Block - D, Auto Nagar, Gajuwaka",
    Addr2: "Visakhapatnam",
    Loc: "Visakhapatnam",
    Pin: 530026,
    Pos: "33",
    Stcd: "33",
    Ph: null,
    Em: null
  }
};

function sortBuyerMapByName(buyerMap) {
  
  // Sort other buyers alphabetically by LglNm
  const sortedOthers = Object.values(buyerMap)
    .filter(b => b.Gstin !== "Select")
    .sort((a, b) => a.LglNm.localeCompare(b.LglNm))
    .map(buyer => ({
      ...buyer,
      display: `${buyer.LglNm} - ${buyer.Gstin}` // add display string
    }));
  
  // Return sorted list (Select first if exists)
  return [...sortedOthers];
}
const buyerMap = sortBuyerMapByName(actualBuyerMap);
settings.defaultBuyer.options = buyerMap;
const SETTINGS_KEY = "eInvSettings";

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

/* ========= LOAD SETTINGS ========= */
function loadSettings() {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      for (const key in parsed) {
        if (settings[key] !== undefined) {
          if ("value" in parsed[key]) {
            settings[key].value = parsed[key].value;
          }
          if ("selected" in parsed[key]) {
            settings[key].selected = parsed[key].selected || [];
          }
        }
      }
    } catch (e) {
      console.error("Failed to parse settings from storage", e);
    }
  }
}

/* ========= SAVE SETTINGS ========= */
/*
function saveSettings() {
  const values = {};
  for (const key in settings) {
    values[key] = { value: settings[key].value };
    if (settings[key].selected) {
      values[key].selected = settings[key].selected;
    }
  }
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(values));
}
*/
function saveSettings() {
  localStorage.setItem("eInvSettings", JSON.stringify(settings));
  
  // Also store active theme separately for easy global access
  const activeTheme = settings.theme.value;
  const themeVars = settings.theme.options[activeTheme];
  localStorage.setItem("activeThemeVars", JSON.stringify(themeVars));
  localStorage.setItem("appTheme", activeTheme);
}
/* ========= BUILD SETTINGS FORM ========= */
function buildSettingsForm() {
  const container = document.getElementById("settingsContainer");
  container.innerHTML = "";
  
  Object.entries(settings).forEach(([key, setting]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "setting-card";
    
    // Left section: Label + Description
    const left = document.createElement("div");
    
    const lbl = document.createElement("h3");
    lbl.textContent = setting.label;
    
    const desc = document.createElement("p");
    desc.textContent = setting.desc;
    
    left.appendChild(lbl);
    left.appendChild(desc);
    
    // Right section: Input
    const right = document.createElement("div");
    
    let input;
    
    switch (setting.type) {
      case "checkbox":
        input = document.createElement("input");
        input.type = "checkbox";
        input.checked = setting.value;
        input.className = "w-5 h-5 cursor-pointer accent-[var(--accent-color)]";
        break;
        
      case "number":
      case "text":
        input = document.createElement("input");
        input.type = setting.type;
        input.value = setting.value;
        input.className = "border rounded px-2 py-1 w-40 bg-[var(--bg-color)] text-[var(--text-color)] border-[var(--border-color)]";
        break;
        
      case "select":
        input = document.createElement("select");
        input.className = "border rounded px-2 py-1 w-48 bg-[var(--bg-color)] text-[var(--text-color)] border-[var(--border-color)]";
        
        if (Array.isArray(setting.options)) {
          // Handle array-based options (can be strings or objects)
          setting.options.forEach(opt => {
            const option = document.createElement("option");
            
            if (typeof opt === "object") {
              // Buyers or complex objects
              option.textContent = opt.display || opt.LglNm || opt.Gstin || "Unknown";
              option.value = opt.Gstin || opt.value || opt.LglNm || "";
            } else {
              // Simple array of strings
              option.textContent = opt;
              option.value = opt;
            }
            
            if (option.value === setting.value) option.selected = true;
            input.appendChild(option);
          });
          
        } else if (typeof setting.options === "object") {
          // Handle object-based options (like themes)
          Object.keys(setting.options).forEach(key => {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            if (key === setting.value) option.selected = true;
            input.appendChild(option);
          });
        }
        break;
        
      case "multiselect":
        const multiContainer = document.createElement("div");
        multiContainer.className = "flex flex-col space-y-1";
        
        setting.options.forEach(opt => {
          const item = document.createElement("label");
          item.className = "flex items-center gap-2";
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = opt;
          checkbox.checked = setting.selected.includes(opt);
          checkbox.className = "accent-[var(--accent-color)]";
          
          checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
              if (!settings[key].selected.includes(opt)) {
                settings[key].selected.push(opt);
              }
            } else {
              settings[key].selected = settings[key].selected.filter(x => x !== opt);
            }
            saveSettings();
          });
          
          const text = document.createElement("span");
          text.textContent = opt;
          
          item.appendChild(checkbox);
          item.appendChild(text);
          multiContainer.appendChild(item);
        });
        
        input = multiContainer;
        break;
    }
    
    // Common behavior for inputs
    if (input && setting.type !== "multiselect") {
      input.id = key;
      input.addEventListener("change", () => {
        if (input.type === "checkbox") {
          settings[key].value = input.checked;
        } else {
          settings[key].value = input.value;
        }
        saveSettings();
      });
    }
    
    right.appendChild(input);
    wrapper.appendChild(left);
    wrapper.appendChild(right);
    container.appendChild(wrapper);
  });
  
  
}
/* ========= INIT ========= */
window.addEventListener("beforeunload", saveSettings);


window.onload = () => {
  loadSettings();
  buildSettingsForm();
  // Apply selected theme
  function setTheme(themeName) {
    const theme = settings.theme.options[themeName];
    if (!theme) return;
    
    // Apply all CSS variables
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    saveSettings();
  }
  
  // Load and apply saved theme
  (function initTheme() {
    const savedSettings = JSON.parse(localStorage.getItem("eInvSettings") || "{}");
    const savedTheme = savedSettings.theme?.value || "light";
    setTheme(savedTheme);
  })();
};