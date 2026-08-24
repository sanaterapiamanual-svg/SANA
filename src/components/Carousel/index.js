import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import { CarouselContainer } from './styles';

export const Carousel = ({
  items,
  ...props
}) => {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <CarouselContainer>
      <AliceCarousel
        items={items}
        responsive={responsive}
        infinite={false}
        controlsStrategy="alternate"
        mouseTracking
        disableButtonsControls={false}
        disableDotsControls={false}
        renderPrevButton={({ isDisabled }) => (
          !isDisabled && items.length > 0 ? (
            <button
              className="alice-carousel__prev-btn-item"
              type="button"
              aria-label="Imagem anterior"
            >
              &#8249;
            </button>
          ) : null
        )}
        renderNextButton={({ isDisabled }) => (
          !isDisabled && items.length > 0 ? (
            <button
              className="alice-carousel__next-btn-item"
              type="button"
              aria-label="Próxima imagem"
            >
              &#8250;
            </button>
          ) : null
        )}
        {...props}
      />
    </CarouselContainer>
  );
};

Carousel.propTypes = {
	items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
