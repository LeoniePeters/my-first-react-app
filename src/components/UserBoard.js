import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  render() {
    return (
      <div>
        <h3>User Board</h3>
        <User name="Alice" />
        <User name="Leonie" />
        <User name="Kelley" />
        <User name="Mimi" /></div>
    )
  }
}
