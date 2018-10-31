import styled from 'styled-components';

export const
	DashBoardName = styled.span`
		display: flex;
		width: 100%;
		max-width: 220px;
		padding: 4px 16px;
		border-radius: 2px;
		transition: 400ms;
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.5);
			color: #ffffff;
		}
	`,
	DashBoardPopup = styled.div`
		position: absolute;
		left: 60px;
		box-shadow: 2px 2px 4px #ccc;
		max-width: 240px;
		padding: 32px;
	`;
