import Styled from 'styled-components';
import {Link} from "gatsby";

const PageHeader = Styled.header`
    // background-color: #EFC7B7;
    font-family: Brandon Grotesque Regular Italic;
    font-size: 2rem;
    font-weight: 900;
    margin: 0;
    position: sticky;
    text-align: center;
    text-transform: lowercase;
    top: 0;
    width: 100%;
    z-index: 100;
  
  @media only screen and (min-width: 550px) {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem calc((100vw - 550px - 0.5rem) / 2);
  }
`;

const HeaderNav = Styled.nav`
  margin-top: 0;
`;

const NavLink = Styled(Link)`
  // color: #222;
  // color: #c32aa3;
  color: #AC3B61;
  font-family: Brandon Grotesque Regular Italic;
  font-size: 35px;
  font-weight: ${props => props.fontWeight || 900 };
  line-height: 1;
  margin: 0 0.5rem 0 0;
  display: inline-block;
  position: relative;
  padding: 4px;
  // padding: 0.25rem;
  text-decoration: none;
  
  &.current-page {
    border-bottom: 2px solid #222;
  }
  
  &:first-of-type {
    margin-left: 0;
  }
  
  &:last-of-type {
    margin-right: 0;
  }
`;

const HomeLink = Styled.p`
  text-align: center;
  @media only screen and (min-width: 550px) {
    text-align: left,
  }
`;

export default PageHeader;
export { NavLink, HeaderNav, HomeLink };
