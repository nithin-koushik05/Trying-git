const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const clkBtn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Getting fun facts for you.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.fact);
    factPara.innerText = data.fact;
}

clkBtn.addEventListener("click",getFacts);