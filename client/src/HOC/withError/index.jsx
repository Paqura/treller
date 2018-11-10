// @flow
import {compose} from 'recompose';
import ErrorMessage from './ErrorMessage';
import React from 'react';

const
	WithError = (params? : {
		errorMessage: string,
}) => WrappedComponent => 
		class extends React.Component<*, {hasError: boolean}> {
			constructor(props: mixed) {
				super(props);
				this.state = {hasError: false};
			}

			componentDidCatch() {
				this.setState({hasError: true});
			}

			render() {
				return (
					<>
						{this.props.hasError && <ErrorMessage>{params.errorMessage}</ErrorMessage>}
						<WrappedComponent {...this.props} />
					</>
				)
			}
		}

export default compose(
)(WithError);
