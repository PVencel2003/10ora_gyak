function faktorialis(n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er *= i;
    }
    return er;
}

function binomiKoefficiens(n, k) {
    return faktorialis(n) / (faktorialis(k) * faktorialis(n - k));
}

window.onload = () => {
    const pascalContainer = document.getElementById("pascal");

    for (let sor = 0; sor < 10; sor++) {
        const sorDiv = document.createElement("div");
        sorDiv.classList.add("sor");

        for (let oszlop = 0; oszlop <= sor; oszlop++) {
            const elemDiv = document.createElement("div");
            elemDiv.classList.add("elem");
            elemDiv.innerText = binomiKoefficiens(sor, oszlop).toFixed(0);
            sorDiv.appendChild(elemDiv);
        }

        pascalContainer.appendChild(sorDiv);
    }
};
