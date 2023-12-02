import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not found page</title>
      </Helmet>
      Error 404. Sorry, page wasn`t found.
      <Link to="/" className={css.customLink}>
        Back to the Home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
