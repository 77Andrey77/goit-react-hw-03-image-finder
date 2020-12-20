import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.css';

import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.searchName;
  //   const nextName = this.props.searchName;

  //   if (prevName !== nextName) {
  //     console.log('изменился запрос');

  //     fetch(
  //       `https://pixabay.com/api/?q=${nextName}&page=1&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
  //     )
  //       .then(res => res.json())
  //       .then(searchName => this.setState({ searchName }));
  //   }
  // }

  render() {
    const { id, src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li className={s.ImageGalleryItem} key={id}>
        <img
          onClick={this.toggleModal}
          src={src}
          alt={alt}
          className={s.ImageGalleryItemImage}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}
