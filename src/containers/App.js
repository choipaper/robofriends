import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';  //aren't default, have to destructure
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


/*PROPS = simply things come out of STATE
  STATE = simply obj, able to change value of input
  STATE >> PROPS
*/

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        //console.log(event.target.value);

        //console.log(filteredRobots);
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?    //robots.length (if robots.length===0 false -> change it to true with !)
            <h1 className='tc'>Loading...</h1> :
            (
                <div className='tc' >
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            {/*if anything happens under (the ErrorBoundary), ErrorBoundary will catch it*/}
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;