import axios from 'axios';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from '../ImageGallery/ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      console.log('изменился запрос');

      this.setState({ loading: true });

      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(response => this.setState({ images: response.data.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <ul className={s.ImageGallery}>
        {loading && <div>Загружаем ....</div>}
        {images.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
