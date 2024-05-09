document.getElementById('calculation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const result = 8 * distance;
    
    document.getElementById('result').innerText = `Соимость доставки составит: ${result} + цена загрузки`;
});