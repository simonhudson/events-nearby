'use strict';

import React from 'react';
import { Header, Title } from './index.styles';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<Title>Marketplace Money</Title>
		</Header>
	);
};

export default SiteHeader;
