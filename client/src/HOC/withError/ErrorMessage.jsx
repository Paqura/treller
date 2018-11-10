import {compose, defaultProps} from 'recompose';
import {Error} from './styles';
import React from 'react';

const
	ErrorComponent = (props?: {
		errorMessage: string,
	}) => <Error>
		<span>{props.errorMessage}</span>
	</Error>;

export default compose(
	defaultProps({errorMessage: 'Some error'}),
)(ErrorComponent);
