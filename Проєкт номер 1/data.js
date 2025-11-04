const info = [
    "«Комп’ютер — це втілення логіки, але його створила людська фантазія.» / “A computer is the embodiment of logic, yet born from human imagination.”",
    "«Не бійся помилок у коді — бійся їх не шукати.» / “Don’t fear mistakes in code — fear not looking for them.”",
    "«Технології розвиваються, але мудрість залишається справою людини.» / “Technology evolves, but wisdom remains a human task.”",
    "«Штучний інтелект не замінить людину, яка мислить творчо.» / “Artificial intelligence will never replace a mind that thinks creatively.”",
    "«Комп’ютер робить те, що ти кажеш, а не те, що ти мав на увазі.» / “A computer does what you say, not what you mean.”",
    "«Найкращий код — це той, який можна прочитати, а не лише виконати.» / “The best code is the one that can be read, not just executed.”",
    "«Інновації народжуються там, де є цікавість і помилка.» / “Innovation is born where curiosity meets error.”",
    "«Кожен байт несе в собі працю тисячі думок.» / “Every byte carries the work of a thousand thoughts.”",
    "«Навіть найрозумніша машина потребує людської ідеї.» / “Even the smartest machine needs a human idea.”",
    "«Технології — лише інструмент. Головне — як ним користуватись.» / “Technology is just a tool. What matters is how we use it.”",
    "«Комп’ютер може рахувати, але тільки людина може розуміти сенс.» / “A computer can calculate, but only a human can understand meaning.”",
    "«Кожен програміст починав з помилки — і це найкраща освіта.» / “Every programmer started with a mistake — and that’s the best education.”",
    "«Машини роблять роботу, люди — відкриття.» / “Machines do the work, humans make the discoveries.”",
    "«Найскладніша програма починається з одного рядка коду.» / “The most complex program begins with a single line of code.”",
    "«Технології — це продовження людського розуму.» / “Technology is the extension of the human mind.”"
];


function showInfoOfDay() {
    const el = document.getElementById("infoOfDay");
    if (el) el.textContent = info[Math.floor(Math.random() * info.length)];
}


function enlarge(img) { img.style.transform = "scale(1.5)"; }
function shrink(img) { img.style.transform = "scale(1)"; }


function doMath() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    document.write("Сума: " + (a + b) + "<br>");
    document.write("Різниця: " + (a - b) + "<br>");
    alert("Добуток: " + (a * b));
    alert("Частка: " + (b !== 0 ? a / b : "Ділення на нуль!"));
}


let lastHTML = null;
function showSelectedImage() {
    const val = document.querySelector('input[name="choice"]:checked').value;
    lastHTML = document.body.innerHTML;
    document.body.innerHTML = `<img src="images/BAller.jpg" width="1500"><br>`;
}
function restoreFromImage() {
    const holder = document.getElementById("imageHolder");
    holder.innerHTML = "index.html";
    document.getElementById("backBtn").style.display = "style.css";
}

function goToPage(val) {
    if (val) window.location.href = val;
}


window.addEventListener("DOMContentLoaded", showInfoOfDay);
