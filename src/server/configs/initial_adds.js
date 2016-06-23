import { Lots, Orders } from 'lib/collections';

export default function () {
  if (!Lots.findOne()) {
    for (let lc = 1; lc <= 15; lc++) {
      const recordId = `AB-000${lc}`;
      const productName = `Product ${lc}`;
      const color = `Color ${lc}`;
      const condition = 'B';
      const vendor = 'RE-INV';
      const description = `Description ${lc}`;
      const price = lc;

      Lots.insert({
        recordId,
        productName,
        color,
        condition,
        vendor,
        description,
        price
      });
    }
  }

  if (!Orders.findOne()) {
    for (let lc = 1; lc <= 9; lc++) {
      const orderNo = `11100${lc}`;
      const customerName = `Business ${lc}`;

      Orders.insert({
        orderNo,
        customerName
      });
    }
  }
}
