function calculateReturns() {
    const amountInput = document.getElementById('amount').value;
    const amount = parseFloat(amountInput);

    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, ingresa un monto válido.');
        return;
    }

    const dailyReturnRate = 0.08; // 8%
    const dailyReturn = amount * dailyReturnRate;
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Resultados</h2>
        <p>Inversión inicial: ${amount.toFixed(2)} USDT</p>
        <p>Rendimiento diario (8%): ${dailyReturn.toFixed(2)} USDT</p>
    `;
}
