

document.getElementById("case-plus-btn").addEventListener("click", function() {
    const  caseNumber= updateTotalNumber(true, "case-number")
    const productPrice = 59;
    const caseTotalPrice = totalPrice(caseNumber, "case-price", productPrice);
    const subTotal = subTotalPrice("case-price", "phone-price", "sub-total")
    taxedPrice(subTotal);
})
document.getElementById("case-minus-btn").addEventListener("click", function() {
    const caseNumber = updateTotalNumber(false, "case-number")
    const productPrice = 59;
    const caseTotalPrice = totalPrice(caseNumber, "case-price", productPrice);
    const subTotal = subTotalPrice("case-price", "phone-price", "sub-total");
    taxedPrice(subTotal);

});