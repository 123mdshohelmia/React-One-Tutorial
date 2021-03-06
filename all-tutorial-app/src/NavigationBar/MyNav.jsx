import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MyNav extends Component {
  render() {
    return (
      <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
      </>
    )
  }
}
