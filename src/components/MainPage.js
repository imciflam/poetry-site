import React, { Component } from 'react'
import Background from "../images/bg.jpg"


const styles = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    minHeight: "100vh",
    padding: "0",
    margin: "0"
}
export class MainPage extends Component {

    render() {
        return (
            <div>
                <div className="App-header" style={styles}>
                    <p>
                        Сборник стихотворений.
                   </p>
                    <p>
                        Автор: Алекс М.
                   </p>
                    <p>
                        Умом, сердцем и душой.
                   </p>
                </div>
                <footer style={{ backgroundColor: `#263333`, margin: `0` }}>
                    <p style={{ margin: `0`, padding: `1% 0` }}>Автор: alex_mta@mail.ru</p>
                </footer>
            </div >
        )
    }
}

export default MainPage
