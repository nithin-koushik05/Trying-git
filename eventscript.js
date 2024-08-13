// let btn = document.querySelector("#box");
// console.dir(btn);
// btn.onmouseover = () => {
//     console.log("You have hovered on me");

// }

let clk = document.querySelector("button");
clk.ondblclick = () => {
    console.log("Double clicked!");
}

let bckg_mode = document.querySelector("#mode");
let currMode = "light";
bckg_mode.addEventListener("click", () =>{
    //console.log("Your current mode is");
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";  
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white"; 
    }
    console.log(currMode);
}
);