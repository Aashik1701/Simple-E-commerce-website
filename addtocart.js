const product = [
    {
        id: 0,
        image: 'image/gg-1.jpeg',
        title: 'iPhone 14',
        price: 799000,
    },
    {
        id: 1,
        image: 'image/ph-2.jpg',
        title: 'Iphone 15 pro',
        price: 140000,
    },
    {
        id: 2,
        image: 'image/appro.png',
        title: 'Airpods pro',
        price: 20000, 
    },
    {
        id: 3,
        image: 'image/avispro.png',
        title: 'Head phn5',
        price: 250000,
    },
   
];



const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box p-5 display-flex flex-col items-center'>
            <div class='img-box display-flex w-full h-46 items-center justify-center'>
                <img class='images h-5/6 w-5/6 object-cover object-center' src=${image}></img>
            </div>
        <div class='bottom mt-20 w-full text-center flex flex-col items-center justify-between h-10'>
        <p>${title}</p>
        <h2 class='text-sm'>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")' class='button w-full border-none rounded-md bg-blue-500 text-white px-7 py-2 cursor-pointer hover:bg-blue-600'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')





var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            return(
                `<div class='cart-item w-full flex flex-row items-center justify-between p-5 bg-white border-b border-gray-300 rounded-lg '>
                <div class='row-img max-w-12 max-h-12 bg-blue-100 border border-blue-500 rounded-full flex items-center justify-center '>
                    <img class='rowimg  border border-blue-500 rounded-full object-center object-cover' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}


