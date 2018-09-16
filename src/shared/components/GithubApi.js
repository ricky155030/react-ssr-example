import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from '../Page'

class GithubApi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    try {
      const data = await fetch('https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories')
        .then(d => d.json())
        .then(d => d.items)

      this.setState({
        data,
        loading: false
      })
    } catch(e) {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const {
      data,
      loading
    } = this.state

    if(loading) {
      return <span>Loading</span>
    }

    return (
      <Page title="Github API Test">
      {
        data.map(d => (
          <div key={d.id}>
            <span>{ d.full_name }</span>
            <br />
          </div>
        ))
      }
      </Page>
    )
  }
}

export default GithubApi
