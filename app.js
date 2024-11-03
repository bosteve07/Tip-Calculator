function calculateTip() {
    const amount = parseFloat(document.getElementById("billAmount").value);
    const percent = parseFloat(document.getElementById("percent").value);
    const tipValue = document.getElementById("tipAmount");
    const total = document.getElementById("totalAmount");

    // Check if amount and percent are valid numbers
    if (isNaN(amount) || isNaN(percent)) {
        tipValue.textContent = "Please enter valid numbers";
        total.textContent = "";
        return;
    }

    // Calculate tip and total, rounded to two decimal places
    const result = (amount * (percent / 100)).toFixed(2);
    const totalAmount = (amount + parseFloat(result)).toFixed(2);

    // Display the result with the Naira symbol
    tipValue.textContent = "Tip Ammount: \u20A6" + result;
    total.textContent = "Total Amount: \u20A6" + totalAmount;
}