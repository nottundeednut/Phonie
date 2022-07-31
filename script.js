function phoneNumber(input){
    var mtnPattern = /^\+234 (703|706|803|806|810|813|814|816|906|906|913|916|704) \d{3} \d{4}$/;
    var airtelPattern = /^\+234 (701|708|802|808|812|901|902|904|907|912) \d{3} \d{4}$/;
    var etisalatPattern = /^\+234 (809|817|818|909|908) \d{3} \d{4}$/;
    var gloPattern = /^\+234 (705|805|807|811|815|905|915) \d{3} \d{4}$/;


    if((input.value.match(mtnPattern)) && !(input.value.match(airtelPattern)) && !(input.value.match(etisalatPattern)) && !(input.value.match(gloPattern)))
    {
        alert("mtn number");
        return true;
    }
    else if(!(input.value.match(mtnPattern)) && (input.value.match(airtelPattern)) && !(input.value.match(etisalatPattern)) && !(input.value.match(gloPattern)))
    {
        alert("airtel number");
        return true;
    }
    else if(!(input.value.match(mtnPattern)) && !(input.value.match(airtelPattern)) && (input.value.match(etisalatPattern)) && !(input.value.match(gloPattern)))
    {
        alert("etisalat number");
        return true;
    }
    else if(!(input.value.match(mtnPattern)) && !(input.value.match(airtelPattern)) && !(input.value.match(etisalatPattern)) && (input.value.match(gloPattern)))
    {
        alert("glo number");
        return true;
    }
    else
    {
        alert("invalid number pattern");
        return false;
    }
}