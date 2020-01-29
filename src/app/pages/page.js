import React, { Component } from 'react';
import Sidemenu from '../components/menu/menu';
import Header from '../components/header/header';
import { connect } from 'react-redux';

import Banners from './banners/banners';
import Promocion from './promocion/promocion';
class Pages extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Sidemenu />
        <Header />
        <div className='pcoded-main-container'>
          <div className='pcoded-wrapper'>
            <div className='pcoded-content'>
              <div className='pcoded-inner-content'>
                <div className='main-body'>
                  <div className='page-wrapper'>
                    {this.props.page === 'slider' ? <Banners /> : null}
                    {this.props.page === 'promocion' ? <Promocion /> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  page: state.page
});
const mapDispatchToProps = dispatch => ({
  setSpecialitis(value) {
    dispatch({
      type: 'CHANGE_SPECIALITY',
      value: value
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
