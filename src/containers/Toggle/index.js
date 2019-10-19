import React, { Component } from 'react'
import { ToggleComponent } from '../../components'

class Toggle extends Component {
  constructor () {
    super()
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (checked) {
    this.setState({ checked })
  }

  render () {
    return (
      <ToggleComponent
        onChange={this.handleChange}
        checked={this.state.checked}
      />
    )
  }
}

export { Toggle }
