import React, { Component } from 'react';

import logo from '../../../assets/img/logo.jpg';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <header className='navbar pcoded-header navbar-expand-lg navbar-light'>
        <div className='m-header'>
          <div
            className={'mobile-menu ' + (!this.props.showMenu ? 'on' : '')}
            id='mobile-collapse1'
            onClick={this.props.showMenu}
            style={{ zIndex: '2' }}>
            <span></span>
          </div>
          <div
            onClick={() => this.props.changePage('banners')}
            className='b-brand'
            style={{ cursor: 'pointer' }}>
            <img src={logo} alt='logo' style={{ width: '20%' }} />
          </div>
        </div>
        <div className='mobile-menu' id='mobile-header'>
          <i className='feather icon-more-horizontal'></i>
        </div>
        {/*<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li>
							 <div className="dropdown drp-user">
                                <a href="javascript" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="icon feather icon-settings"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right profile-notification">
                                    <div className="pro-head">
                                        <img src="" className="img-radius" alt="User-Profile" />
                                        <span>John Doe</span>
                                        <a href="auth-signin.html" className="dud-logout" title="Logout">
                                            <i className="feather icon-log-out"></i>
                                        </a>
                                    </div>
                                    <ul className="pro-body">
                                        <li><a href="javascript" className="dropdown-item"><i className="feather icon-settings"></i> Settings</a></li>
                                        <li><a href="javascript" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
                                        <li><a href="message.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
                                        <li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                                    </ul>
                                </div>
                            </div> 
						</li>
					</ul>
				</div>*/}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  showMenu: state.showMenu
});
const mapDispatchToProps = dispatch => ({
  showMenu() {
    dispatch({
      type: 'SHOW_MENU'
    });
  },
  changePage(page) {
    dispatch({
      type: 'CHANGE_PAGE',
      page: page
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
