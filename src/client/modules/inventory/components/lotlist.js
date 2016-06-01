import React from 'react';
import Griddle from 'griddle-react';

const LotList = ({lots}) => (
  <Griddle
    results={lots}
    showFilter={false}
    columns={[ 'recordId', 'productName' ]}
  />
);

export default LotList;
