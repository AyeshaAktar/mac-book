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
const grandTotal = document.getElementById('grand-total');
const applyBtn = document.getElementById('apply');
const promoCode = document.getElementById('promo-code')


function macBook(price, initialCost){
    const initialPrice = price;
    initialCost.innerText = initialPrice;
    totalPrice();
}
//memory
memory8Gb.addEventListener('click', function(){
    macBook(0, initialMemoryCost);
})
memory16Gb.addEventListener('click', function(){
    macBook(180, initialMemoryCost);
    
})

//storage
storage256Gb.addEventListener('click', function(){
    macBook(0, initialStorageCost);
})
storage512Gb.addEventListener('click', function(){
    macBook(100, initialStorageCost);
})
storage1Tb.addEventListener('click', function(){
    macBook(180, initialStorageCost);
})

//delivery cost
deliveryFree.addEventListener('click', function(){
    macBook(0, initialDeliveryCharge);
})
deliveryPaid.addEventListener('click', function(){
    macBook(20, initialDeliveryCharge);
})

function totalPrice(){
    const bestPrice = 1299;
    const extraMemoryCost = initialMemoryCost.innerText;
    const extraStorageCost = initialStorageCost.innerText;
    const deliveryCharge = initialDeliveryCharge.innerText;
    const totalPrice = bestPrice + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(deliveryCharge);
    total.innerText = totalPrice;

    grandTotal.innerText = totalPrice;
}


applyBtn.addEventListener('click',function(){
    const promoText = promoCode.value;
    const withoutDiscount = total.innerText;
    if(promoText == 'stevekaku'){
        const discountPrice = parseInt(withoutDiscount)*0.20;
        const totalDiscountPrice = parseInt(withoutDiscount) - discountPrice;
        grandTotal.innerText = totalDiscountPrice;
    }
    else{
        alert('Wrong promo code! Please try again')
    }
})