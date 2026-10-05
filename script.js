function checkData() {
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    const pages = {
        "123 456": "uve.html",
        "456 123": "fier.html",
        "345 214": "frida.html",
        "234 513": "hildred.html",
	"234 235": "rikrol.html"
    };

    const key = name + " " + password;

    if (pages[key]) {
        window.location.href = pages[key];
    } else {
        document.getElementById("error").textContent =
            "Введенные данные не найдены.";
    }
}


document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkData();
    }
});