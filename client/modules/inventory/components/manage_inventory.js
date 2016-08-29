import React, { Component, PropTypes } from 'react';
import Table from 'react-bootstrap/lib/Table';
import Col from 'react-bootstrap/lib/Col';

// App component - represents the whole app
class ManageInventory extends Component {
  renderItems() {
    return this.props.items.map((item) => (
      <tr key={item._id}>
        <td>{item.recordId}</td>
        <td>{item.product}</td>
        <td>{item.category}</td>
        <td>{item.onHand}</td>
        <td>{item.origQty}</td>
        <td>{item.style}</td>
        <td>{item.vendor}</td>
        <td>{item.manufacturer}</td>
        <td>{item.description}</td>
      </tr>
    ));
  }

  render() {
    return (
      <Col xs={12} sm={12} md={10} mdOffset={1} lg={10} lgOffset={1}>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Record ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>On Hand</th>
              <th>Original Quantity</th>
              <th>Style</th>
              <th>Vendor</th>
              <th>Manufacturer</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </Table>
      </Col>
    );
  }
}

ManageInventory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ManageInventory;
