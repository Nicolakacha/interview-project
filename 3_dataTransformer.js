const userIds = ['U01', 'U02', 'U03'];
const orderIds = ['T01', 'T02', 'T03', 'T04'];
const userOrders = [
  { userId: 'U01', orderIds: ['T01', 'T02'] },
  { userId: 'U02', orderIds: [] },
  { userId: 'U03', orderIds: ['T03'] },
];
const userData = { U01: 'Tom', U02: 'Sam', U03: 'John' };
const orderData = {
  T01: { name: 'A', price: 499 },
  T02: { name: 'B', price: 599 },
  T03: { name: 'C', price: 699 },
  T04: { name: 'D', price: 799 },
};

function dataTransformer({
  userIds,
  userOrders,
  userData,
  orderData,
}) {
  return userIds.map((userId) => {
    const user = {
      id: userId,
      name: userData[userId],
    };

    const orders = [];
    userOrders.map((userOrder) => {
      if (userOrder.userId === userId) {
        userOrder.orderIds.map((orderId) => {
          orders.push({
            id: orderId,
            name: orderData[orderId].name,
            price: orderData[orderId].price,
          });
        });
      }
    });

    return {
      user,
      orders,
    };
  });
}

const result = dataTransformer({
  userIds,
  userOrders,
  userData,
  orderData,
});

console.log(JSON.stringify(result));
