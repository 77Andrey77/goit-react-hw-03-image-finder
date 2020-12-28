import React, { Component } from 'react';
import s from '../Button/Button.module.css';
import PropTypes from 'prop-types';

// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: 'smooth',
// });
class Button extends Component {
  static propTypes = { fetchImages: PropTypes.func.isRequired };

  render() {
    return (
      <button onClick={this.props.fetchImages} className={s.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
