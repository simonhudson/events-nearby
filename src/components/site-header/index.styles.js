'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Header = styled.header`
	background: ${({ theme }) => theme.palette.primary.white};
	display: flex;
	padding: ${rem(30)} 0;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			justify-content: space-between;
			padding: ${rem(30)} ${rem(20)};
			`
		)};

}`;

const Title = styled.p`
	font-weight: 600;
	font-size: ${rem(20)};
	margin: 0;
`;

export { Header, Title };
