import React, { Component } from 'react'
import { Octokit } from '@octokit/rest'
import { Popover } from 'bootstrap/dist/js/bootstrap'
import Package from '../package.json'

export class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      version: `v${Package.version}`,
      upToDate: true
    }
  }

  componentDidMount () {
    (new Octokit()).repos
      .getLatestRelease({
        owner: 'seika-tls',
        repo: 'radio-touffes'
      })
      .then(({ data }) => {
        if (data.tag_name > this.state.version) {
          console.warn(`Your app version is not up-to-date!`)
          this.setState({upToDate: false})
        }
      })

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    popoverTriggerList.forEach(popoverTriggerEl => new Popover(popoverTriggerEl, {
      html: true,
      container: 'body'
    }))
  }

  render () {
    return (
      <footer className='text-center'>
        <p className='mt-1 mb-0 pb-2'>
          <small>
            <>Based on <a href='https://github.com/TrAsKiN/owl-buvette' target='_blank' rel='noreferrer'>OWL Buvette</a></>
            <> &middot; </>
            <span id='version' className='position-relative'>{this.state.upToDate || <i className='bi bi-exclamation text-warning text-opacity-50 position-absolute start-0 translate-middle' style={{top: 30+'%'}}></i>}{this.state.version}</span>
          </small>
        </p>
      </footer>
    )
  }
}
