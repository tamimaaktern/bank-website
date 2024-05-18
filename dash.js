//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: Get the deposit amount from input field
    //for inputField value
    //convert string to numeric
    const depositField = document.getElementById('field-deposit');
    const newDepositAmountString = depositField.value ;
    const newDepositAmount =parseFloat(newDepositAmountString);
    //step-3: get current deposit total
    //convert string to numeric
    const depositTotalElement = document.getElementById('depo-total');
    const preDepositTotaString =depositTotalElement.innerText;
    const preDepositTotal =parseFloat(preDepositTotaString);
    depositTotalElement.innerText=newDepositAmount;
    //step-4: get current deposit total
    const currentDepositTotal = preDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    //step-5: clear field//
    depositField.value='';

    //get current balance total
    const  balanceTotalElement =document.getElementById('balance-field');
    const preBalanceString = balanceTotalElement.innerText;
    const preBalance = parseFloat(preBalanceString);

    const currentBalance = preBalance + newDepositAmount;
    balanceTotalElement.innerText = currentBalance;
})