
function takeOrder(order, deliveryOrders){
  if(order.orderType === "delivery"
        && deliveryOrders.length < 3 ){
    deliveryOrders.push(order);
  }
}

function refundOrder(order,orderGroup){
  for (var i=0; i < orderGroup.length; i++){
    if(orderGroup[i].orderNumber === order){
      orderGroup.splice(i,1);
    }
  }
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
