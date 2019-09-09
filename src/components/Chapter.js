import React, { Component } from "react";
import Poems from "./Poems";
export class Chapter extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div style={{ padding: `50px 5%` }}>
          <h1 className="chapterTitle">
            <a id={this.props.match.url.slice(1, 2)}>
              {this.props.chapterTitle}
            </a>
          </h1>
          <blockquote className="blockquote-8">
            <p>{this.props.chapterQuote}</p>
            <cite>{this.props.authorQuote}</cite>
          </blockquote>
        </div>
        <Poems poems={this.props.poems} location={this.props.location} />
      </React.Fragment>
    );
  }
}

export default Chapter;
