import React, { Component } from 'react'

export class PoemItem extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h3><a id={this.props.poem.poemKey}><p>{this.props.poem.poemTitle}</p></a></h3>
                <span style={{ whiteSpace: "pre-line" }}>{this.props.poem.poemText}</span>
                {this.props.poem.picture ? <img src={this.props.poem.picture} /> : ""}
                <hr />
            </React.Fragment>
        )
    }
}

export default PoemItem