import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import ImageBackground, {TextBox} from './styles';

const Hero = () => {
    const { image } = useStaticQuery(graphql`
query {
  image: file(relativePath: { eq: "marko-blazevic-mn.jpg" }) {
    sharp: childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>&hearts;</h1>
        <p>
          Hello there <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  )
};

export default Hero;
