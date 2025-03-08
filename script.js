document.getElementById('applyDiscount').addEventListener('click', function () {
    const purchaseAmount = parseFloat(document.getElementById('purchaseAmount').value);

    if (isNaN(purchaseAmount)) {
        alert('Por favor, ingresa un monto válido');
        return;
    }

    let discountRate;
    if (purchaseAmount >= 1000) {
        discountRate = 0.15; // 15% de descuento
    } else if (purchaseAmount >= 500 && purchaseAmount <= 999) {
        discountRate = 0.10; // 10% de descuento
    } else {
        discountRate = 0.05; // 5% de descuento
    }

    const discountedAmount = purchaseAmount * discountRate;
    const finalPrice = purchaseAmount - discountedAmount;

    document.getElementById('discountRate').textContent = `${discountRate * 100}%`;
    document.getElementById('discountedAmount').textContent = discountedAmount.toFixed(2);
    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
    document.getElementById('purchaseAmount').value = ""; // Limpiar el campo de entrada
});