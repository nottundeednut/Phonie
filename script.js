function phoneNumber(input){
    var phone = /^\+234 (703|706|803|806|810|813|814|816|906|906|913|916|704) \d{3} \d{4}$/;
    if(input.value.match(phone))
    {
        alert("mtn number");
        return true;
    }
    else{
        alert("Invalid number");
        return false;
    }
}