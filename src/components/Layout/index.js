import React from 'react';
import Header from '../Header';
import GlobalStyle, {MainContent} from "./styles";
import Helmet from 'react-helmet';
import useSiteMetadata from "../../hooks/usesitemetadata";

//layout - a special wrapper component, everything that get passed into it, will get displayed as a child content
const Layout = ({children}) => {
const { title, description } = useSiteMetadata();
  return (
    <>
      <GlobalStyle/>
      <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      <Header/>
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Layout;


