import React from 'react';

const OrderDetail = ({ order }) => (
  <div>
    {order.saving ? <p>Saving...</p> : null}
    <h2>{order.orderNo}</h2>
    <p>
      {order.customerName}
    </p>
  </div>
);

export default OrderDetail;
