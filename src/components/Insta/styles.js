import Styled from 'styled-components';
import Image from "gatsby-image";

const InstaWrapper = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem -0.5rem;
  padding: 0.5rem 0;
`;

const InstaLink = Styled.a`
  box-shadow: 0;
  display: block;
  margin: 0.5rem;
  max-width: calc(33% - 1rem);
  width: 120px;
  transition: 200ms box-shadow linear;

  &:focus,
  &:hover {
    box-shadow: 0 2px 14px #22222244;
    z-index: 10;
  }
`;

const InstaImage = Styled(Image)`
  > * { 
    margin-top: 0;
  }
`;

export default InstaWrapper;
export { InstaLink, InstaImage };
