let myarray1=[90,20,30,70,50];
let result=myarray1.every(myfunction);

function myfunction(value){
    return value>=20;
}
if(result)
console.log("all element are greater than equal to 20")
else
 console.log("all element are not greater tha equal to 20")