let myarray1=[90,20,30,70,50];
let result=myarray1.some(myfunction);

function myfunction(value){
    return value % 30 === 0;
}
console.log(result)