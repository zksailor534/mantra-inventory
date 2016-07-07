import React from 'react';

class NewOrder extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <div className="new-order">
        <h2>Add New Order</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="soNoRef" type="Text" placeholder="Enter the Sales Order #." /> <br/>
        <textarea ref="customerNameRef" placeholder="Enter the customer name." /> <br/>
        <button onClick={this.createOrder.bind(this)}>Add New</button>
      </div>
    );
  }

  createOrder() {
    const { create } = this.props;
    const { soNoRef, customerNameRef } = this.refs;

    create(soNoRef.value, customerNameRef.value);
  }
}

export default NewOrder;
