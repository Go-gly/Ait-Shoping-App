
let Information={}
console.log(Information);
let name=document.getElementById("name")

let email=document.getElementById("email")
let pass=document.getElementById("pass")  
console.log(pass.value);


let span=document.getElementById("er-name")
let spa=document.getElementById("er1")

let ema=document.getElementById("er-email")
let emai=document.getElementById("er2")



name.addEventListener("keyup",Name_error)
name.addEventListener("blur",Name_error)

email.addEventListener("keyup",email_error)
email.addEventListener("blur",email_error)



pass.addEventListener("keyup",pass_error)
pass.addEventListener("blur",pass_error)


function Name_error(){

    let userName=name.value

    let egex=/[0-9]/

    
    if(userName.trim()==""){
span.innerHTML='<i class="fa-solid fa-circle-exclamation">'
span.style.color="red"
spa.innerHTML="name should not be empty"
spa.style.color="red"
return false
    }
    if(egex.test(userName)){
span.innerHTML='<i class="fa-solid fa-circle-exclamation">'
span.style.color="red"
spa.innerHTML="name should be letter"
spa.style.color="red"
return false
    }

    else if(userName.length > 0)
    {
                 spa.innerHTML='<i class="fa-solid fa-circle-check"></i'
         spa.style.color="green"
         span.style.display="none "
         return false
    }
    
    
    
}



function email_error(){

    let emails=email.value  
     let r=/^[a-zA-Z]+[0-9]+@[A-Za-z]{1,6}\.[a-z]{3,6}$/
    
    if(emails.trim()==""){
ema.innerHTML='<i class="fa-solid fa-circle-exclamation">'
ema.style.color="red"                                                         
emai.innerHTML="enter email"
return false
    }

    
   else if(!r.test(emails)){
        ema.innerHTML='<i class="fa-solid fa-circle-exclamation">'
        ema.style.color="red"
        emai.innerHTML="enetr the valid email"
        return false

    }
    
    
       else{ 
       ema.innerHTML='<i class="fa-solid fa-circle-check"></i'
        ema.style.color="green"
        emai.innerHTML=""
    return true

    
        
    }
    
    
}
let mob=document.getElementById("er-phone")
let mobero=document.getElementById("er3")


let eyeopen=document.getElementsByClassName("fa-eye")[0]


let p=document.getElementById("er-pass")
let pr=document.getElementById("er4")

function pass_error(){
    let passs=pass.value
console.log(passs);

    let reg=/^[^@,%,$,&,_]+$/
    let r1=/^[^A-Z]+$/
    let r2=/^[^a-z]+$/
    let r3=/^[^0-9]+$/
    let r4=/^[a-zA-Z0-9\@\$\%\&\_]{8,}$/
    let r5=/\s/   
        if(passs.match(r5)){
        pr.innerHTML="spaces are not allowed"
return false
    }

    if(passs.trim()==""){
p.innerHTML='<i class="fa-solid fa-circle-exclamation">'
p.style.color="red"
pr.innerHTML="enter the password"
eyeopen.style.display="none"



return false
    }

    else if(!r4.test(passs)){
        
        p.innerHTML='<i class="fa-solid fa-circle-exclamation">'
       p.style.color="red"
       pr.innerHTML="length should minimum 8 charaters"
eyeopen.style.display="block"


       return false
   }
   else if (r2.test(passs) ) {
    p.innerHTML='<i class="fa-solid fa-circle-exclamation">'
    p.style.color="red"
    pr.innerHTML="length should be 1 Lower Case"

    return false
   }
   else if (r3.test(passs) ) {
    p.innerHTML='<i class="fa-solid fa-circle-exclamation">'
    p.style.color="red"
    pr.innerHTML="length should be 1 number"

    return false
   }
  
  
 
    else if(reg.test(passs) ){
p.innerHTML='<i class="fa-solid fa-circle-exclamation">'
p.style.color="red"
pr.innerHTML="password should have @%$&_"
return false
   }
    else if(r1.test(passs) ){
p.innerHTML='<i class="fa-solid fa-circle-exclamation">'
p.style.color="red"
pr.innerHTML="password should include upper case letters"
return false
    }    
     
   
    else{
        
        p.innerHTML='<i class="fa-solid fa-circle-check"></i'
        p.style.color="green"
        pr.innerHTML=""
        eyeclose.style.display="none"
         return true
    }
    
    
}

