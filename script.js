const convertBtn = document.querySelector("#convert-btn");
const temperatureInput = document.querySelector("#temperature");
const unitFromSelect = document.querySelector("#unit-from");
const unitToSelect = document.querySelector("#unit-to");
const convertedTemperature = document.querySelector("#converted-temperature");

convertBtn.addEventListener("click", () => {
	const temperature = parseFloat(temperatureInput.value);
	const unitFrom = unitFromSelect.value;
	const unitTo = unitToSelect.value;

	if (isNaN(temperature)) {
		alert("Please enter a valid temperature!");
        return;
        }
        
        let convertedTemp;

if (unitFrom === "celsius" && unitTo === "fahrenheit") {
	convertedTemp = (temperature * 9/5) + 32;
} else if (unitFrom === "celsius" && unitTo === "kelvin") {
	convertedTemp = temperature + 273.15;
} else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
	convertedTemp = (temperature - 32) * 5/9;
} else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
	convertedTemp = (temperature + 459.67) * 5/9;
} else if (unitFrom === "kelvin" && unitTo === "celsius") {
	convertedTemp = temperature - 273.15;
} else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
	convertedTemp = temperature * 9/5 - 459.67;
} else {
	convertedTemp = temperature;
}

convertedTemperature.textContent = `${convertedTemp.toFixed(2)} ${unitTo.toUpperCase()}`;
});
