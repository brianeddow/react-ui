import styled from "styled-components";

const bgTwo = "../../src/media/carouselOneImage.png";

const CarouselItem = styled.div`
  z-index: 25;
  display: inline-block;
  width: 399px;
  height: 100%;
  margin-right: 1px;
  border: 0;
  border-radius: 4px;
  background: url(${() => bgTwo});
  background-size: cover;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  filter: grayscale(100%);
  transition: all 500ms;

  &:hover {
  	filter: grayscale(0);
  	transition: all 500ms;
    transform: scale(1.05);
  }
`;

export default CarouselItem;