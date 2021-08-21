const memory8Gb = document.getElementById('8gb-memory')
const memory16Gb = document.getElementById('16gb-memory')
const storage256Gb = document.getElementById('256gb-storage')
const storage512Gb = document.getElementById('512gb-storage')
const storage1Tb = document.getElementById('1tb-storage')
const deliveryFree = document.getElementById('delivery-free')
const deliveryPaid = document.getElementById('delivery-paid')
const initialMemoryCost = document.getElementById('memory-price');
const initialStorageCost = document.getElementById('storage-price');
const initialDeliveryCharge = document.getElementById('delivery-charge');
const total = document.getElementById('total');
const discuntTotal = document.getElementById('grand-total');


function macBook(price, initialCost){
    const initialPrice = price;
    initialCost.innerText = initialPrice;
    totalPrice();
}
//memory
memory8Gb.addEventListener('click', function(){
    macBook(0, initialMemoryCost);
   
    // const memoryCost = 0;
    // initialMemoryCost.innerText =memoryCost;
    //     totalPrice();
})
memory16Gb.addEventListener('click', function(){
    macBook(180, initialMemoryCost);
    
})

//storage
storage256Gb.addEventListener('click', function(){
    macBook(0, initialStorageCost);
    // const storageCost = 0;
    // initialStorageCost.innerText =storageCost;
    // totalPrice();
})
storage512Gb.addEventListener('click', function(){
    macBook(100, initialStorageCost);
    // const storageCost = 100;
    // initialStorageCost.innerText = storageCost;
    //    totalPrice();
})
storage1Tb.addEventListener('click', function(){
    macBook(180, initialStorageCost);
    // const storageCost = 180;
    //     initialStorageCost.innerText = storageCost;
    //     totalPrice();
})

//delivery cost
deliveryFree.addEventListener('click', function(){
    macBook(0, initialDeliveryCharge);
    // const deliveryCharge = 0;
    // initialDeliveryCharge.innerText = deliveryCharge;
    // totalPrice();
})
deliveryPaid.addEventListener('click', function(){
    macBook(20, initialDeliveryCharge);
    // const deliveryCharge = 20;
    //     initialDeliveryCharge.innerText = deliveryCharge;
    //     totalPrice();
})

function totalPrice(){
    const bestPrice = 1299;
    const extraMemoryCost = initialMemoryCost.innerText;
    const extraStorageCost = initialStorageCost.innerText;
    const deliveryCharge = initialDeliveryCharge.innerText;
    const totalPrice = bestPrice + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(deliveryCharge);
    total.innerText = totalPrice;

    discuntTotal.innerText = totalPrice;
}


document.getElementById('apply').addEventListener('click', function(){
    const codeField = document.getElementById('promo-code');
    // console.log('clicked');
    const promoCode = codeField.value;
    const discunt = 20;
    if(promoCode == 'stevekaku'){ 
    const discuntPrice = discuntTotal * discunt / 100;
        discuntTotal.innerText = discuntPrice;
    }
    codeField.value = '';
})