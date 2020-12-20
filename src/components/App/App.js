import React, { Component } from 'react';
import './App.css';
// import imagesApi from '../../services/imagesApi';
import Searchbar from '../Searchbar/Searchbar';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImageGallery from '../ImageGallery/ImageGallery';

// const ImagesGallery = ({ images }) => (
//   <ul>
//     {images.map(({ id, src, alt }) => (
//       <li key={id}>
//         <img src={src} alt={alt} className="ImageGalleryItem-image" />
//       </li>
//     ))}
//   </ul>
// );

/* <ul className="ImageGallery">
  {images.map(image => (
    <ImageGalleryItem
      key={images.id}
      src={image.webformatURL}
      largeImageUrl={image.largeImageURL}
      alt={image.tags}
    />
  ))}
</ul>; */

/* <li className="ImageGalleryItem">
  <img src={src} alt={alt} className="ImageGalleryItem-image" />
  {showModal && <Modal />}
</li>; */

export default class App extends Component {
  state = {
    searchName: '',
    // loading: false,
    // images: [],
    // currentPage: 1,
    // error: null,
  };

  // componentDidMount() {
  //   fetch(
  //     `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.currentPage}&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
  //   )
  //     .then(res => res.json())
  //     .then(images => this.setState({ images }));
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.searchName;
  //   const nextName = this.props.searchName;

  //   if (prevName !== nextName) {
  //     console.log('изменился запрос');

  //     // this.fetchImg();
  //   }
  // }

  //записівает из формы значение икомого в state
  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  // fetchImg = () => {
  //   const { searchName, currentPage } = this.state;
  //   const option = { searchName, currentPage };

  //   this.setState({ loading: true });

  //   imagesApi
  //     .fetchImagesAPI(option)
  //     .then(images => {
  //       this.setState(prevState => ({
  //         images: [...prevState.images, ...images],
  //         currentPage: prevState.currentPage + 1,
  //       }));
  //     })
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  // componentDidMount() {
  //   this.setState({ loading: true });
  // }

  render() {
    return (
      <div>
        {/* {this.state.images && <div>{this.state.images.hits[0].user_id}</div>} */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
        {/* {this.state.loading && <h1>Loading....</h1>}
        {this.state.search && <div> zdec vctavim fotky</div>} */}
      </div>
    );
  }
}
