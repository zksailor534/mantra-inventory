import React from 'react';
import Navigation from './navigation';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Navigation />
        </header>

        <div id="content-container">
          {this.props.content()}
        </div>

        <footer>
          <small>
            Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a>, Meteor, & Webpack.
          </small>
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  content: React.PropTypes.func,
};
