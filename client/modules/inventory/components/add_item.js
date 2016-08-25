import React, { Component } from 'react';

// Item component - represents a single inventory item
class AddItem extends Component {
  handleSubmit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { additem } = this.props;
    const { recordIdRef, productNameRef, quantityRef } = this.refs;

    additem(
      recordIdRef.value,
      productNameRef.value,
      quantityRef.value
    );
  }

  render() {
    return (
      <form className="new-item" onSubmit={this.handleSubmit.bind(this)} >
        <input
          type="text"
          ref="recordIdRef"
          placeholder="Record ID"
        />
        <input
          type="text"
          ref="productNameRef"
          placeholder="Product"
        />
        <input
          type="number"
          ref="quantityRef"
          placeholder="Quantity"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddItem;
