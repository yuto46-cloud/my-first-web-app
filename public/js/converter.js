// ここからコードを書いてください
const setupConverter = function() {
    const converterForm = document.querySelector(".converter-form");
    const converterInput = document.querySelector(".converter-input");
    const selectForm = document.querySelector(".converter-from");
    const selectTo = document.querySelector(".converter-to");
    const converterResult = document.querySelector(".converter-result")
    const lengthUnit = [
  { name: "meter", base: 1 },
  { name: "kilometer", base: 1000 },
  { name: "centimeter", base: 0.01 },
  { name: "millimeter", base: 0.001 },
  { name: "inch", base: 0.0254 }, 
  { name: "foot", base: 0.3048 },
  { name: "yard", base: 0.9144 },
  { name: "mile", base: 1609.344 }
 ];
    lengthUnit.forEach(unit => {
        const fromOption = document.createElement('option');
        const toOption = document.createElement('option');

        fromOption.value = unit.base;
        fromOption.textContent = unit.name;
        toOption.value = unit.base;
        toOption.textContent = unit.name;
        
        selectForm.appendChild(fromOption);
        selectTo.appendChild(toOption);
    })
    selectForm.selectedIndex = 0;
    selectTo.selectedIndex = 2;

    const convertUnits = function() {
    const inputValue = parseFloat(converterInput.value);
    if (isNaN(inputValue)) {
        converterResult.textContent = 'Please enter a valid number';
        return;
    }
    const fromBase = parseFloat(selectForm.value);
    const toBase = parseFloat(selectTo.value);
    
    const convertedValue = (inputValue * fromBase) / toBase;
    const formattedValue = convertedValue.toFixed(3);
    const fromUnitName = selectForm.options[selectForm.selectedIndex].textContent;
    const toUnitName = selectTo.options[selectTo.selectedIndex].textContent;
    const resultMessage = `${inputValue} ${fromUnitName} = ${formattedValue} ${toUnitName}`;
    converterResult.textContent = resultMessage;
 }
    converterInput.addEventListener('input', convertUnits);
    selectForm.addEventListener('change', convertUnits);
    selectTo.addEventListener('change', convertUnits)

    convertUnits();
};

export { setupConverter }