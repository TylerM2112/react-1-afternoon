import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            animals: [{
                type: "dog",
                feet: 4,
                noise: "bark",
            }, {
                type: "bird",
                wings: true,
                noise: "chirp",
            }, {
                type: "cat",
                noise: "meow",
                food: "tuna",
                feet: 4,
            }],
            userInput: "",
            filteredAnimals: [],

        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterAnimals(prop) {
        let animals = this.state.animals;
        let filteredAnimals = [];

        for (let i = 0; i < animals.length; i++) {
            if (animals[i].hasOwnProperty(prop)) {
                filteredAnimals.push(animals[i]);
            }
        }
        this.setState({ filteredAnimals: filteredAnimals });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.animals, null, 10)}</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterAnimals(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredAnimals, null, 10)}</span>
            </div>
        )
    }
}
export default FilterObject;