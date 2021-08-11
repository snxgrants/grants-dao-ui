import styled, { css } from 'styled-components';
import Color from 'color';
import {resetButtonCSS, white, blue, black, blueHover, grayBlue, navy, mediumBlue} from "../../styles/common";

type ButtonProps = {
	size?: 'sm' | 'md' | 'lg' | 'xl';
	variant: 'primary' | 'secondary' | 'solid' | 'outline' | 'text';
	isActive?: boolean;
	isRounded?: boolean;
};

const condensedMedium = 'GT America Condensed-Medium';

const Button = styled.button<ButtonProps>`
	font-family: ${condensedMedium};
	height: 32px;
	line-height: 32px;
	font-size: 12px;
	padding: 0 12px;
	border: none;
	border-radius: ${(props) => (props.isRounded ? '100px' : '4px')};
	white-space: nowrap;
	cursor: pointer;
	outline: none;
    color: ${white};
	text-transform: capitalize;

  	&:disabled {
		background: ${(props) => Color(blue).alpha(0.5).rgb().string()};
		color: ${white};
		box-shadow: none;
	cursor: not-allowed;

	}

	${(props) =>
		props.size === 'sm' &&
		css`
			height: 24px;
			line-height: 24px;
		`}

	${(props) =>
		props.size === 'md' &&
		css`
			height: 32px;
			line-height: 32px;
		`}

	${(props) =>
		props.size === 'lg' &&
		css`
			padding: 0 40px;
			height: 40px;
			line-height: 40px;
		`}		


	${(props) =>
		props.size === 'xl' &&
		css`
			height: 48px;
			line-height: 48px;
		`}				

	${(props) =>
		props.variant === 'primary' &&
		css`
			color: ${black};
			background: ${blue};
			box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.6);
			border: 1px solid transparent;
			&:hover {
				&:not(:disabled) {
					background: ${blueHover};
					box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
					border: 1px solid ${blue};
				}
			}
		`}

		${(props) =>
			props.variant === 'secondary' &&
			css`
				color: ${blue};
				background: ${grayBlue};
				box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
				border: 1px solid ${blue};
				&:hover {
					&:not(:disabled) {
						background: ${blueHover};
						color: ${black};
					}
				}
			`}	


		${(props) =>
			props.variant === 'solid' &&
			css`
				color: ${white};
				background: ${navy};
				&:hover {
					&:not(:disabled) {
						background: ${mediumBlue};
					}
				}
				&:disabled {
					background: ${(props) => Color(navy).alpha(0.2).rgb().string()};
				}
			`}		


		${(props) =>
			props.variant === 'outline' &&
			css`
				color: ${white};
				background: ${navy};
				border: 1px solid ${grayBlue};
				&:hover {
					&:not(:disabled) {
						background: ${mediumBlue};
					}
				}
				&:disabled {
					background: ${(props) => Color(navy).alpha(0.2).rgb().string()};
					opacity: 0.5;
				}
			`}		


		${(props) =>
			props.variant === 'text' &&
			css`
				${resetButtonCSS};
				color: ${white};
				&:hover {
					&:not(:disabled) {
						color: ${blue};
					}
				}
			`}	
`;

export default Button;
