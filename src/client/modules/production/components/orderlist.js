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

class OrderList extends React.Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="col-xs-12">
        <BootstrapTable
          data={orders}
          striped
          hover
          condensed
          tableStyle={tableStyles}
        >
          <TableHeaderColumn
            isKey
            dataField="orderNo"
            width="100"
          >
            S/O #
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="customerName"
          >
            Customer
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default OrderList;
