const infoArray = [
    "«Комп’ютер — це втілення логіки, але його створила людська фантазія.»",
    "«Не бійся помилок у коді — бійся їх не шукати.»",
    "«Технології розвиваються, але мудрість залишається справою людини.»",
    "«Штучний інтелект не замінить людину, яка мислить творчо.»",
    "«Комп’ютер робить те, що ти кажеш, а не те, що ти мав на увазі.»",
    "«Найкращий код — це той, який можна прочитати, а не лише виконати.»",
    "«Інновації народжуються там, де є цікавість і помилка.»",
    "«Кожен байт несе в собі працю тисячі думок.»",
    "«Навіть найрозумніша машина потребує людської ідеї.»",
    "«Технології — лише інструмент. Головне — як ним користуватись.»",
    "«Комп’ютер може рахувати, але тільки людина може розуміти сенс.»",
    "«Кожен програміст починав з помилки — і це найкраща освіта.»",
    "«Машини роблять роботу, люди — відкриття.»",
    "«Найскладніша програма починається з одного рядка коду.»",
    "«Технології — це продовження людського розуму.»"
];

window.addEventListener("DOMContentLoaded", () => {
    const info = document.getElementById("infoOfDay");
    info.textContent = infoArray[Math.floor(Math.random() * infoArray.length)];
});

function enlarge(img) { img.style.transform = "scale(1.2)"; }
function shrink(img) { img.style.transform = "scale(1)"; }

function doMath() {
    const a = +document.getElementById("a").value;
    const b = +document.getElementById("b").value;

    document.write(`Сума: ${a + b}<br>Різниця: ${a - b}<br>`);
    alert(`Добуток: ${a * b}`);
    alert(`Частка: ${b !== 0 ? (a / b) : "Ділення на нуль!"}`);
}

function showSelectedImage() {
    const form = document.getElementById("imgForm");
    const selected = form.choice.value;
    document.body.innerHTML = `
        <img src="images/${selected}" width="800"><br>
        <button onclick="location.reload()">Назад</button>
    `;
}

function goToPage(url) {
    if (url) location.href = url;
}
