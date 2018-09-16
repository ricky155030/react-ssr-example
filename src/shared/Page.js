import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

const Page = props => {
  return (
    <div>
      <Helmet
        title={props.title}
      />
      { props.children }
    </div>
  )
}

export default Page
