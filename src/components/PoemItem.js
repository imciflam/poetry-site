import React, { Component } from 'react'

export class PoemItem extends Component {
    //str.split('').join(',');

    render() {
        console.log(this.props.poem.poemText.length)
        return (
            <React.Fragment>
                <h3><a id={this.props.poem.poemKey}><p>{this.props.poem.poemTitle}</p></a></h3>
                <span style={{ whiteSpace: "pre-line" }}>{this.props.poem.poemText}</span>
                <hr />
            </React.Fragment>
        )
    }
}

export default PoemItem