// var casingIncrease = document.getElementById('casing-increase');
// casingIncrease.addEventListener('click', function(){
//     const casingCount = document.getElementById('case-count');
//     const caseCount = parseInt(casingCount.value);
//     const caseNewQuantity = caseCount + 1;
//     casingCount.value =  caseNewQuantity;
//     const caseTotalCost = caseNewQuantity * 59;
//     document.getElementById('case-total-cost').innerText = caseTotalCost;
// });
// var casingDecreaseBtn = document.getElementById('casing-decrease');
// casingDecreaseBtn.addEventListener('click', function(){
//     const casingCount = document.getElementById('case-count');
//     const caseValue = parseInt(casingCount.value);
//     const caseNewQuantity = caseValue - 1;
//     casingCount.value = caseNewQuantity;
//     const caseTotalCost = caseNewQuantity*59;
//     document.getElementById('case-total-cost').innerText = caseTotalCost;
// });

function handleProductChange(isIncrease){
    const casingCount = document.getElementById('case-count');
    const caseValue = parseInt(casingCount.value);
    let caseNewQuantity = 0;
    if(isIncrease == true){
        caseNewQuantity = caseValue + 1;
    }
    if(isIncrease == false && caseValue > 0){
        caseNewQuantity = caseValue - 1;
    }
    casingCount.value = caseNewQuantity;
    const caseTotalCost = caseNewQuantity*59;
    document.getElementById('case-total-cost').innerText = caseTotalCost;
}