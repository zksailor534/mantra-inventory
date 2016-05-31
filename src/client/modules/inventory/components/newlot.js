import React from 'react';

class NewLot extends React.Component {
  render() {
    const { error } = this.props;
    return (
      <div className="new-lot">
        <h2>Add New Lot</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="recIdRef" type="Text" placeholder="Enter your lot record ID." /> <br/>
        <textarea ref="prodNameRef" placeholder="Enter your lot product name." /> <br/>
        <button onClick={this.createLot.bind(this)}>Add New</button>
      </div>
    );
  }

  createLot() {
    const { create } = this.props;
    const { recIdRef, prodNameRef } = this.refs;

    create(recIdRef.value, prodNameRef.value);
  }
}

export default NewLot;
