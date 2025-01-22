function validate(f){
    //read form data
    var name=f.name.value;
    var age=f.age.value;

    if((name == "") && (age == "")){
        alert("all fields are mandatory")
        f.name.focus();
        return false;
    }

    if(name == ""){
        alert("name is mandatory")
        f.name.focus();
        return false;
    }

    if(age == ""){
        alert("age is mandatory")
        f.age.focus();
        return false;
    }
    if(isNaN(age)){
        alert("age must be number")
        f.age.focus();
        f.age.value="";
        return false;
    }
    if(age>18){
        alert(name+", you are eligible to vote")
    }else{
        alert(name+", you are not eligible to vote")
    }
    return true;
}