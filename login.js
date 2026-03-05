// --- Users DB ---
let users = {};
let premium = 999;

let expiredMsg = `Your license has expired. To continue using the service, please renew your license by paying ₹${premium} per month.
Please send the following company details to minato.namikaze1763@gmail.com:
GSTIN, Company Name, Mobile Number, and Business Address. If possible, also attach a copy of your GST certificate. We will then share the bank details for payment.`;
async function loadUsers() {
  try {
    const response = await fetch("users.json");
    users = await response.json();
  } catch (error) {
    console.error("Error loading users.json:", error);
  }
}

// --- Helpers ---
function setSellerDetails(details) {
  document.getElementById("sellerGstin").value = details.Gstin || "";
  document.getElementById("sellerName").value = details.LglNm || "";
  document.getElementById("sellerAddr1").value = details.Addr1 || "";
  document.getElementById("sellerLoc").value = details.Loc || "";
  document.getElementById("sellerPin").value = details.Pin || "";
  document.getElementById("sellerStcd").value = details.Stcd || "";
  document.getElementById("sellerPh").value = details.Ph || "";
  
  
  // 🔹 Update header text
  const headerEl = document.querySelector(".header");
  if (headerEl) {
    headerEl.textContent = `Logged in as ${details.LglNm} - ${details.Gstin}`;
  }
}

// Save login with expiry (2 hrs)
function saveLogin(userKey) {
  const expiryTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hrs
  localStorage.setItem(
    "loginSession",
    JSON.stringify({ user: userKey, expiry: expiryTime })
  );
}

// Check session validity
function checkSession() {
  const session = localStorage.getItem("loginSession");
  if (!session) return null;
  
  const { user, expiry } = JSON.parse(session);
  
  // check license expiry using users object
  if (!checkExpiry(users[user].expiry)) {
    status.innerHTML = expiredMsg;
    return null;
  }
  
  // check session expiry
  if (Date.now() > expiry) {
    localStorage.removeItem("loginSession");
    return null;
  }
  
  return user;
}

function checkExpiry(date) {
  if (!date) return;
  const parts = date.split("-");
  const expiryDate = new Date(parts[2], parts[1] - 1, parts[0]);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  expiryDate.setHours(0, 0, 0, 0);
  
  return expiryDate >= today;
}

function showExpiryMsg(date) {
  const info = document.getElementById("expiry");
  
  // convert "01-04-2026" → Date object
  const parts = date.split("-");
  const expiryDate = new Date(parts[2], parts[1] - 1, parts[0]);
  
  const today = new Date();
  
  // remove time part
  today.setHours(0, 0, 0, 0);
  expiryDate.setHours(0, 0, 0, 0);
  
  const diffTime = expiryDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  let msg = "";
  
  if (diffDays < 0) {
    msg = "Licence expired";
  }
  
  else if (diffDays <= 3) {
    msg = `Your license will expire on ${date}. Please renew your license to continue using the service. The renewal fee is ₹${premium} per month. To make the payment, send your company details to our email id minato.namikaze1763@gmail.com and we will send the bank details.`;
  }
  
  else {
    msg = `Your license will expire on ${date}.`;
  }
  
  info.innerHTML = msg;
}




function loginWithKey() {
  const loginContainer = document.querySelector(".login-container");
  const loginKey = document.getElementById("login-key").value.trim();
  const status = document.getElementById("login-key-status");
  
  let foundUser = null;
  
  // Find the user with the matching key
  for (const key in users) {
    const u = users[key];
    if (u.keys && u.keys.includes(loginKey)) {
      foundUser = { key, user: u };
      showExpiryMsg(u.expiry);
      if (!checkExpiry(u.expiry)) {
        status.innerHTML = expiredMsg;
        return;
      }
      break;
    }
  }
  
  if (!foundUser) {
    status.innerHTML = "Invalid Key!";
    return;
  }
  
  const { key, user } = foundUser;
  
  if (!user.isActive) {
    status.innerHTML = "Your account has been suspended due to an outstanding payment. Kindly email minato.namikaze1763@gmail.com for further payment details. Account will be activated after payment.";
    return;
  }
  
  // Proceed with login
  setSellerDetails(user.details);
  loginContainer.classList.add("hidden");
  saveLogin(key);
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", async () => {
  await loadUsers();
  
  
  const loginContainer = document.querySelector(".login-container");
  const loginForm = document.querySelector(".login-form");
  
  // Auto-login if session valid
  const activeUser = checkSession();
  if (activeUser && users[activeUser]) {
    showExpiryMsg(users[activeUser].expiry);
    setSellerDetails(users[activeUser].details);
    loginContainer.classList.add("hidden");
  } else {
    loginContainer.classList.remove("hidden");
  }
  
  // Handle login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const status = document.getElementById("login-status");
    
    let foundUser = null;
    
    // Find matching user first
    for (const key in users) {
      const u = users[key];
      if (u.username === username && u.password === password) {
        foundUser = { key, user: u };
        showExpiryMsg(u.expiry);
        if (!checkExpiry(u.expiry)) {
          status.innerHTML = expiredMsg;
          return;
        }
        saveLogin(u);
        break;
      }
    }
    
    if (!foundUser) {
      status.innerHTML = "Invalid username or password!";
      return;
    }
    
    const { key, user } = foundUser;
    
    if (!user.isActive) {
      status.innerHTML = "Your account has been suspended due to an outstanding payment. Kindly email minato.namikaze1763@gmail.com for further payment details. Account will be activated after payment.";
      
      return;
    }
    
    // Proceed to login
    setSellerDetails(user.details);
    loginContainer.classList.add("hidden");
    saveLogin(key);
  });
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  if (!confirm("Are you sure want to log out?")) return;
  localStorage.removeItem("loginSession");
  location.reload(); // reload page
});