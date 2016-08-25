import React, { Component, PropTypes } from 'react';

// App component - represents the whole app
class ManageInventory extends Component {
  renderItems() {
    const tableStyle = {
      border: '1px solid black',
    };

    return this.props.items.map((item) => (
      <tr key={item._id}>
        <td style={tableStyle}>{item.recordId}</td>
        <td style={tableStyle}>{item.productName}</td>
        <td style={tableStyle}>{item.onHand}</td>
      </tr>
    ));
  }

  render() {
    return (
      <table>
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
