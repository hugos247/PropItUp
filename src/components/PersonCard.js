import React, { Component } from 'react';

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }

    }



    render() {
        const { firstName, lastName, hairColor }  = this.props;
        const age = this.state.age;
        return (
            <>
                <h1>{ `${ firstName }, ${ lastName }` }</h1>
                <p>{ `Age: ${ age }` }</p>
                <p>{ `Hair Color: ${ hairColor }` }</p>

                <button onClick={ () => this.setState( { age: age + 1 } ) }> Birthday button for { firstName } </button>
            </>
        )
    }

}

//Cosas que no funcionaron XD
        //let age = this.state.age;
        // const increase = function () {
        //     this.setState( {age: age + 1} )
        // }
        //const add = this.add = () => this.age + 1;


