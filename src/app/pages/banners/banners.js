import React, { Component } from 'react';
import BannerService from '../../../services/banner.service';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import svg from '../../../assets/three-dots.svg';
import global from '../../../services/global';
class Banners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: [],
      files: '',
      show: false,
      show2: false,
      indexInitial: 0,
      indexLast: 5,
      activePage: 1,
      perpage: 6
    };
    this.getBanners = this.getBanners.bind(this);
    this.saveBanner = this.saveBanner.bind(this);
    this.deleteBanner = this.deleteBanner.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.getBanners();
  }
  async saveBanner() {
    this.setState({ show: true });
    if (this.state.files !== '') {
      await BannerService.SaveImages({
        image: this.state.files,
        type: 'S'
      }).then(response => {
        if (response.data) {
          var slider = this.state.slider;
          slider.push(response.data);
          this.setState({
            files: '',
            slider: slider,
            show: false
          });
          Swal.fire({
            type: 'success',
            title: 'Imagen Agregado',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    } else {
      Swal.fire({
        type: 'warning',
        title: 'Debe subir una imagen',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
  handleInputFileChange(e) {
    const formData = new FormData();
    this.setState({ show2: true });
    console.log(e.target.files[0]);
    formData.append('image', e.target.files[0]);
    BannerService.UploadPic(formData).then(response =>
      this.setState({
        files: global.URL + '/images/files/' + response.data,
        show2: false
      })
    );
  }
  async getBanners() {
    var banners = await BannerService.GetSlider();
    this.setState({ slider: banners.data });
  }
  handlePageChange(pageNumber) {
    this.setState({
      activePage: pageNumber,
      indexLast: pageNumber * this.state.perpage - 1,
      indexInitial: (pageNumber - 1) * this.state.perpage
    });
  }
  async deleteBanner(id, index) {
    var deleteBanner = await BannerService.DeleteImages(id);
    if (deleteBanner) {
      this.state.slider.splice(index, 1);
      this.setState({ slider: this.state.slider });
      Swal.fire({
        type: 'success',
        title: 'Imagen del slider eliminado',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  close() {
    this.setState({ files: '' });
  }
  render() {
    return (
      <>
        <div
          className='card'
          style={{ boxShadow: '0 1px 20px 0 rgba(69, 90, 100, 0.4)' }}>
          <div className='card-block px-0 py-3'>
            <div className='container'>
              <h3>Subir imagenes del slider</h3>
              <div className='row'>
                <div
                  className='col-12'
                  style={{ display: 'flex', flexFlow: 'column' }}>
                  <input
                    type='file'
                    className='form-control'
                    onChange={this.handleInputFileChange}
                  />
                  {this.state.files !== '' ? (
                    <img
                      style={{ width: '300px', margin: '10px auto' }}
                      src={this.state.files}
                      alt='imagen'
                    />
                  ) : this.state.show2 ? (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                      <img
                        style={{ width: '30px', marginRight: '5px' }}
                        src={svg}
                        alt='loader'></img>{' '}
                      Cargando imagen
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              margin: '15px 0 '
            }}>
            {this.state.show ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <img
                  style={{ width: '30px', marginRight: '5px' }}
                  src={svg}
                  alt='loader'></img>{' '}
                Subiendo imagen, por favor espere
              </div>
            ) : null}
            <button
              className='btn btn-secundary'
              style={{ margin: ' 0 15px' }}
              onClick={this.close}>
              Cancelar
            </button>
            <button
              className='btn btn-primary'
              style={{ margin: ' 0 15px' }}
              onClick={this.saveBanner}
              disabled={this.state.files === '' || this.state.show}>
              Guardar imagen
            </button>
          </div>
        </div>

        <div className='row'>
          {this.state.slider.map((data, index) =>
            this.state.indexInitial <= index &&
            index <= this.state.indexLast ? (
              <div key={index} className='col-6 col-sm-3'>
                <div
                  style={{
                    boxShadow: 'rgba(69, 90, 100, 0.4) 0px 0px 10px 0px'
                  }}
                  className='card'>
                  <img
                    style={{ width: '100%', height: '130px' }}
                    src={data.image}
                    alt='slider'></img>
                  <div style={{ textAlign: 'center' }}>
                    <i
                      style={{ cursor: 'pointer', fontSize: '14px' }}
                      className='feather icon-trash-2'
                      onClick={() => this.deleteBanner(data._id, index)}></i>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>

        <Pagination
          hideFirstLastPages
          pageRangeDisplayed={this.state.perpage}
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.perpage}
          totalItemsCount={this.state.slider.length}
          onChange={pageNumber => this.handlePageChange(pageNumber)}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Banners);
