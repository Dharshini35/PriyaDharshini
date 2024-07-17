function calculateAmount(){
    const quantity=document.getElementById('quantity').value;
    const rate=document.getElementById('rate').value;

    const amount=quantity*rate;

    document.getElementById('amount').innerText=Amount:$(amount);

}