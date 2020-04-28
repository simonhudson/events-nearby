'use strict';

import React, { Component } from 'react';
import Loading from '~/components/loading';
import { get } from '~/api';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			geolocationData: null,
			geolocationDataError: null,
			events: null,
			err: null,
		};
	}

	getGeolocationData = () => {
		this.setState({ isLoading: true });
		const handleSuccess = (data) => this.setState({ geolocationData: data }, () => this.getEvents());
		const handleError = (err) => this.setState({ geolocationDataError: err, isLoading: false });

		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(handleSuccess, handleError, { enableHighAccuracy: true });
		else handleError('Geolocation is not available in your browser.');
	};

	getEvents = async () => {
		if (!this.state.geolocationData) return;
		const lat = this.state.geolocationData.coords.latitude;
		const lon = this.state.geolocationData.coords.longitude;
		const DISTANCE_IN_MILES = 600;
		const data = await get(`events?near=${lat},${lon}/${DISTANCE_IN_MILES}`);
		if (data.data) this.setState({ events: data.data, isLoading: false });
		if (data.err) this.setState({ err: data.err, isLoading: false });
	};

	componentDidMount = async () => {
		this.getGeolocationData();
	};

	render = () => {
		const { props, state } = this;
		return (
			<props.theme.layout.Wrap>
				{state.isLoading && <Loading />}
				{!state.isLoading && state.events && state.events.results && state.events.results.length && (
					<ul>
						{state.events.results.map((event, index) => (
							<li key={index}>{event.name}</li>
						))}
					</ul>
				)}
			</props.theme.layout.Wrap>
		);
	};
}
export default Home;
