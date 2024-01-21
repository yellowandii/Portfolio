import React from "react"
import Header from "./components/Header"


class App extends React.Component{   

    constructor(props) { 
        super(props)
        this.state = {
            helpText:  "Help Text",
            userData: "",
        }

        this.inputClick = this.inputClick.bind(this)
    }

    render () {
    return (
        <div>
            <Header title='ShapkaSayta'></Header>
            <input placeholder={this.state.helpText}  
            onChange={event => this.setState({ userData: event.target.value})}
            onMouseEnter={this.mouseEnter} onClick={this.inputClick}/>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
        </div>
    )
    }

    inputClick() {
        this.setState({helpText: 'Changed'})
        console.log('clicked')
    }
    mouseEnter() {console.log('mouse')}
}



export default App

