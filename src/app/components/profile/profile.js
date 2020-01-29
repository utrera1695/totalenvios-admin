import React, { Component, createRef } from 'react';
import SpecialityService from '../../../services/speciality.service';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';

class Specialities extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputRef: createRef(),
		};
	}

	render() {
		return <div className="row"></div>;
	}
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Specialities);
