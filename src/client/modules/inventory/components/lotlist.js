import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const tableStyles = {
  position: 'relative',
  borderRadius: '3px',
  background: '#fff',
  borderTop: '3px solid #d2d6de',
  marginBottom: '20px',
  width: '100%',
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
};

class LotList extends React.Component {
  render() {
    const { lots } = this.props;
    return (
      <div className="col-xs-12">
        <BootstrapTable
          data={lots}
          striped
          hover
          condensed
          tableStyle={tableStyles}
        >
          <TableHeaderColumn
            isKey
            dataField="recordId"
            width="100"
          >
            Record ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="productName"
          >
            Product
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="color"
            width="100"
          >
            Color
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="condition"
            width="100"
          >
            Condition
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="vendor"
          >
            Vendor
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="description"
          >
            Description
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="price"
          >
            Price
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default LotList;
