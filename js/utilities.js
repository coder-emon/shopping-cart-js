function updateTotalNumber(isIncrease, elementId){
    const caseElement = document.getElementById(elementId);
    const caseNumberString = caseElement.value;
    let caseNumber = parseInt(caseNumberString);
    if(isIncrease){
        caseNumber = caseNumber + 1;
    }else{
        caseNumber = caseNumber - 1;
    }
    caseElement.value = caseNumber;
    console.log(caseNumber)
    return caseNumber;
}
function totalPrice(productNumber, PriceId, productPrice){
    const caseElement = document.getElementById(PriceId);
    const caseTotalPrice= productNumber * productPrice;
    caseElement.innerText = caseTotalPrice;
    console.log(productNumber)
}
function subTotalPrice(product1Id, product2Id, subtotalId){
    const casePriceString = document.getElementById(product1Id).innerText;
    const casePrice = parseInt(casePriceString)
    const phonePriceString = document.getElementById(product2Id).innerText;
    const phonePrice = parseInt(phonePriceString);
    const subTotalPrice = casePrice + phonePrice;
    const subtotalElement = document.getElementById(subtotalId);
    subtotalElement.innerText =subTotalPrice;
    return subTotalPrice;
}
function taxedPrice(subTotal){
    const taxElement = document.getElementById("tax")
    const totalTaxedElement = document.getElementById("taxed-price")
    const taxjAmount = subTotal * .10;
    const taxString = taxjAmount.toFixed(2);
    const tax = parseFloat(taxString);
    const totalTaxedPrice = subTotal + tax;
    taxElement.innerText = tax;
    totalTaxedElement.innerText = totalTaxedPrice;
}