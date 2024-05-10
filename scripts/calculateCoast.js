document.getElementById('calculation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distanceInput = document.getElementById('distance');
    const resultElement = document.getElementById('result');

    const distance = parseFloat(distanceInput.value);

    if (distance <= 0) {
        resultElement.innerText = ' Пожалуйста, введите корректное значение расстояния (больше 0)';
    } else if (distance > 300) {
        const result = 8 * distance;
        resultElement.innerText = ` Стоимость доставки составит: ${result} рублей + цена разгрузочных работ
        Обратите внимание, доставка свыше 300 км не всегда может быть доступна. Прошу обсудить детали по телефону 888888888888`;
    }
  else if (distance < 30) {
    const result = 8 * distance;
    resultElement.innerText = `
    Обратите внимание - для перевозки менее, чем на 30 
    километров фиксированная цена -250 рублей + стоимость разгрузочных работ`;
}
 else {
        // Calculate result
        const result = 8 * distance;

        // Display the result
        resultElement.innerText = ` Стоимость доставки составит: ${result} рублей + стоимость разгрузочных работ`;
    }
});