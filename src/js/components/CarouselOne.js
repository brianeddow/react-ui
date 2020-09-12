import styled from "styled-components";

const CarouselOne = styled.div`
  z-index: 100;
  position: static;
  display: inline-block;
  width: 399px;
  height: 100%;
  margin-right: 1px;
  border: 0;
  border-radius: 14pt;
  background: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export default CarouselOne;