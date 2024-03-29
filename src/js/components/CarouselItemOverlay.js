import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    carouselOne: state.carouselOne
  }
}

const Overlay = styled.div`
  z-index: 100;
  display: block;
  position: absolute;
  width: 399px;
  height: 300px;
  margin-top: ${props => props.carouselOne ? "0" : "-301px"};
  opacity: 0.2;
  border-radius: 4px;
  background: #fff;
  transition: 225ms cubic-bezier(.23,.6,.83,.67);

  {/* when hovering, bring up opacity from 0.2 */}
  ${props => props.carouselOne && `
    opacity: 0.4;
  `}
`;

const CarouselItemOverlay = connect(mapStateToProps)(Overlay);

export default CarouselItemOverlay;