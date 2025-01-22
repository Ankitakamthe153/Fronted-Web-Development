function process(){
    var option=document.getElementById("operation").value;
    var num1=parseInt(f.number1.value);
    var num2=parseInt(f.number2.value);
    var result=0;

    switch(option){
        case "add":
            result=num1+num2;
            f.result.value=result;
            console.log("add");
            break;
         case "mul":
            result=num1*num2;
            f.result.value=result;
            console.log("mul");
            break;
         case "cls":
            f.number1.value="";
            f.number2.value="";
            console.log("clear");
            
    }
}