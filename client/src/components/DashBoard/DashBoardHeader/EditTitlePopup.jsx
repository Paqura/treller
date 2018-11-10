// @flow
import {compose, withHandlers, withState} from 'recompose';
import {DashBoardPopup} from '../style';
import React from 'react';
import withError from '../../../HOC/withError';

const
	EditTitlePopup = (props: {
		changeTitle: () => void,
		close: () => void,
		edit: () => string, 
		setTemporaryTitle: (value: string) => string,
	}) => (
		<DashBoardPopup>
			<header>
				Переименование заголовка
			</header>
			<main>
				<p>
					<label>
						<input 
							type="text" 
							onChange={props.setTemporaryTitle}
						/>
					</label>
				</p>
				<p>
					<button onClick={props.changeTitle}>Переименовать</button>
				</p>
			</main>
		</DashBoardPopup>
	);

export default compose(
	withError(),
	withState('temporaryTitle', 'setTemporaryTitle', ''),

	withHandlers({
		changeTitle: props => () => {
			props.edit(props.temporaryTitle);
			props.close();
		},

		setTemporaryTitle: props => event => props.setTemporaryTitle(event.target.value),
	}),
)(EditTitlePopup);
