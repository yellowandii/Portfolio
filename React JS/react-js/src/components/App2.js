import React from "react"


class App2 extends React.Component {
    render () {
        return (
            <div>
            <h1 onMouseEnter={this.mouseOver}>Some Text</h1>
            </div>
        )
    }

    mouseOver() {console.log('from App2')}
}

export default App2

