import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import ImageBackground, {TextBox} from './styles';

const Hero = () => {
  return (
    <ImageBackground>
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
