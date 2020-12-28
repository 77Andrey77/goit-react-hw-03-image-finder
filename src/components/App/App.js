import React, { Component } from 'react';
import './App.css';
// import imagesApi from '../../services/imagesApi';
import Searchbar from '../Searchbar/Searchbar';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Button from '../Button/Button';

export default class App extends Component {
  state = {
    searchName: '',
    // loading: false,
    images: [],
    // currentPage: 1,
    // error: null,
  };

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
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchName={this.state.searchName} />
        {/* <Button /> */}
      </div>
    );
  }
}
