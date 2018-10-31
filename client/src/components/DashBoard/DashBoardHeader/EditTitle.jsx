import {compose, withHandlers, withState} from 'recompose';
import {DashBoardName} from '../style';
import EditTitlePopup from './EditTitlePopup';
import React from 'react';

const
	EditTitle = (props: {
		edit: () => {},
		titleName: string,
		toggleEditMode: () => boolean,
		isEdit: boolean,
	}) => (
		<React.Fragment>
			<DashBoardName
				onClick={props.toggleEditMode}
			>
				{props.titleName}
			</DashBoardName>

			{props.isEdit && <EditTitlePopup edit={props.edit} />}

		</React.Fragment>
	);

export default compose(
	withState('isEdit', 'toggleEditTitle', false),
	withState('titleName', 'changeTitle', 'Empty title'),

	withHandlers({
		edit          : props => event => props.changeTitle(event.target.value),
		toggleEditMode: props => () => props.toggleEditTitle(V => !V),
	}),
)
(EditTitle);
