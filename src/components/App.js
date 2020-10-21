import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state = {para : ""};
	};
	
	const handleClick = () => {
		this.setState({para : "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"});
	}

    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.handleClick}>Click</button>
					{this.state.para != "" ? <p id="para">{this.state.para}</p> : null}
    		</div>
    	);
    }
}


export default App;

