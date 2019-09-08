import React, { Component } from 'react'

export class PoemItem extends Component {
    //str.split('').join(',');

    render() {
        console.log(this.props.poem.poemText.length)
        return (
            <React.Fragment>
                <h5><a id={this.props.poem.poemKey}><p>{this.props.poem.poemTitle}</p></a></h5>
                <span style={{ whiteSpace: "pre-line" }}>{this.props.poem.poemText}</span>
                <hr style={{ padding: 0 }} />
            </React.Fragment>
        )
    }
}

export default PoemItem