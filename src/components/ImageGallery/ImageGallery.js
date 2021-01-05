import { Component } from 'react';
import s from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import apiService from '../../services/apiService';
import Button from '../Button/Button';

export default class ImageGallery extends Component {
  render() {
    const { images, handleLoadeMore, onOpenModal } = this.props;
    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              largeImageURL={image.largeImageURL}
              onOpenModal={onOpenModal}
            />
          ))}
        </ul>
        <Button onClick={handleLoadeMore} />
      </>
    );
  }
}
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleLoadeMore: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
