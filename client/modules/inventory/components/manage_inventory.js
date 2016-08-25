import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
class ManageInventory extends Component {
  renderItems() {
    const tdStyle = {
      border: '1px solid black',
      padding: '5px',
    };

    return this.props.items.map((item) => (
      <tr key={item._id}>
        <td style={tdStyle}>{item.recordId}</td>
        <td style={tdStyle}>{item.product}</td>
        <td style={tdStyle}>{item.category}</td>
        <td style={tdStyle}>{item.onHand}</td>
        <td style={tdStyle}>{item.origQty}</td>
        <td style={tdStyle}>{item.style}</td>
        <td style={tdStyle}>{item.vendor}</td>
        <td style={tdStyle}>{item.manufacturer}</td>
        <td style={tdStyle}>{item.description}</td>
      </tr>
    ));
  }

  render() {
    const tableStyle = {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
    };

    const thStyle = {
      border: '2px solid black',
      padding: '5px',
    };

    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Record ID</th>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>On Hand</th>
            <th style={thStyle}>Original Quantity</th>
            <th style={thStyle}>Style</th>
            <th style={thStyle}>Vendor</th>
            <th style={thStyle}>Manufacturer</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

ManageInventory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ManageInventory;
