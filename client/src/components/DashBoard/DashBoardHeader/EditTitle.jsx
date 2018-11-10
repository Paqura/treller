// @flow

import {compose, withHandlers, withState} from 'recompose';
import {DashBoardName} from '../style';
import EditTitlePopup from './EditTitlePopup';
import {PortalWithState} from 'react-portal';
import React from 'react';

const
	EditTitle = (props: {
		edit: (value: string) => void,
		titleName: string,
	}) => (
		<React.Fragment>
			<PortalWithState closeOnOutsideClick closeOnEsc>
				{({openPortal, closePortal, portal}) => (
					<React.Fragment>
						<DashBoardName onClick={openPortal} >
							{props.titleName}
						</DashBoardName>
						{portal(
							<EditTitlePopup 
								edit={props.edit} 
								close={closePortal} 
							/>,
						)}
					</React.Fragment>
				)}
			</PortalWithState>
		</React.Fragment>
	);

export default compose(
	withState('titleName', 'changeTitle', 'Empty title'),

	withHandlers({
		edit: props => value => props.changeTitle(value),
	}),
)(EditTitle);
