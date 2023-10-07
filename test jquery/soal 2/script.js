const colorInfo = {
    darkred: { name: "Dark Red", code: "#C00000" },
    red: { name: "Red", code: "#FF0000" },
    orange: { name: "Orange", code: "#FFA500" },
    yellow: { name: "Yellow", code: "#FFFF00" },
    lightgreen: { name: "Light Green", code: "#92D050" },
    green: { name: "Green", code: "#008000" },
    lightblue: { name: "Light Blue", code: "#00B0F0" },
    blue: { name: "Blue", code: "#0000FF" },
    darkblue: { name: "Dark Blue", code: "#002060" },
    purple: { name: "Purle", code: "#800080" },
};
const colorList = [];
document.getElementById("setColor").addEventListener("click", addColorInfo);

function addColorInfo() {
    debugger;
    const selectedColor = document.getElementById("color-list").value;
    const colorInfoData = colorInfo[selectedColor];
    colorList.push({ name: colorInfoData.name, code: colorInfoData.code });

    const colorLayout = document.getElementById("color-layout");
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = selectedColor;
    colorLayout.appendChild(colorBox);

    colorBox.addEventListener("click", function () {
        const clickedColor = colorInfo[selectedColor];
        const colorDisplay = document.getElementById("color-display");
        const colorNameSpan = document.getElementById("color-name");
        const colorCodeSpan = document.getElementById("color-code");
        colorDisplay.style.backgroundColor = selectedColor;
        colorNameSpan.textContent = colorInfoData.name;
        colorCodeSpan.textContent = colorInfoData.code;
    });
}

function reset() {
    const colorLayout = document.getElementById("color-layout");
    colorLayout.innerHTML = "";

    const colorDisplay = document.getElementById("color-display");
    colorDisplay.style.backgroundColor = "";

    const colorName = document.getElementById("color-name");
    colorName.innerHTML = "";

    const colorCode = document.getElementById("color-code");
    colorCode.innerHTML = "";

    const colorInfoList = document.getElementById("color-info-list");
    colorInfoList.innerHTML = "";

   
    colorList.length = 0;
}