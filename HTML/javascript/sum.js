let myarray1=[90,20,30,70,50];
let result=myarray1.reduce(myfunction);

function myfunction(total,value){
    return total+value;
}
console.log(result);