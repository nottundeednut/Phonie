function phoneNumber(input){
    var phone = /^\+234 \d{3} \d{3} \d{4}$/;
    if(input.value.match(phone))
    {
        alert("Valid number");
        return true;
    }
    else{
        alert("Invalid number");
        return false;
    }
}