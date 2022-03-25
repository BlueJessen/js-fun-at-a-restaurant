
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
function listItems(orders){
  var list = [];
  for (var i=0; i<orders.length; i++){
    list.push(orders[i].item);
  }
  return list.join(', ');
}

function searchOrder(orders,item){
  for (var i = 0; i<orders.length; i++){
    if(orders[i].item === item){
      return true
    }
    }
    return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
