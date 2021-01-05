import React, { Component } from 'react';
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import apiService from '../../servises/apiService';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
// import Button from '../Button/Button';

export default class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
  };

  /////////////////////// проверяем изменение запроса

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;

    if (prevName !== nextName) {
      console.log('изменился запрос');
      this.setState({ loading: true });

      this.fetchImages();
    }

    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  ///////////////////////////////////Api

  fetchImages = () => {
    apiService
      .fetchImagesWithQuery(this.state.searchName, this.state.page)
      .then(response =>
        this.setState(({ images, page }) => ({
          images: [...images, ...response.hits],
          page: page + 1,
        })),
      )
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };
  //////////////////////////////////////////
  // toggleLoader = () => {
  //   this.setState(({ loading }) => ({ loading: !loading }));
  // };

  /////////////////////////записывает из формы значение иcкомого в state
  handleFormSubmit = searchName => {
    this.setState({ searchName: searchName, page: 1, images: [] });
  };
  ////////////////////////// loade more
  handleLoadeMore = onClick => {
    this.fetchImages();
  };

  ////////////////////////////////запись значения largeImageURL и открытие модалки
  onOpenModal = e => {
    this.setState({ largeImageURL: e.target.dataset.source });
    this.toggleModal();
  };

  ///////////////////////////////change modal
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  /////////////////////////////////////////////

  render() {
    const { images, showModal, largeImageURL, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            style={{ textAlign: 'center' }}
          />
        )}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            handleLoadeMore={this.handleLoadeMore}
            onOpenModal={this.onOpenModal}
          />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </div>
    );
  }
}
