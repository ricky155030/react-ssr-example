import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Page from '../Page'

const Link = styled.span`
  cursor: pointer;
  color: blue;
`

class CounterContainer extends Component {
  render() {
    const {
      count
    } = this.props

    return (
      <Page title="Counter">
        Counter: { count }
        <br />
        <Link onClick={this.props.increase}>Increase</Link>
        <br />
        <Link onClick={this.props.decrease}>Decrease</Link>
        <br />
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count
})

const mapDispatchToAction = dispatch => {
  return {
    increase: () => dispatch({ type: 'INCREMENT' }),
    decrease: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToAction)(CounterContainer)
