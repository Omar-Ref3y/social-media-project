const menuItems = document.querySelectorAll(".menu-item");

const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

const message = messages.querySelectorAll(".message");
const messageSearchBox = document.querySelector("#messages-search");

const theme = document.querySelector("#theme");
const themeMode = document.querySelector(".customize-theme");
const fontSize = document.querySelectorAll(".choose-size span");

const colorPalette = document.querySelectorAll(".choose-color span");

const bgColor = document.querySelectorAll(".customize-theme .card");

const bodyE = document.querySelector("body");
let root = document.querySelector(":root");
/*========================
========================*/

const changeActiveItems = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItems();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications").style.display = "none";
        } else {
            document.querySelector(".notifications").style.display = "block";
            document.querySelector(
                "#notifications .notifications-counter"
            ).style.display = "none";
        }
        if (item.classList != "messages") {
            messages.style.boxShadow = "0 0 0rem var(--color-primary)";
        }
    });
});

messagesNotifications.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 2rem var(--color-primary)";
    messagesNotifications.querySelector(".notifications-counter").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "0 0 0rem var(--color-primary)";
    }, 3000);
});

const searchMessage = () => {
    const val = messageSearchBox.value.toLowerCase();
    console.log(val);

    message.forEach((chat) => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};

messageSearchBox.addEventListener("keyup", searchMessage);

const openThemeMode = () => {
    themeMode.style.display = "flex";
};

const closeThemeMode = (T) => {
    if (T.target.classList.contains("customize-theme")) {
        themeMode.style.display = "none";
    }
};
theme.addEventListener("click", openThemeMode);
themeMode.addEventListener("click", closeThemeMode);

fontSize.forEach((size) => {
    let fontSizeE;
    size.addEventListener("click", () => {
        if (size.classList.contains("font-size-1")) {
            fontSizeE = "10px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSizeE = "13px";
            root.style.setProperty("----sticky-top-left", "5.4rem");
            root.style.setProperty("----sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSizeE = "16px";
            root.style.setProperty("----sticky-top-left", "-2rem");
            root.style.setProperty("----sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSizeE = "19px";
            root.style.setProperty("----sticky-top-left", "-5rem");
            root.style.setProperty("----sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSizeE = "22px";
            root.style.setProperty("----sticky-top-left", "-12rem");
            root.style.setProperty("----sticky-top-right", "-35rem");
        }
        document.querySelector("html").style.fontSize = fontSizeE;
        removeActiveSize();
        size.classList.add("active");
        localStorage.setItem("fontSize", fontSizeE);
    });
});
const removeActiveSize = () => {
    fontSize.forEach((e) => {
        e.classList.remove("active");
    });
};

colorPalette.forEach((e) => {
    let primaryHue;
    e.addEventListener("click", () => {
        if (e.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (e.classList.contains("color-2")) {
            primaryHue = 0;
        } else if (e.classList.contains("color-3")) {
            primaryHue = 30;
        } else if (e.classList.contains("color-4")) {
            primaryHue = 70;
        } else if (e.classList.contains("color-5")) {
            primaryHue = 170;
        }

        root.style.setProperty("--primary-Hue", primaryHue);
        colorPaletteRemoveActve();
        e.classList.add("active");
        localStorage.setItem("primaryHue", primaryHue);
    });
});

const colorPaletteRemoveActve = () => {
    colorPalette.forEach((e) => {
        e.classList.remove("active");
    });
};
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

let brightW;
let brightL;
let brightD;

const changeBgColor = () => {
    root.style.setProperty("--brightW", brightW);
    root.style.setProperty("--brightL", brightL);
    root.style.setProperty("--brightD", brightD);
};

bg1.addEventListener("click", () => {
    brightW = "100%";
    brightL = "95%";
    brightD = "17%";
    bg1.classList.add("active");
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    changeBgColor();
    localStorage.setItem("bgColor", "bg1");
});

bg2.addEventListener("click", () => {
    brightW = "20%";
    brightL = "15%";
    brightD = "95%";
    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBgColor();
    localStorage.setItem("bgColor", "bg2");
});

bg3.addEventListener("click", () => {
    brightW = "10%";
    brightL = "0%";
    brightD = "95%";
    bg3.classList.add("active");
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBgColor();
    localStorage.setItem("bgColor", "bg3");
});

window.addEventListener("load", () => {
    const savedBgColor = localStorage.getItem("bgColor");

    if (savedBgColor === "bg1") {
        bg1.click(); 
    } else if (savedBgColor === "bg2") {
        bg2.click(); 
    } else if (savedBgColor === "bg3") {
        bg3.click();
    }

    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
        document.querySelector("html").style.fontSize = savedFontSize; 
    }

    const savedPrimaryHue = localStorage.getItem("primaryHue");
    if (savedPrimaryHue) {
        root.style.setProperty("--primary-Hue", savedPrimaryHue);
    }
});
