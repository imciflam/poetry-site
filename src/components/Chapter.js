import React, { Component } from 'react'
import Poems from "./Poems"
export class Chapter extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h1><a id={this.props.match.url.slice(1,2)}>{this.props.chapterTitle}</a></h1>
                <blockquote className="blockquote-8">
                    <p>{this.props.chapterQuote}</p>
                    <cite>{this.props.authorQuote}</cite>
                </blockquote>
                {/* <a href="#1.1">1.1</a>
                <a href="#1.2">1.2</a>
                <h5><a id="1.1"></a><p>kek</p></h5> */}
                <Poems poems={this.props.poems} location={this.props.location} />

            </React.Fragment >
        )
    }
}

export default Chapter
