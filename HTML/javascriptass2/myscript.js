function calc(count){
    var a=parseInt(document.getElementById("number1").value);
    var b=parseInt(document.getElementById("number2").value);
    var result=0;

    switch(count){
        case "Add":
            result=a+b;
            break;
        case "Sub":
            result=a-b; 
            break;
        case "Mul":
            result=a*b;
            break;
        case "Div":
            result=a/b;
            break;
        case "Mod":
            result=a%b;
            break;
        case "CLS":
            a.value="";
            b.value="";
            
    }
    document.getElementById("res").value=result;
    
}