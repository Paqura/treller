import {DashBoardPopup} from '../style';
import React from 'react';

const
	EditTitlePopup = (props: {
		edit: () => string, 
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
							onChange={props.edit}
						/>
					</label>
				</p>
				<p>
					<button>Переименовать</button>
				</p>
			</main>
		</DashBoardPopup>
	);

export default EditTitlePopup;
