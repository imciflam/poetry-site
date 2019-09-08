import React, { Component } from 'react'

export class Chapter extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h1>{this.props.chapterTitle}</h1>
                <h3>{this.props.chapterQuote}</h3>
                <h5>{this.props.authorQuote}</h5>
                <a href="#1.1">1.1</a>
                <br></br>
                <a href="#1.2">1.2</a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5><a id="1.1"></a><p>kek</p></h5>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5><a id="1.2"></a>Example headline 2</h5>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </React.Fragment >
        )
    }
}

export default Chapter
