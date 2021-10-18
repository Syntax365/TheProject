import React from "react";
import { Helmet } from "react-helmet";

class Homepage extends React.Component {
  head() {
    return (
      <Helmet
        meta={[
          {
            name: "description",
            content: "TODO: Add meta page description for SEO",
          },
        ]}
      >
        <title>Homepage</title>
      </Helmet>
    );
  }

  render() {
    return (
      <>
        {this.head()}
        <h1>Testing Google Cloud Platform Deploy</h1>
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
