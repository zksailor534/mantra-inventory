import React, { Component } from 'react';

// Item component - represents a single inventory item
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      category: 'Beams',
      product: 'Beam',
      recordId: '',
      quantity: '',
      style: 'Step',
      vendor: 'Company A',
      manufacturer: 'Company A',
      description: '',
    };
    this.state = this.defaultState;
  }

  handleSubmit(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { additem } = this.props;

    additem(this.state);

    this.setState(this.defaultState);
  }

  setValue(field, event) {
    const object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  render() {
    return (
      <form
        className="form-horizontal new-item"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <fieldset>

        {/* Form Name */}
        <legend>Add Item</legend>

        {/* Select Category */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="category">Category*</label>
          <div className="col-md-4">
            <select
              id="category"
              name="category"
              className="form-control"
              required
              value={this.state.category}
              onChange={this.setValue.bind(this, 'category')}
            >
              <option value="Beams">Beams</option>
              <option value="Frames">Frames</option>
            </select>
          </div>
        </div>

        {/* Select Product */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="product">Product*</label>
          <div className="col-md-4">
            <select
              id="product"
              name="product"
              className="form-control"
              required
              value={this.state.product}
              onChange={this.setValue.bind(this, 'product')}
            >
              <option value="Beam">Beam</option>
              <option value="Frame">Frame</option>
            </select>
          </div>
        </div>

        {/* Record ID input*/}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="recordid">Record ID*</label>
          <div className="col-md-4">
            <input
              id="recordid"
              name="recordid"
              type="text"
              placeholder="XX-0000"
              className="form-control input-md"
              required
              value={this.state.recordId}
              onChange={this.setValue.bind(this, 'recordId')}
            />
          </div>
        </div>

        {/* Quantity input*/}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="quantity">Quantity*</label>
          <div className="col-md-4">
            <input
              id="quantity"
              name="quantity"
              type="number"
              className="form-control input-md"
              required
              value={this.state.quantity}
              onChange={this.setValue.bind(this, 'quantity')}
            />
          </div>
        </div>

        {/* Select Style */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="style">Style</label>
          <div className="col-md-4">
            <select
              id="style"
              name="style"
              className="form-control"
              value={this.state.style}
              onChange={this.setValue.bind(this, 'style')}
            >
              <option value="Step">Step</option>
              <option value="3/4 Step">3/4 Step</option>
            </select>
          </div>
        </div>

        {/* Select Vendor */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="vendor">Vendor</label>
          <div className="col-md-4">
            <select
              id="vendor"
              name="vendor"
              className="form-control"
              value={this.state.vendor}
              onChange={this.setValue.bind(this, 'vendor')}
            >
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
            </select>
          </div>
        </div>

        {/* Select Manufacturer */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="manufacturer">Manufacturer</label>
          <div className="col-md-4">
            <select
              id="manufacturer"
              name="manufacturer"
              className="form-control"
              value={this.state.manufacturer}
              onChange={this.setValue.bind(this, 'manufacturer')}
            >
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
            </select>
          </div>
        </div>

        {/* Textarea */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="description">Description</label>
          <div className="col-md-4">
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.setValue.bind(this, 'description')}
            >
            </textarea>
          </div>
        </div>

        {/* File Button */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="image">Choose Image</label>
          <div className="col-md-4">
            <input id="image" name="image" className="input-file" type="file" />
          </div>
        </div>

        {/* Button */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="save"></label>
          <div className="col-md-4">
            <button
              id="save"
              name="save"
              type="submit"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>

        </fieldset>
      </form>
    );
  }
}

export default AddItem;
