import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const Layout = ({ children, data }) => (
  <div>
  <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
    </Helmet>
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
