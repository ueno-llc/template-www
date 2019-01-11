import React from 'react';
import Helmet from 'react-helmet';
import { Segment } from 'components/segment/Segment';
import { Link } from 'components/link/Link';

export default class About extends React.PureComponent<any> {
  render() {
    return (
      <>
        <Helmet title="About" />

        <Segment>
          <h1>About</h1>
          <Link to="/"><a>Back</a></Link>
        </Segment>
      </>
    );
  }
}
