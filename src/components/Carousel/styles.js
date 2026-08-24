import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

export const CarouselContainer = styled.div`
	width: 100%;
	grid-column: 1 / -1;
	height: auto;
	margin: 0;
	padding: 0 clamp(16px, 8vw, 150px) 48px;
	box-sizing: border-box;
	overflow: hidden;

	.alice-carousel {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid ${({ theme }) => theme.colors.light.beigeBox};
    background-color: ${({ theme }) => theme.colors.light.beigeBox};
    border-radius: 20px;
	}
	.alice-carousel__stage {
		white-space: nowrap;
	}
  
  .alice-carousel__wrapper {
    min-height: clamp(390px, 42vw, 600px);
    align-content: center;
  }

	.alice-carousel__stage-item {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: top;
		padding: 0 10px;
		line-height: normal;

		figure {
			width: 100%;
			margin: 0;
			cursor: pointer;
		}

		img {
			display: block;
			max-width: 345px;
			height: auto;
			aspect-ratio: 2 / 3;
			object-fit: cover;
      border-radius: 165px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
			transition: transform 250ms ease, box-shadow 250ms ease;

			&:focus-visible {
				outline: 3px solid ${({ theme }) => theme.colors.dark.brown0};
				outline-offset: 6px;
			}
		}

		figcaption {
			max-width: 345px;
			margin-top: 18px;
			color: ${({ theme }) => theme.colors.dark.brown0};
			font-family: ${({ theme }) => theme.fonts.main};
			font-size: 18px;
			line-height: 1.2;
			text-align: center;
			transition: transform 250ms ease, color 250ms ease;
		}

		figure:hover img {
			transform: scale(1.03);
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.18);
		}

		figure:hover figcaption {
			transform: translateY(2px) scale(1.04);
			color: ${({ theme }) => theme.colors.dark.brown1 || theme.colors.dark.brown0};
		}
	}

	.alice-carousel__prev-btn,
	.alice-carousel__next-btn {
		padding: 0;
    padding-bottom: 5px;
	}

	.alice-carousel__prev-btn-item,
	.alice-carousel__next-btn-item {
		background: transparent;
		border: 0;
		color: ${({ theme }) => theme.colors.dark.brown0};
		font-size: 35px;
    height: 25px;
		padding: 0;
	}

	.alice-carousel__prev-btn-item:hover,
	.alice-carousel__next-btn-item:hover {
		transform: scale(1.1);
		filter: box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}

	.alice-carousel__dots {
		margin: 5px 3px 5px;
	}

	.alice-carousel__dots-item.__active {
		width: 20px;
		height: 10px;
		border-radius: 6px; 
		border: 1px solid ${({ theme }) => theme.colors.dark.brown1} !important;
		background-color: ${({ theme }) => theme.colors.light.beigeBox} !important;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
	}

	.alice-carousel__dots-item {
    width: 10px;
    height: 10px;
	}

	.alice-carousel__dots-item:hover {
		transform: scale(1.1);
	}

	.alice-carousel__dots-item:not(.__custom) {
		background-color: ${({ theme }) => theme.colors.dark.brown0};
	}
	
		@media (min-width: 600px) and (max-width: 1023px) {
			.alice-carousel__dots-item:nth-child(2):not(.__active),
			.alice-carousel__dots-item:nth-child(4):not(.__active),
			.alice-carousel__dots-item:nth-child(6):not(.__active) {
				display: none;
			}
		}

	${mixins.lg(`
		.alice-carousel__dots-item:nth-child(3):not(.__active),
		.alice-carousel__dots-item:nth-child(5):not(.__active),
		.alice-carousel__dots-item:nth-child(6):not(.__active) {
			display: none;
		}
	`)}

	@media (max-width: 600px) {
		padding: 0 8px 32px;

		.alice-carousel__stage-item {
			padding: 0 12px;
		}
	}
`;
