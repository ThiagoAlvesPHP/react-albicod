import React from 'react';

function Component(props) {

	return (
		<div className="service-icon">
				<div className="ic">
					{props.icon()}
				</div>
				<div className="title">{props.text}</div>
		</div>
	);
}

export default Component;