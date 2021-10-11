// ! kyuung
import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
	const {
		width,
		height,
		fontColor,
		bgColor,
		fontSize,
		bradius,
		otherStyles,
		_onClick,
		children,
	} = props;

	const styles = {
		width,
		height,
		fontColor,
		bgColor,
		fontSize,
		bradius,
		otherStyles,
	};

	return (
		<>
			<ElButton {...styles} onClick={_onClick}>
				{children}
			</ElButton>
		</>
	);
};

Button.defaultProps = {
	width: '4rem',
	height: '2rem',
	fontColor: 'white',
	bgColor: 'black',
	fontSize: '14px',
	bradius: '0px',
	otherStyles: '',
	_onClick: () => {},
};

const ElButton = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	color: ${(props) => props.fontColor};
	background-color: ${(props) => props.bgColor};
	font-size: ${(props) => props.fontSize};
	border-radius: ${(props) => props.bradius};
	${(props) => props.otherStyles};
	border: none;
`;

export default Button;
