import request from 'superagent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import FadeIn from 'react-fade-in'

export default class extends React.Component {
  static async getInitialProps({ query: { url } }) {
    const res = await request
      .get('https://outline-api.glitch.me/article')
      .query({ source_url: url })
    return { outline: res.body }
  }

  render() {
    console.log(this.props.outline)
    return (
      <>
        <div>
          <div
            style={{
              maxWidth: '800px',
              margin: '100px auto',
            }}
          >
            <Chip
              avatar={
                <Avatar
                  alt="logo"
                  src={`//${this.props.outline.data.domain}/favicon.ico`}
                />
              }
              label={this.props.outline.data.site_name}
            />
            <FadeIn delay={100} transitionDuration={800}>
              <style jsx global>
                {`
                  p {
                    font-family: 'Roboto Slab';
                    font-size: 18px;
                    text-align: justify;
                    line-height: 1.8;
                  }
                  h2 {
                    font-family: 'Roboto';
                  }
                  h1 {
                    font-family: 'Roboto';
                    font-size: 40px;
                  }
                  img {
                    max-width: 100%;
                  }
                  a,
                  ul {
                    display: none;
                  }
                  iframe {
                    width: 100%;
                    height: 450px;
                  }
                `}
              </style>

              <h1>{this.props.outline.data.title}</h1>
              <p style={{ fontFamily: 'Roboto', textTransform: 'uppercase' }}>
                <b>
                  {this.props.outline.data.author}{' '}
                  <span style={{ color: 'grey' }}>
                    — {this.props.outline.data.date}
                  </span>
                </b>
              </p>
              {Array.from(
                this.props.outline.data.html.match(/(<p>(.*)<\/p>)+/g),
              ).map(x => (
                <div
                  dangerouslySetInnerHTML={{
                    __html: x,
                  }}
                />
              ))}
            </FadeIn>
          </div>
        </div>
      </>
    )
  }
}
