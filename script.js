function checkZodiac() {
    const zodiac = document.getElementById("zodiac").value.trim().toLowerCase();
    if (zodiac === "berbec") {
        document.getElementById("question").style.display = "none";
        document.getElementById("lyrics").classList.remove("hidden");
        document.querySelector(".banner").classList.remove("hidden"); // show banner
        // Remove error info if exists
        const infoDiv = document.getElementById("info");
        if (infoDiv) {
            infoDiv.remove();
        }
        startSnow();
    } else {
        // Instead of alert, display a message in an info div appended inside #question
        let infoDiv = document.getElementById("info");
        if (!infoDiv) {
            infoDiv = document.createElement("div");
            infoDiv.id = "info";
            infoDiv.style.color = "red";
            // Append the info div inside the #question element
            document.getElementById("question").appendChild(infoDiv);
        }
        infoDiv.innerText = "GRESIT! Mai baga o fisa!";
    }
}

function startSnow() {
    const container = document.getElementById("snowflakes");
    setInterval(function () {
        const flake = document.createElement("div");
        flake.classList.add("flake");
        flake.innerText = "$";
        flake.style.left = Math.random() * 100 + "vw";
        const duration = Math.random() * 5 + 5; // 5 to 10 seconds
        flake.style.animationDuration = duration + "s";
        flake.style.fontSize = (Math.random() * 10 + 15) + "px";
        container.appendChild(flake);
        setTimeout(() => {
            container.removeChild(flake);
        }, duration * 1000);
    }, 500);
}
