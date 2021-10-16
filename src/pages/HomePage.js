import React from "react";
import { Helmet } from "react-helmet";

class Homepage extends React.Component {
  head() {
    return (
      <Helmet>
        <title>Homepage</title>
      </Helmet>
    );
  }

  render() {
    return (
      <>
        {this.head()}
        <h1>Homepage</h1>
        <p>Some Content</p>
        <button
          onClick={() => {
            console.log("test");
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default Homepage;
