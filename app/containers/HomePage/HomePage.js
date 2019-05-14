/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
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
    const { loading, error, repos, username, onChangeUsername, onSubmitForm } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet>
          <title>I Need a Puppy!</title>
          <meta name='description' content='For when you need a puppy GIF, now!' />
        </Helmet>
        <div className='home-page'>
          <section className='centered'>
            <h2>I Want a Puppy!</h2>
            <p>For when you need a puppy GIF right now.</p>
          </section>
          <section>
            <h2>Try me!</h2>
            <form onSubmit={onSubmitForm}>
              <label htmlFor='username'>
                Show Github repositories by
                <span className='at-prefix'>@</span>
                <input id='username' type='text' placeholder='flexdinesh' value={username} onChange={onChangeUsername} />
              </label>
            </form>
            <ReposList {...reposListProps} />
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
