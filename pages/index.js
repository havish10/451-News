import React from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'

import Router from 'next/router'
import Money from '@material-ui/icons/AttachMoney'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Movie from '@material-ui/icons/Movie'
import Tooltip from '@material-ui/core/Tooltip'
import Link from 'next/link'

export default class extends React.Component {
  search = e => {
    e.preventDefault()
    Router.push({
      pathname: '/search',
      query: {
        q: e.target.children[0].children[0].value,
      },
    })
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          /* bring your own prefixes */
          transform: 'translate(-50%, -50%)',
          width: '50%',
        }}
      >
        <Paper elevation={0}>
          <form onSubmit={e => this.search(e)}>
            <InputBase
              style={{
                marginLeft: 20,
                flex: 1,
                margin: 'au to',
                width: '90%',
                height: '42px',
                backgroundColor: '#f1f3f4',
                borderRadius: '25px',
                paddingLeft: '20px',
              }}
              innerRef={(...x) => {
                this.input = x
              }}
              placeholder="Search for News"
            />
          </form>
        </Paper>
      </div>
    )
  }
}
