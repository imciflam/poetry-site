import React, { Component } from 'react'
import PoemItem from "./PoemItem"
export class Poems extends Component {
    render() {
        return this.props.poems.map((poem) =>
            (
                <PoemItem poem={poem} />
            ));
    }
}

export default Poems
