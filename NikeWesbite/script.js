const Item=document.querySelectorAll(".menuItem");
const wrapper=document.querySelector(".sliderWrapper");
const products=[
    {
        id:1,
        title:"AIR FORCE",
        price:119,
        colors:[
            {
            code:"black",
            img:"./img/img/air.png"
            },
            {
                code:"blue",
                img:"./img/img/air2.png"
            }
        ],
        itemcolor:"yellowgreen"
    },
       {
        id:2,
        title:"AIR JORDAN",
        price:109,
        colors:[
            {
            code:"white",
            img:"./img/img/jordan.png"
            },
            {
                code:"green",
                img:"./img/img/jordan2.png"
            }
        ],
         itemcolor:"yellow"
    },
     {
        id:3,
        title:"BLAZZER",
        price:150,
        colors:[
            {
            code:"white",
            img:"./img/img/blazer.png"
            },
            {
                code:"green",
                img:"./img/img/blazer2.png"
            }
        ],
         itemcolor:"teal"
    },
     {
        id:4,
        title:"CRATER",
        price:181,
        colors:[
            {
            code:"black",
            img:"./img/img/crater.png"
            },
            {
                code:"white",
                img:"./img/img/crater2.png"
            }
        ],
         itemcolor:"gold"
    },
     {
        id:5,
        title:"HIPPIE",
        price:250,
        colors:[
            {
            code:"gray",
            img:"./img/img/hippie.png"
            },
            {
                code:"black",
                img:"./img/img/hippie2.png"
            }
        ],
        itemcolor:"rosybrown"
    }
]
let choosenproduct=products[0];

const currentimage=document.querySelector('.productimage');
const currentname=document.querySelector('.productname');
const currentprice=document.querySelector('.productprice');
const currentcolor=document.querySelectorAll('.color');
const currentsize=document.querySelectorAll('.sizes');
const Shoetitle=document.querySelector('.shoetitle');
Shoetitle.style.color="yellowgreen";
Item.forEach((item,index)=>{
    item.addEventListener('click',()=>{
       wrapper.style.transform=`translateX(${-100 * index}vw)`;
       choosenproduct=products[index];
       currentname.textContent=choosenproduct.title;
       currentprice.textContent='$'+choosenproduct.price;
       currentcolor[0].style.backgroundColor=choosenproduct.colors[0].code;
       currentcolor[1].style.backgroundColor=choosenproduct.colors[1].code;
       currentimage.src=choosenproduct.colors[0].img;
       Shoetitle.textContent=choosenproduct.title;
       Shoetitle.style.color=choosenproduct.itemcolor;
    })
})

currentcolor.forEach((color,index)=>{
    color.addEventListener('click',()=>{
        currentimage.src=choosenproduct.colors[index].img;
    })
})

currentsize.forEach((size)=>{
    size.addEventListener('click',()=>{
        currentsize.forEach((size)=>{
              size.style.backgroundColor="white";
          size.style.color="black";
        })
        size.style.backgroundColor="black";
          size.style.color="white";
    })
})
Item[0].style.color="yellowgreen";
 Item.forEach((item)=>{
    item.addEventListener('click',()=>{
        Item.forEach((item)=>{
            item.style.color="white";
        })
       item.style.color=choosenproduct.itemcolor; 
    })
})

const productbutton=document.querySelector('.productbutton');
const close=document.querySelector('.close');
const payment=document.querySelector('.payment');
const PaymentButton=document.querySelector('.paymentbutton');
const Confirm=document.querySelector('.confirm');
const closed=document.querySelector('.closed');
close.addEventListener('click',()=>{
    payment.style.display='none';
})


productbutton.addEventListener('click',()=>{
    if( Confirm.style.display=='flex'){
Confirm.style.display='none';
    }
    // if(payment.style.display=='block')
    payment.style.display='block';
})


PaymentButton.addEventListener('click',()=>{
    // console.log("Your Order Will Be Deliver Soon!....");
    payment.style.display='none';
    Confirm.style.display='flex';
})
closed.addEventListener('click',()=>{
    Confirm.style.display='none';
})

// issue of again click buy button and close button is not working
