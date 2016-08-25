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
        <td style={tdStyle}>{item.productName}</td>
        <td style={tdStyle}>{item.onHand}</td>
      </tr>
    ));
  }

  render() {
    const tableStyle = {
      'border-collapse': 'collapse',
      'table-layout': 'fixed',
    };

    const thStyle = {
      border: '1px solid black',
      padding: '5px',
    };

    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Record ID</th>
            <th style={thStyle}>Product</th>
            <th style={thStyle}>On Hand</th>
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
