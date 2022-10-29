

// USER STRAT 
let user=document.querySelector("#user-open")
let main=document.querySelector(".user-container")
let close=document.querySelector(".user-close")
let cartHead=document.querySelector(".cart-content")


user.addEventListener("click",userFun)

function userFun(){
    main.classList.add("active")
    main.style.display="block";
    cartHead.style.display="none";
    user.addEventListener("click",()=>{
        main.classList.toggle("active")
    })  
}
    
close.addEventListener("click",()=>{
    main.classList.remove("active")
    main.style.display="none";
    user.addEventListener("click",userFun)

})
// USER ENDS



let cartBox=document.getElementsByClassName("cart-box")
let cartItemRemove =document.getElementsByClassName("cart-remove")
for(let i=0;i<cartItemRemove.length;i++){
    cartItemRemove[i].addEventListener("click",()=>{
        cartBox[i].style.display="none"
    })
}



// ADD TO CART START

let addCart=document.getElementsByClassName("add-cart")
for(let i=0;i<addCart.length;i++){
    var button=addCart[i]
    button.addEventListener("click",addToCart)
   

}


let cartCount=document.getElementsByClassName("cart-text")[0]
let item=document.getElementsByClassName("item")[0]

function addToCart(event){
    var button=event.target
    var parent=button.parentElement
     var title=parent.getElementsByTagName("h2")[0].innerHTML
     var price=parent.getElementsByClassName("product-price")[0].innerHTML
     var productImg=parent.getElementsByTagName("img")[0].src
    console.log(title,price,productImg);



let cartContent=document.createElement("div")
cartContent.innerHTML=` <div class="cart-box">
    <img src="${productImg}" class="cart-img" alt="">
    <div class="details-box">
        <div class="cart-product-titel">${title}</div>
        <div class="cart-price">${price}</div>
        <!-- <input type="number" value="1" class="cart-quantity"> -->
    </div>
   
    <!-- REMOVE BUTTON --> 
    <i class="fa-solid fa-trash cart-remove"></i>
   
   
    
    </div>
    


 
`

 document.getElementsByClassName('cart-page')[0].append(cartContent);
 cartCount.innerHTML++
 item.innerHTML++

 
 totalClac()


 let cartContentRemove=document.getElementsByClassName("cart-remove")
  
 

for(let i=0;i<cartContentRemove.length;i++){
cartContentRemove[i].addEventListener("click",cartDelete)
}

document.getElementsByClassName("no-item")[0].style.display="none"

}
function cartDelete(event){
    var deletebtn=event.target;
    deletebtn.parentElement.remove()
     cartCount.innerHTML--
     item.innerHTML--
     totalClac()
     if(cartCount.innerHTML==0){
        document.getElementsByClassName("total-price")[0].innerHTML="$"+"00"+".00"
                document.getElementsByClassName("no-item")[0].style.display="block"

     }
    
}

    
   

// ADD TO CART ENDS

let cartOpen=document.querySelector(".cart-open")
let cartRemove=document.querySelector("#close-cart")

cartOpen.addEventListener("click",()=>{
    cartHead.classList.add("cart-item")
    cartHead.style.display="block";
    main.style.display="none";
    cartOpen.addEventListener("click",()=>{
        cartHead.classList.toggle("cart-item")
    })
   
    
})
cartRemove.addEventListener("click",()=>{
    cartHead.classList.remove("cart-item")
    cartHead.style.display="none";
   
})


// Search

let search=document.querySelector(".search")
let searchIcon=document.querySelector(".fa-magnifying-glass")
searchIcon.addEventListener("click",()=>{
    search.style.display="block"
    searchIcon.addEventListener("click",()=>{
        search.classList.toggle("searchIcon")
    })
})








 
function totalClac() {
    let cartBox=document.getElementsByClassName("cart-box")
    let total=0;
    for(let  i=0;i<cartBox.length;i++){
        let box=cartBox[i]
        let cartPrice=box.getElementsByClassName("cart-price")[0].innerHTML
        let price=cartPrice.replace("$","")
        console.log(price);
     total=Number(price)+total
     console.log(total);
        document.getElementsByClassName("total-price")[0].innerHTML="$"+total+".00"


    }

}










