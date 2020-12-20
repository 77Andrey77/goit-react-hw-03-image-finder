import axios from 'axios';
import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import s from '../ImageGallery/ImageGallery';

export default class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      console.log('изменился запрос');

      // this.fetchImg();
      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
        )
        // .then(res => res.json())
        .then(response => this.setState({ images: response.data.hits }));
    }
  }

  render() {
    const { images } = this.state;
    return (
      <ul>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            largeImageUrl={image.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
//<li key={image.id}>
// <img src={image.webformatURL} alt={image.tags} />
//</li>;
//  <ul className={s.ImageGallery}>
//         {images.map(image => (
//           <ImageGalleryItem
//             key={image.id}
//             src={image.webformatURL}
//             largeImageUrl={image.largeImageURL}
//             alt={image.tags}
//           />
//         ))}
//       </ul>

// images.map(image => (
//   <ImageGalleryItem
//     key={images.id}
//     src={image.webformatURL}
//     largeImageUrl={image.largeImageURL}
//     alt={image.tags}
//   />
// ));
