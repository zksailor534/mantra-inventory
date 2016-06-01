import React from 'react';
import Griddle from 'griddle-react';

let columnMeta = [
  {
    columnName: '_id',
    order: 1,
    visible: false, // visible does not work, issue 114
    sortable: false,
  },
  {
    columnName: 'recordId',
    order: 2,
    displayName: 'Record ID',
  },
  {
    columnName: 'productName',
    order: 3,
    displayName: 'Product',
  },
];

const LotList = ({ lots }) => (
  <Griddle
    results={lots}
    showFilter={false}
    columnMetadata={columnMeta}
  />
);

export default LotList;
