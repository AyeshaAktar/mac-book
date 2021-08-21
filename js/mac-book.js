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

//memory
memory8Gb.addEventListener('click', function(){
    const memoryCost = 0;
    initialMemoryCost.innerText =memoryCost;
    totalPrice();
})
memory16Gb.addEventListener('click', function(){
    const memoryCost = 180;
    const memorCostValue= initialMemoryCost.innerText;
    const totalMemoryCost = parseInt(memorCostValue) + memoryCost;
    if(totalMemoryCost == 180){
        initialMemoryCost.innerText = totalMemoryCost;
        totalPrice();
    }
})

//storage
storage256Gb.addEventListener('click', function(){
    const storageCost = 0;
    initialStorageCost.innerText =storageCost;
    totalPrice();
})
storage512Gb.addEventListener('click', function(){
    const storageCost = 100;
    const storageCostValue= 0;
    const totalStorageCost = parseInt(storageCostValue) + storageCost;
    if(totalStorageCost == 100){
        initialStorageCost.innerText = totalStorageCost;
        totalPrice();
    }
})
storage1Tb.addEventListener('click', function(){
    const storage1TbCost = 180;
    const storage1TbCostValue= 0;
    const totalStorage1TbCost = parseInt(storage1TbCostValue) + storage1TbCost;
    if(totalStorage1TbCost == 180){
        initialStorageCost.innerText = totalStorage1TbCost;
        totalPrice();
    }
})

//delivery cost
deliveryFree.addEventListener('click', function(){
    const deliveryCharge = 0;
    initialDeliveryCharge.innerText = deliveryCharge;
    totalPrice();
})
deliveryPaid.addEventListener('click', function(){
    const deliveryCharge = 20;
    const deliveryChargeValue= initialDeliveryCharge.innerText;
    const totaldeliveryCost = parseInt(deliveryChargeValue) + deliveryCharge;
    if(totaldeliveryCost == 20){
        initialDeliveryCharge.innerText = totaldeliveryCost;
        totalPrice();
    }
})

function totalPrice(){
    const bestPrice = 1299;
    const extraMemoryCost = initialMemoryCost.innerText;
    const extraStorageCost = initialStorageCost.innerText;
    const deliveryCharge = initialDeliveryCharge.innerText;
    const totalPrice = bestPrice + parseInt(extraMemoryCost) + parseInt(extraStorageCost) + parseInt(deliveryCharge);
    total.innerText = totalPrice;
}








