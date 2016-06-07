import React from 'react';
import Griddle from 'griddle-react';

// Create custom component to enable link to specific record
const LinkComponent = ({data, rowData}) => {
  let url = `/inventory/lot/${rowData._id}`;
  return <a href={url}>{data}</a>;
};

const columnDisplay = [
  'recordId',
  'productName',
  'color',
  'condition',
  'vendor',
  'description',
  'price'
];

const columnMeta = [
  {
    columnName: 'recordId',
    order: 1,
    displayName: 'Record ID',
    customComponent: LinkComponent
  },
  {
    columnName: 'productName',
    order: 2,
    displayName: 'Product',
  },
  {
    columnName: 'color',
    order: 3,
    displayName: 'Color',
  },
  {
    columnName: 'condition',
    order: 4,
    displayName: 'Condition',
  },
  {
    columnName: 'vendor',
    order: 5,
    displayName: 'Vendor',
  },
  {
    columnName: 'description',
    order: 6,
    displayName: 'Description',
  },
  {
    columnName: 'price',
    order: 7,
    displayName: 'Price',
  },
];

export default class LotList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Griddle
        results={this.props.lots}
        showFilter={false}
        columnMetadata={columnMeta}
        columns={columnDisplay}
        enableInfiniteScroll={true}
        bodyHeight={750}
        useFixedHeader={true}
      />
    );
  }
}
