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

// document.getElementById('phone-increase').addEventListener('click', function(){
//     const phoneQuantity =  document.getElementById('phone-value');
//     const phoneValue = parseInt(phoneQuantity.value);
//     const PhoneNewQuantity = phoneValue + 1;
//     phoneQuantity.value = PhoneNewQuantity;
//     const totalPhonePrize = PhoneNewQuantity*1219;
//     document.getElementById('total-phone-prize').innerText = totalPhonePrize;
// });

// document.getElementById('phone-decrease').addEventListener('click', function(){
//     const phoneQuantity =  document.getElementById('phone-value');
//     const phoneValue = parseInt(phoneQuantity.value);
//     const PhoneNewQuantity = phoneValue - 1;
//     phoneQuantity.value = PhoneNewQuantity;
//     const totalPhonePrize = PhoneNewQuantity*1219;
//     document.getElementById('total-phone-prize').innerText = totalPhonePrize;
// });

function handlePhoneChange(isIncrease){
    const phoneQuantity =  document.getElementById('phone-value');
    const phoneValue = parseInt(phoneQuantity.value);
    let phoneNewQuantity = 0;
    if(isIncrease == true){
        PhoneNewQuantity = phoneValue + 1;
    }
    if(isIncrease == false && phoneValue > 0){
        PhoneNewQuantity = phoneValue - 1;
    }
    phoneQuantity.value = PhoneNewQuantity;
    const totalPhonePrize = PhoneNewQuantity*1219;
    document.getElementById('total-phone-prize').innerText = totalPhonePrize;
}
function handleCasingChange(isIncrease){
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