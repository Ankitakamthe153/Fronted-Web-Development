let myarray1=[90,20,30,70,50];
console.log("tradition for loop");
for(let x=0;x<myarray1.length;x++){
    console.log(myarray1[x])
}

console.log("using for in loop")
for(let y in myarray1){
    console.log(myarray1[y])
}

console.log("using for of loop")
for(let a of myarray1){
    console.log(a)
}