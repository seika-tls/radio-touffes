import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      document.querySelector('body').classList.forEach(className => {
        document.querySelector('body').classList.remove(className)
      })
      return <div className="container-fluid">
        <h1>Une erreur s'est produite.</h1>
      </div>
    }
    return this.props.children
  }
}
