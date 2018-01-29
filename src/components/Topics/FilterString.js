import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            animals: ["Cat", "Polar Bear", "Aligator", "Zebra", "Penguin", "Snake"],
            userInput: "",
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterString(userInput) {
        let animals = this.state.animals;
        let filteredArray = animals.filter(animal => animal.includes(userInput));
        this.setState({ filteredArray: filteredArray })
    };
    
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.animals, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Results: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}
export default FilterString;