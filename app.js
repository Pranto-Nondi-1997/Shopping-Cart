function getCount(product, isTrue, price) {
    if (isTrue == true) {
        let phnCount = document.getElementById(product + '-count');
        let phnCountValue = parseInt(phnCount.value);
        phnCount.value = phnCountValue + 1;
        let phnPrice = document.getElementById(product + '-price');
        phnPrice.innerText = price * phnCount.value;
        finalTotal();

    } else {
        let caseCount = document.getElementById(product + '-count');
        let caseCountValue = parseInt(caseCount.value);
        if (caseCountValue > 0) {
            caseCount.value = caseCountValue - 1;
        }
        let casePrice = document.getElementById(product + '-price');
        casePrice.innerText = price * caseCount.value;
        finalTotal();

    }

}

function getTotal(product) {
    let inputValue = document.getElementById(product + '-count').value;
    let inputValueGet = parseInt(inputValue);
    return inputValueGet;
}

function finalTotal() {
    let subTotal = getTotal('phn') * 1200;
    let caseTotal = getTotal('case') * 60;
    let subTotalResult = subTotal + caseTotal;
    let subTotalGet = document.getElementById('sub-total');
    subTotalGet.innerText = subTotalResult;
    let taxTotal = document.getElementById('tax-total');
    let taxValue = subTotalResult / 10;
    taxTotal.innerText = taxValue;
    let total = document.getElementById('total');
    total.innerText = subTotalResult + taxValue;

}




// phn count number
document.getElementById('plus-btn').addEventListener('click', function() {
    getCount('phn', true, 1200);

})
document.getElementById('minus-btn').addEventListener('click', function() {

        getCount('phn', false, 1200);
    })
    // phn case count number
document.getElementById('case-plus').addEventListener('click', function() {


    getCount('case', true, 60);
})
document.getElementById('case-minus').addEventListener('click', function() {


    getCount('case', false, 60);
})