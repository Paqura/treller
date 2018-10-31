import React from 'react';
import styled from 'styled-components';

export const
	PageTitle = styled.h1`
		font-size: 32px;
		font-weight: 500;
	`,
	PageWrapper = styled.div`
		padding: 32px;
		background-color: rgba(0, 0, 0, 0.1);
		height: 100vh;
	`;

const
	AboutPage = () => (
		<PageWrapper>
			<PageTitle>Приложение Trello</PageTitle>
		</PageWrapper>
	);

export default AboutPage;
