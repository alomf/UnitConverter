// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const unitInputEl = document.getElementById("unit-input");
const convertBtnEl = document.getElementById("convert-btn");
const lengthConversionEl = document.getElementById("length-conversion");
const volumeConversionEl = document.getElementById("volume-conversion");
const massConversionEl = document.getElementById("mass-conversion");

function getInputValue() {
    return Number(unitInputEl.value);
}

function resetInput() {
    unitInputEl.value = "";
    convertBtnEl.disabled = true;
}

function convertUnits(value) {
    let meterToFeet = 3.281;
    let literToGallon = 0.264;
    let kiloToPound = 2.204;

    let lengthFeet = value * meterToFeet;
    let lengthMeters = value / meterToFeet;

    let volumeGallons = value * literToGallon;
    let volumeLiters = value / literToGallon;

    let massPounds = value * kiloToPound;
    let massKilo = value / kiloToPound;

    return { lengthFeet, lengthMeters, volumeGallons, volumeLiters, massPounds, massKilo };
}

function renderConversion(value) {
    let calculateValues = convertUnits(value);

    let lengthConversion = `${value} meters = ${calculateValues.lengthFeet.toFixed(3)} feet | ${value} feet = ${calculateValues.lengthMeters.toFixed(3)} meters`;
    let volumeConversion = `${value} liters = ${calculateValues.volumeGallons.toFixed(3)} gallons | ${value} gallons = ${calculateValues.volumeLiters.toFixed(3)} liters`;
    let massConversion = `${value} kilos = ${calculateValues.massPounds.toFixed(3)} pounds | ${value} pounds = ${calculateValues.massKilo.toFixed(3)} kilos`;

    lengthConversionEl.textContent = lengthConversion;
    volumeConversionEl.textContent = volumeConversion;
    massConversionEl.textContent = massConversion;
}

unitInputEl.addEventListener("input", function() {
    convertBtnEl.disabled = false;
});

convertBtnEl.addEventListener("click", function() {
    let inputValue = getInputValue();
    if (inputValue > 0) {
        renderConversion(inputValue);
        resetInput();
    } else {
        alert(`Enter a number greater than 0.`);
        resetInput();
    }
});
