import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';

const FieldGroup = ({ id, label, help, ...props }) => (
  <FormGroup controlId={id}>
    <Col componentClass={ControlLabel} xs={3} sm={3} md={3} lg={3}>
      {label}
    </Col>
    <Col xs={8} sm={8} md={8} lg={8}>
      <FormControl {...props} />
    </Col>
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

// Add Item component
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
      <div className="container">
        <Form
          horizontal
          onSubmit={this.handleSubmit.bind(this)}
        >

          {/* Form Name */}
          <legend>Add Item</legend>

          <Col xs={12} sm={12} md={6} lg={4}>
            {/* Select Category */}
            <FieldGroup
              id="category"
              label="Category"
              componentClass="select"
              required
              value={this.state.category}
              onChange={this.setValue.bind(this, 'category')}
            >
              <option value="Beams">Beams</option>
              <option value="Frames">Frames</option>
            </FieldGroup>

            {/* Select Product */}
            <FieldGroup
              id="product"
              label="Product"
              componentClass="select"
              required
              value={this.state.product}
              onChange={this.setValue.bind(this, 'product')}
            >
              <option value="Beam">Beam</option>
              <option value="Frame">Frame</option>
            </FieldGroup>

            {/* Record ID input*/}
            <FieldGroup
              id="recordid"
              type="text"
              label="Record ID*"
              placeholder="XX-0000"
              required
              value={this.state.recordId}
              onChange={this.setValue.bind(this, 'recordId')}
            />

            {/* Quantity input*/}
            <FieldGroup
              id="quantity"
              type="number"
              label="Quantity*"
              required
              value={this.state.quantity}
              onChange={this.setValue.bind(this, 'quantity')}
            />

            {/* Select Style */}
            <FieldGroup
              id="style"
              label="Style"
              componentClass="select"
              value={this.state.style}
              onChange={this.setValue.bind(this, 'style')}
            >
              <option value="Step">Step</option>
              <option value="3/4 Step">3/4 Step</option>
            </FieldGroup>
          </Col>

          <Col xs={12} sm={12} md={6} lg={4}>
            {/* Select Vendor */}
            <FieldGroup
              id="vendor"
              label="Vendor"
              componentClass="select"
              value={this.state.vendor}
              onChange={this.setValue.bind(this, 'vendor')}
            >
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
            </FieldGroup>

            {/* Select Manufacturer */}
            <FieldGroup
              id="manufacturer"
              label="Manufacturer"
              componentClass="select"
              value={this.state.manufacturer}
              onChange={this.setValue.bind(this, 'manufacturer')}
            >
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
            </FieldGroup>

            {/* Textarea */}
            <FieldGroup
              id="description"
              label="Description"
              componentClass="textarea"
              value={this.state.description}
              onChange={this.setValue.bind(this, 'description')}
            />

            {/* File Button */}
            <FieldGroup
              id="image"
              label="Image"
              type="file"
            />
          </Col>

          {/* Button */}
          <Button
            type="submit"
            bsStyle="primary"
          >
            Save
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddItem;
