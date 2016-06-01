import React from 'react';
import DataGrid from 'react-datagrid';

const columns = [
  { name: 'recordId', title: 'Record ID' },
  { name: 'productName', title: 'Product' }
];

const LotList = ({lots}) => (
  <DataGrid
    idProperty='_id'
    dataSource={lots}
    columns={columns}
    withColumnMenu={false}
  />
);

export default LotList;
