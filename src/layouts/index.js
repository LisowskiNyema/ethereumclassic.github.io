import React from "react";
import Helmet from 'react-helmet'

import '../assets/sass/main.scss'

import withI18next from "../i18n/withI18next";

import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import LocalizedLink from "components/LocalizedLink";

class Index extends React.Component {

  render() {
    const { children, location: { pathname }, pageContext: { locale } } = this.props;
    const rawPath = pathname.startsWith(`/${locale}/`) ? pathname.replace(`${locale}/`, '') : pathname;
    const isHomePage = rawPath === '/' || rawPath === '';
    const isBlog = rawPath.startsWith('/blog');
    const wrapperClass = isHomePage ? 'home' : 'page';
    return (
      <>
        <Helmet>
          <title>Ethereum Classic</title>
       </Helmet>
        <Navigation />
        <div id="wrapper" className={wrapperClass}>
          {!isHomePage && <Header extra={isBlog && <LocalizedLink to="/blog">Blog</LocalizedLink>} />}
          <div id="layout-content">
            <div id="layout-container">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}


export default withI18next()(Index);