document.getElementById("phone-plus-btn").addEventListener("click", function () {
    const caseNumber = updateTotalNumber(true, "phone-number")
    const productPrice = 1219;
    const caseTotalPrice = totalPrice(caseNumber, "phone-price", productPrice)
    const subTotal = subTotalPrice("case-price", "phone-price", "sub-total")
    taxedPrice(subTotal);
})
document.getElementById("phone-minus-btn").addEventListener("click", function () {
    const caseNumber = updateTotalNumber(false, "phone-number")
    const productPrice = 1219;
    const caseTotalPrice = totalPrice(caseNumber, "phone-price", productPrice)
    const subTotal = subTotalPrice("case-price", "phone-price", "sub-total")
    taxedPrice(subTotal);
});