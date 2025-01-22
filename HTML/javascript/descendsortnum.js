let myarray1=[90,20,30,70,50];

//descending order
function comparenumbers(a,b){
    return b-a;
}
let result=myarray1.sort(comparenumbers)
console.log(result)