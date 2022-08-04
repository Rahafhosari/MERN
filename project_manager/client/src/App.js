import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import HomePage from './components/HomePage';
import NewProject from './components/NewProject';
import { BrowserRouter as Router, Route, Link as RouterLink, HashRouter, Routes } from 'react-router-dom'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      projects: [
        { _id: '1', title: 'take aws course', dueDate: new Date(2020, 3, 11), stage: 1 },
        { _id: '2', title: 'Build portfolio', dueDate: new Date(2020, 2, 22), stage: 2 },
        { _id: '3', title: 'Python project', dueDate: new Date(2020, 3, 1), stage: 3 },
        { _id: '4', title: 'My future task', dueDate: new Date(2023, 3, 1), stage: 1 },
        { _id: '5', title: 'My future task2', dueDate: new Date(2023, 4, 1), stage: 1 },
        { _id: '6', title: 'My future task3', dueDate: new Date(2023, 5, 1), stage: 1 }]
    }
  }

  addNewProject = (project) => {
    let newList = [...this.state.projects]
    newList.push(project)
    this.setState({
      projects: newList
    })
  }

  changeStage = (_id, stage) => {
    let newList = [...this.state.projects]
    const index = newList.findIndex((p) => p._id == _id)
    newList[index].stage = stage
    this.setState({
      projects: newList
    })
  }

  deleteProject = (_id) => {
    const index = this.state.projects.findIndex((p) => p._id == _id)
    const newList = [...this.state.projects]
    // console.log('project list:')
    // console.log(newList)
    // console.log('index of _id:'+_id)
    // console.log(index)
    newList.splice(index, 1)
    this.setState({
      projects: newList
    })
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>Project Manager</h1>
        </div>
        <div className='content'>
          <Router>
            <Routes>
              <Route path="/" exact element={<HomePage projects={this.state.projects} changeStage={this.changeStage} deleteProject={this.deleteProject}></HomePage>} />
              <Route path="/projects/new" exact element={<NewProject addNewProject={this.addNewProject}></NewProject>} />
            </Routes>
          </Router>
          {/* <HomePage projects={this.state.projects} changeStage={this.changeStage} deleteProject={this.deleteProject}></HomePage> */}
          {/* <NewProject addNewProject={this.addNewProject}></NewProject> */}
        </div>
      </div>
    );
  }
}
