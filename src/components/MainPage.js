import React, { Component } from 'react'
import Background from "../images/bg.jpg"


const styles = {
    bg: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        minHeight: "100vh",
        padding: "0",
        margin: "0",
    },
    footer:
    {
        backgroundColor: `#263333`,
        margin: `0`,
    },
    text:
    {
        margin: `0`, padding: `1% 0`,
    }
}
export class MainPage extends Component {

    render() {
        return (
            <div>
                <div className="App-header" style={styles.bg}>
                    <div style={styles.mainText}>
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
                </div>
                <footer style={styles.footer}>
                    <p style={styles.text}>Автор: alex_mta@mail.ru</p>
                </footer>
            </div >
        )
    }
}

export default MainPage
