let btn = document.querySelector("#box");
console.dir(btn);
btn.onmouseover = () => {
    console.log("You have hovered on me");
}

let clk = document.querySelector("button");
clk.ondblclick = () => {
    console.log("Double clicked!");
}