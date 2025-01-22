let myarray1=[90,20,30,70,50];
let result=myarray1.filter(myfunction);

function myfunction(value){
    return value>50;
}
console.log(result);