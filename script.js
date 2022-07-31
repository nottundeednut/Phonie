function phoneNumber(input){
    var mtnPattern = /^\+234 (703|706|803|806|810|813|814|816|906|906|913|916|704) \d{3} \d{4}$/;
    var airtelPattern = /^\+234 (701|708|802|808|812|901|902|904|907|912) \d{3} \d{4}$/;
    var etisalatPattern = /^\+234 (809|817|818|909|908) \d{3} \d{4}$/;
    var gloPattern = /^\+234 (705|805|807|811|815|905|915) \d{3} \d{4}$/;


    if((input.value.match(mtnPattern)) && !(input.value.match(airtelPattern)) && !(input.value.match(etisalatPattern)) && !(input.value.match(gloPattern)))
    {
        document.getElementById("mtn").style.display = "inline-block";
        document.getElementById("airtel").style.display = "none";
        document.getElementById("etisalat").style.display = "none";
        document.getElementById("glo").style.display = "none";
        document.getElementById("invalid").style.display = "none";
        /*alert("mtn number") */;
        return true;
    }
    else if(!(input.value.match(mtnPattern)) && (input.value.match(airtelPattern)) && !(input.value.match(etisalatPattern)) && !(input.value.match(gloPattern)))
    {
        document.getElementById("mtn").style.display = "none";
        document.getElementById("airtel").style.display = "inline-block";
        document.getElementById("etisalat").style.display = "none";
        document.getElementById("glo").style.display = "none";
        document.getElementById("invalid").style.display = "none";
        /*alert("airtel number");*/
        return true;
    }
    else if(!(input.value.match(mtnPattern)) && !(input.value.match(airtelPattern)) && (input.value.match(etisalatPattern)) && !(input.value.match(gloPattern)))
    {
        document.getElementById("mtn").style.display = "none";
        document.getElementById("airtel").style.display = "none";
        document.getElementById("etisalat").style.display = "inline-block";
        document.getElementById("glo").style.display = "none";
        document.getElementById("invalid").style.display = "none";
        /*alert("etisalat number");*/
        return true;
    }
    else if(!(input.value.match(mtnPattern)) && !(input.value.match(airtelPattern)) && !(input.value.match(etisalatPattern)) && (input.value.match(gloPattern)))
    {
        document.getElementById("mtn").style.display = "none";
        document.getElementById("airtel").style.display = "none";
        document.getElementById("etisalat").style.display = "none";
        document.getElementById("glo").style.display = "inline-block";
        document.getElementById("invalid").style.display = "none";
        /*alert("glo number");*/
        return true;
    }
    else
    {
        document.getElementById("mtn").style.display = "none";
        document.getElementById("airtel").style.display = "none";
        document.getElementById("etisalat").style.display = "none";
        document.getElementById("glo").style.display = "none";
        document.getElementById("invalid").style.display = "inline-block";
        /*alert("invalid number pattern");*/
        return false;
    }
}