eyeopen.addEventListener("click",eye)
let eyeclose=document.getElementById("eye")
eyeclose.addEventListener("click",eyee)

function eye(){
pass.setAttribute("type","text")

eyeclose.style.display="block"


}
function eyee(){
pass.setAttribute("type","password")

eyeclose.style.display="none"

}


let con=document.getElementById("con")
let con_er=document.getElementById("er-confirm")
let conn=document.getElementById("er5")
con.addEventListener("keyup",conform)
con.addEventListener("blur",conform)

function conform(){
let pastest=pass.value
let con_firm=con.value
 if(pastest.length==0){
    con_er.innerHTML="enter the password first"
    con_er.style.color="red"
    conn.innerHTML='<i class="fa-solid fa-circle-exclamation">'
conn.style.color="red"

    return false
}
else if(con_firm.trim()==""){
    con_er.innerHTML="enter the password"
    con_er.style.color="red"

    return false
}
else if(!con_firm.match(pastest)){
    con_er.innerHTML="password not match"
    con_er.style.color="red"
    return false
}

else{
    con_er.innerHTML=""
    con_er.style.color="green"
    conn.innerHTML='<i class="fa-solid fa-circle-check"></i'
    conn.style.color="green"

    return true
}

}
let checkBox=document.querySelector(".checkbox")
let checkEror=document.querySelector("#check")

function check(){
    let checkValue=checkBox.value
    if(checkBox.checked==false){
        checkEror.innerHTML="jfhjhkdtkftkdytkf"
    }
}

function validation(e){
    e.preventDefault()
    if(name.value.length == 0 || email.value.length == 0 || pass.value.length==0 || con.value.length==0 ||checkBox.chech) {
       Name_error();
    email_error();
    pass_error();
    conform();
    check()
    return false
} else{
    Information.name=name.value
Information.email=email.value
Information.phone=phone.value
Information.pasword=pass.value


    return true;
}

    }



//////////////////////////////////-------LOGIN FORM---////////////////////////////////////////////////////////////




let signup=document.getElementById("signup").addEventListener("click",validation)
let backk=document.getElementById("back")
backk.addEventListener("click",back)

let loginid=document.getElementById("loginid")
console.log(loginid);
loginid.addEventListener("click",loginform)
function loginform(e){
    let login=document.getElementById("login")
    login.style.display="block"
    let form=document.getElementById("form")
    form.style.display="none"

e.preventDefault();
}
function back(e){
    let login=document.getElementById("login")
    login.style.display="none"
    let form=document.getElementById("form")
    form.style.display="block"

e.preventDefault();
}





let checkE=document.getElementById("checkE")

let EmailE=document.getElementById("EmailE")
let EmailE1=document.getElementById("EmailE1")


let checkP=document.getElementById("checkP")
let passE=document.getElementById("PassE")
let passE1=document.getElementById("PassE1")

document.getElementById("loginidd").addEventListener("click",obj)
function obj(e){
e.preventDefault()
if(checkE.value==0 ){
    EmailE.innerHTML="Email was blank"
    return false}
    if(checkP.value==0){
        passE.innerHTML="Password was blank"
    return false
}
    if(checkE.value!==Information.email){
        EmailE.innerHTML="Email was wrong"
        

        return false
    }
    if(checkP.value!==Information.pasword){
        passE.innerHTML="pasword was wrong"
        return false
    }
    if(checkE.value==Information.email||checkP.value==Information.pasword){
        EmailE.innerHTML=""
        passE.innerHTML=""
        return false
    }
        
    else{
        return true
    }




    
}
