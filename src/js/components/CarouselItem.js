import styled from "styled-components";

const CarouselItem = styled.div`
  display: inline-block;
  width: 399px;
  height: 100%;
  margin-right: 1px;
  border: 0;
  opacity: ${props => props.opacity};
  background: url(${props => props.bg});
`;

export default CarouselItem;