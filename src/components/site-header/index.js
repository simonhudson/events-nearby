'use strict';

import React from 'react';
import { Header, Title } from './index.styles';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<props.theme.layout.Wrap>
				<Title>Events Nearby</Title>
			</props.theme.layout.Wrap>
		</Header>
	);
};

export default SiteHeader;
