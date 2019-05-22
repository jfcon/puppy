/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>I Need a Puppy!</title>
          <meta name="description" content="For when you need a puppy GIF, now!" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            {/* <h2>I Want a Puppy!</h2> */}
            <p>For when you need a puppy GIF right now.</p>
          </section>
          <section className="gifSpot">
            {/* <h2>Gimme!</h2> */}
            <input type="submit" value="Puppy, please!" />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
