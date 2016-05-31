import React from 'react';

const LotList = ({ lots }) => (
  <div className='lotlist'>
    <ul>
      {lots.map(lot => (
        <li key={lot._id}>
          <a href={`/lot/${lot._id}`}>{lot.recordId} {lot.productName}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default LotList;
