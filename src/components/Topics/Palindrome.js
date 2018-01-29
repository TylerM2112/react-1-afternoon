import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: "",
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }
    palindromeCheck(userInput) {
        if (userInput === userInput.split("").reverse().join("")) {
            this.setState({ palindrome: true });
        } else {
            this.setState({palindrome: false})
         }
     }

render(){
    return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.palindromeCheck(this.state.userInput)}>Check</button>
            <span className="resultsBox">Result: {JSON.stringify(this.state.palindrome)}</span>
        </div>
    )
}
}
export default Palindrome;