document.getElementById('btn-submit').addEventListener('click',function(){
    const emaiklField = document.getElementById('email-field');
    const email = emaiklField.value ;

    const passField =document.getElementById('pass-field');
    const pass =passField.value;
    if(email==='tamima@gmail.com' && pass==='12344'){
        window.location.href='dashboard.html';
    }
    else{
        alert('account nai');
    }
})