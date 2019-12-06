import React, {Component} from 'react';
import './App.css';
import Blog from "./Containers/Blog/Blog";
import nanoid from 'nanoid';
import ToWatchList from "./Components /UI/ToWatchList/ToWatchList";

class App extends Component {

    state = {
        tasks: [],
        id: '',
        filmInput: '',
    };

    changeHandler = (e) => {
        this.setState({filmInput: e.target.value})
    };



    addTask = () => {
        if (this.state.filmInput === '') {
            alert('asassd')
        } else {
            const tasks = [...this.state.tasks];
            tasks.push({filmInput: this.state.filmInput, id: nanoid()});
            this.setState({tasks})
        }
    };

    removeTask = (id) => {
        const tasks = [...this.state.tasks];
        const taskIndex = tasks.findIndex(t => t.id === id);
        tasks.splice(taskIndex, 1);
        this.setState({tasks});
    };

    changeFilm = (value, id) => {
        const tasks = [...this.state.tasks];
        tasks[id].text = value.target.value;
        this.setState({tasks})
    };

    render() {
        return (
            <div className="App">
                <Blog add={this.addTask} changed={this.changeHandler}/>
                {this.state.tasks.map((task, index) => {
                    return <ToWatchList
                        changed={(e)=>this.changeHandler(e, index)}
                        value={task.filmInput}
                        changeFilm={this.changeFilm}
                        remove={() => this.removeTask(task.id)}
                    />
                })}
            </div>
        )
    }
}

export default App;
