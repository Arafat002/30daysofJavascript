let kgValue = document.querySelector("#kg");
let lbValue = document.querySelector("#lb");
let ozValue = document.querySelector("#oz");


// conversion of kg

let convertFromKg = () => {
    let kg = kgValue.value;
    lbValue.value = (kg * 2.20462).toFixed(3);
    ozValue.value = (kg * 35.274).toFixed(3);

}

// conversion of lb

let convertFromLb = () => {
    let lb = lbValue.value;
    kgValue.value = (lb / 2.20462).toFixed(3);
    ozValue.value = (lb * 16).toFixed(3);

}

// conversion of oz

let convertFromOz = () => {
    let oz = ozValue.value;
    kgValue.value = (oz / 35.20462).toFixed(3);
    lbValue.value = (oz / 16).toFixed(3);

}

//passing function

kgValue.addEventListener("input", convertFromKg);
lbValue.addEventListener("input", convertFromLb);
ozValue.addEventListener("input", convertFromOz);
window.addEventListener("load", convertFromKg);
