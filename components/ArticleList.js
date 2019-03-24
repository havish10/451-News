import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'
import Link from 'next/link'
import FadeIn from 'react-fade-in'

import url from 'url'

export default props => (
  <div style={{ margin: '100px auto', maxWidth: '800px' }}>
    <Paper>
      <Table>
        <TableBody>
          <FadeIn delay={100} transitionDuration={800}>
            {props.news.articles.map(x => (
              <TableRow style={{ width: '100%' }}>
                <TableCell
                  // fml
                  style={{ width: '100000px' }}
                  component="th"
                  scope="row"
                >
                  <img
                    src={x.urlToImage}
                    style={{
                      float: 'right',
                      width: '100px',
                      borderRadius: '2px',
                      margin: '20px',
                    }}
                  />
                  <Link
                    href={{ pathname: '/viewarticle', query: { url: x.url } }}
                    prefetch
                    key={x.url}
                  >
                    <span>
                      <h2>{x.title}</h2>
                      <style jsx>
                        {`
                          h2:hover {
                            text-decoration: underline;
                            cursor: pointer;
                          }
                        `}
                      </style>
                    </span>
                  </Link>
                  <img
                    src={`//${url.parse(x.url).hostname}/favicon.ico`}
                    style={{ width: '16px', height: '16px' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </FadeIn>
        </TableBody>
      </Table>
    </Paper>
  </div>
)
