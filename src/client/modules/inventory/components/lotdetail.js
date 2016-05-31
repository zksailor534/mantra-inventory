import React from 'react';

const LotDetail = ({ lot }) => (
  <div>
    {lot.saving ? <p>Saving...</p> : null}
    <h2>{lot.recordId}</h2>
    <p>
      {lot.productName}
    </p>
  </div>
);

export default LotDetail;
