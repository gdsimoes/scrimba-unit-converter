// 1 meter = 3.28084 feet
// 1 liter = 0.264172 gallon
// 1 kilogram = 2.20462 pound

const m2f = 3.28084;
const l2g = 0.264172;
const k2p = 2.20462;

const converter = document.querySelector("#converter");
converter.addEventListener("click", () => {
    const scalar = Number(document.querySelector("#scalar").value);

    const lengthP = document.querySelector("#length p");
    const feet = (scalar * m2f).toFixed(3);
    const meters = (scalar / m2f).toFixed(3);
    lengthP.textContent = `${scalar} meters = ${feet} feet | ${scalar} feet = ${meters} meters`;

    const volumeP = document.querySelector("#volume p");
    const gallons = (scalar * l2g).toFixed(3);
    const liters = (scalar / l2g).toFixed(3);
    volumeP.textContent = `${scalar} liters = ${gallons} gallons | ${scalar} gallons = ${liters} liters`;

    const massP = document.querySelector("#mass p");
    const pounds = (scalar * k2p).toFixed(3);
    const kilos = (scalar / k2p).toFixed(3);
    massP.textContent = `${scalar} kilos = ${pounds} pounds | ${scalar} pounds = ${kilos} kilos`;
});
