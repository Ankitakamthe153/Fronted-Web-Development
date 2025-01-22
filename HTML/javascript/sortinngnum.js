let myarray1=[90,20,30,70,50];

//ascending order
function comparenumbers(a,b){
    return a-b;
}
let result=myarray1.sort(comparenumbers)
console.log(result)