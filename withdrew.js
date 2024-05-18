document.getElementById('btn-with').addEventListener('click',function(){
    const withdrawField = document.getElementById('field-withdraw');
    const newWithdrawAmountString = withdrawField.value ;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawTotaString =withdrawTotalElement.innerText;
    const preWithdrawTotal =parseFloat(preWithdrawTotaString);
    
    const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    withdrawField.value='';

    const  balanceTotalElement =document.getElementById('balance-field');
    const preBalanceString = balanceTotalElement.innerText;
    const preBalance = parseFloat(preBalanceString);

    const currentBalance = preBalance - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalance;
})