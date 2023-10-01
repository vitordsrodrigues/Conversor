document.getElementById("converter").onclick=tempconvert;
document.getElementById("reset").onclick=clearform;
function tempconvert(){
    let celsius=document.getElementById("celsius").value;
    let Fahrenheit=document.getElementById("Fahrenheit").value;
    let kelvin=document.getElementById("kelvin").value;
    let rankine=document.getElementById("rankine").value;
     if(Fahrenheit===""&&kelvin===""&&rankine===""){
        Fahrenheit=(parseFloat(celsius)*9+160)/5;
        kelvin=(parseFloat(celsius)+273.15);
        rankine=(parseFloat(celsius)*9)/5+491.67 ;
    }
    else if(celsius===""&&kelvin===""&&rankine===""){
        celsius=(parseFloat(Fahrenheit)-32)/1.8;
        kelvin=(parseFloat(Fahrenheit)-32)*5/9+273.15;
        rankine=(parseFloat(kelvin))*1.8;
    }
    else if(Fahrenheit===""&&celsius===""&&rankine===""){
        celsius=(parseFloat(kelvin)-273.15);
        Fahrenheit=(parseFloat(kelvin)-273.15)*9/5+32;
        rankine=(parseFloat(kelvin))*1.8;
    }
    else if(Fahrenheit===""&&celsius===""&&kelvin===""){
        celsius=(parseFloat(rankine)-491.67)*5/9;
        Fahrenheit=(parseFloat(rankine)-459.67);
        kelvin=(parseFloat(rankine)*5)/9;
    }
   
    document.getElementById("Fahrenheit").value=parseFloat(Fahrenheit).toFixed(1);
    document.getElementById("celsius").value=parseFloat(celsius).toFixed(1);
    document.getElementById("kelvin").value=parseFloat(kelvin).toFixed(1);
    document.getElementById("rankine").value=parseFloat(rankine).toFixed(1);
}
function clearform(){
    celsius=document.getElementById("celsius").value = "";
    Fahrenheit=document.getElementById("Fahrenheit").value = "";
    kelvin=document.getElementById("kelvin").value = "";
    rankine=document.getElementById("rankine").value = "";
}