
let display = document.getElementById("display");
let currentValue = "";

function appendValue(value) {
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  display.value = currentValue;
}

function deleteChar() {
  currentValue = currentValue.slice(0, -1);
  display.value = currentValue;
}

function calculate() {
  try {
    let result = eval(currentValue);
    display.value = result;
    currentValue = result.toString();
  } catch (error) {
    display.value = "Error";
    currentValue = "";
  }
}
