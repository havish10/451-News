import request from 'superagent'

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
        <div style={{}}>
          <div
            style={{
              maxWidth: '800px',
              margin: 'auto',
            }}
          >
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
              `}
            </style>
            <b>
              <p
                style={{
                  fontFamily: 'Roboto',
                  color: 'grey',
                }}
              >
                <img
                  style={{ verticalAlign: 'middle' }}
                  alt="Logo"
                  src={`//${this.props.outline.data.domain}/favicon.ico`}
                />{' '}
                {this.props.outline.data.site_name} ❯
              </p>
            </b>
            <h1>{this.props.outline.data.title}</h1>
            <p style={{ fontFamily: 'Roboto', textTransform: 'uppercase' }}>
              <b>
                {this.props.outline.data.author}{' '}
                <span style={{ color: 'grey' }}>
                  — {this.props.outline.data.date}
                </span>
              </b>
            </p>

            <div
              dangerouslySetInnerHTML={{
                __html: this.props.outline.data.html,
              }}
            />
          </div>
        </div>
      </>
    )
  }
}
