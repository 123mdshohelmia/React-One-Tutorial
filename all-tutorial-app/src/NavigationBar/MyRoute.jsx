import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

export default class Myroute extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
      </>
    )
  }
}
