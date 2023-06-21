function tempCartModal(itemCode,description,price,qty,total) {
    var tempOrder={
        itemCode:itemCode,
        description:description,
        price:price,
        qty:qty,
        total:total
    }
    tempOrderCartAr.push(tempOrder);
}