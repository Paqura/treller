import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

export const
	NavigationItem = styled.li`
		display: flex;
		padding: 24px;
		margin-right: 32px;
	`,
	NavigationList = styled.ul`
		list-style-type: none;
		display: flex;
		align-items: center;
		margin: 0;
		padding: 0;
	`,
	NavigationRoot = styled.nav`
		background-color: blanchedalmond;
	`;

const
	Navigation = () => (
		<NavigationRoot>
			<NavigationList>
				<NavigationItem>
					<Link to="/">Доска</Link>
				</NavigationItem>
				<NavigationItem>
					<Link to="/about">О приложении</Link>
				</NavigationItem>
			</NavigationList>
			
		</NavigationRoot>
	)

export default Navigation;
