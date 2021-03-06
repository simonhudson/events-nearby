'use strict';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import SiteHeader from '~/components/site-header';
import SiteFooter from '~/components/site-footer';
import '&/css/main.scss';

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	pageProps.currentPage = {
		query: router.query,
		route: router.route,
	};
	pageProps.theme = Theme;
	return (
		<>
			<Head>
				<title>Events Nearby</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<SiteHeader {...pageProps} />
				<main>
					<Component {...pageProps} />
				</main>
				<SiteFooter {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
