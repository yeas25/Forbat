let tg = window.Telegram.WebApp;
tg.expand();

let user = tg.initDataUnsafe.user;

let username = "Guest";

if(user){
    username = user.first_name;
}

let balance = localStorage.getItem("balance");

if(balance == null){
    balance = 0;
}

balance = Number(balance);

const usernameText = document.getElementById("username");
const balanceText = document.getElementById("balance");
const activity = document.getElementById("activity");

usernameText.innerText = username;
updateBalance();

function updateBalance(){
    balanceText.innerText = balance;
    localStorage.setItem("balance", balance);
}

function addActivity(text){
    let li = document.createElement("li");
    li.innerText = text;
    activity.prepend(li);
}

function watchAd(){

    alert("Ad watched successfully");

    balance += 10;

    updateBalance();

    addActivity("+10 coins from ad");
}

function dailyBonus(){

    let lastClaim = localStorage.getItem("daily_bonus");

    let today = new Date().toDateString();

    if(lastClaim == today){
        alert("Already claimed today");
        return;
    }

    balance += 50;

    localStorage.setItem("daily_bonus", today);

    updateBalance();

    addActivity("+50 daily bonus");

    alert("Daily bonus claimed");
}

function copyReferral(){

    let ref = "https://t.me/YOUR_BOT_USERNAME/app?startapp=ref123";

    navigator.clipboard.writeText(ref);

    alert("Referral link copied");

    addActivity("Referral copied");
}
