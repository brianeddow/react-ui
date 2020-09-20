import styled from "styled-components";

const CarouselItem = styled.div`
  z-index: 25;
  display: inline-block;
  width: 399px;
  height: 100%;
  margin-right: 1px;
  border: 0;
  border-radius: 14pt;
  background: url(${props => props.bg});
  background-size: cover;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  filter: grayscale(100%);
  transition: all 1500ms;

  &:hover {
  	filter: grayscale(0);
  	transition: all 1500ms;
  }
`;

export default CarouselItem;