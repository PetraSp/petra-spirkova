import Styled from 'styled-components';
import BackgroundImage from "gatsby-background-image";

const ImageBackground = Styled(BackgroundImage)`
  // background-image: url('/images/marko-blazevic-mn.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
 
 /* override the default margin for sibling elements  */
  + * { 
    margin-top: 0;
  }
`;

const TextBox = Styled.div`
  background-image: linear-gradient(to top #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  
  a {
    margin-top: 0.5rem;
  }
`;

export default ImageBackground;
export {TextBox}
