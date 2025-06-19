// Functie om live sensorwaarden bij te werken
function updateSensorValue(elementId, value) {
    document.getElementById(elementId).textContent = value; // Bijwerken van de display
}

// Event listener voor de temperatuur slider
document.getElementById('temperature-slider').addEventListener('input', function(event) {
    const temperature = event.target.value;
    document.getElementById('temperature-value').textContent = `${temperature}°C`; // Weergave slider
    updateSensorValue('live-temperature', `${temperature}°C`); // Bijwerken live sensorwaarde
});

// Event listener voor de luchtvochtigheid slider
document.getElementById('humidity-slider').addEventListener('input', function(event) {
    const humidity = event.target.value;
    document.getElementById('humidity-value').textContent = `${humidity}%`; // Weergave slider
    updateSensorValue('live-humidity', `${humidity}%`); // Bijwerken live sensorwaarde
});

// Event listener voor de luchtdruk slider
document.getElementById('pressure-slider').addEventListener('input', function(event) {
    const pressure = event.target.value;
    document.getElementById('pressure-value').textContent = `${pressure} hPa`; // Weergave slider
    updateSensorValue('live-pressure', `${pressure} hPa`); // Bijwerken live sensorwaarde
});
