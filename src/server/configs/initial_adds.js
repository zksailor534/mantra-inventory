import { Lots } from 'lib/collections';

export default function () {
  if (!Lots.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const recordId = `AB-000${lc}`;
      const productName = `Product ${lc}`;
      Lots.insert({ recordId, productName });
    }
  }
}
