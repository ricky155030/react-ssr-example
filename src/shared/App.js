import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CounterContainer from './containers/CounterContainer'
import GithubApi from './components/GithubApi'

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/" style={{ marginRight: '50px' }}>Counter</Link>
        <Link to="/git">Main</Link>

        <hr />

        <Route path="/" exact render={props => (<CounterContainer {...props} />)} />
        <Route path="/git" render={props => (<GithubApi {...props} />)} />
      </div>
    )
  }
}

export default App
