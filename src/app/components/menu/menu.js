import React, { Component } from 'react';
import UserService from '../../../services/user.service';
import { connect } from 'react-redux';
import logo from '../../../assets/img/logo.jpg';
import './menu.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    UserService.Logout();
  }
  render() {
    return (
      <nav
        className={'pcoded-navbar ' + (this.props.showMenu ? 'mob-open' : '')}>
        <div className='navbar-wrapper'>
          <div className='navbar-brand header-logo'>
            <div
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center'
              }}
              onClick={() => this.props.changePage('doctors')}
              className='b-brand'>
              <img src={logo} alt='logo' style={{ width: '70%' }} />
            </div>
            {/* <a className="mobile-menu" id="mobile-collapse" onClick="javascript"><span></span></a> */}
          </div>
          <div className='navbar-content scroll-div'>
            <ul className='nav pcoded-inner-navbar'>
              <li className='nav-item pcoded-menu-caption'>
                <label>Menú</label>
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.changePage('slider')}
                className={
                  'nav-item ' + (this.props.page === 'slider' ? 'active' : null)
                }>
                <div className='nav-link '>
                  <span className='pcoded-micon'>
                    <i className='fas fa-images'></i>
                  </span>
                  <span className='pcoded-mtext'>Slider</span>
                </div>
              </li>
              <li
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.changePage('promocion')}
                className={
                  'nav-item ' +
                  (this.props.page === 'promocion' ? 'active' : null)
                }>
                <div className='nav-link '>
                  <span className='pcoded-micon'>
                    <i className='fas fa-images'></i>
                  </span>
                  <span className='pcoded-mtext'>Promociones</span>
                </div>
              </li>
            </ul>
            <ul className='nav pcoded-inner-navbar'>
              <li className='nav-item pcoded-menu-caption'>
                <label>Opciones</label>
              </li>

              {/* <li
								style={{ cursor: 'pointer' }}
								onClick={() => this.props.changePage('profile')}
								className={'nav-item ' + (this.props.page === 'profile' ? 'active' : null)}>
								<div className="nav-link ">
									<span className="pcoded-micon">
										<i className="feather icon-user"></i>
									</span>
									<span className="pcoded-mtext">Perfil</span>
								</div>
							</li> */}
              <li
                style={{ cursor: 'pointer' }}
                onClick={this.Logout}
                className='nav-item'>
                <div className='nav-link '>
                  <span className='pcoded-micon'>
                    <i className='feather icon-log-out'></i>
                  </span>
                  <span className='pcoded-mtext'>Salir</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  showMenu: state.showMenu
});
const mapDispatchToProps = dispatch => ({
  changePage(page) {
    dispatch({
      type: 'CHANGE_PAGE',
      page: page
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
