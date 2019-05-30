/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';
import ActionJackson from './actions';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   HomePageActions.getPuppyGif();
  // }

  getPuppyGif = () => {
    ActionJackson.getPuppyGif;
    // console.log("hello there")
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
            <input type="submit" value="Puppy, Please!" onClick={this.getPuppyGif} />
          </section>
        </div>
      </article>
    );
  }
}

// HomePage.propTypes = {
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func
// };
