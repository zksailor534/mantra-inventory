import React from 'react';
import Griddle from 'griddle-react';

class LotList extends React.Component {
  render() {
    return (
      <Griddle
        results={this.props.lots}
        showFilter={true}
        columns={[ 'recordId', 'productName' ]}
      />
    );
  }
}

LotList.propTypes = {
  lots: React.PropTypes.array
};

export default LotList;
