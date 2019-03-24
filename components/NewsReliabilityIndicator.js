import MDSpinner from 'react-md-spinner'
import request from 'superagent'

export default class extends React.Component {
  state = {}

  async componentDidMount() {
    const ml = await request
      .get(
        'https://cors-anywhere.herokuapp.com/https://fake-news-api.now.sh/api',
      )
      .query({ text: this.props.html.slice(0, 1000) })
    this.setState({ ml, result: ml.text.slice(2, -2) })
  }

  render() {
    return (
      <b style={{ fontFamily: 'Roboto' }}>
        {this.state.ml ? (
          <span
            style={{ color: this.state.result === 'FAKE' ? 'red' : 'green' }}
          >
            {this.state.result === 'FAKE' ? 'Unreliable' : 'Reliable'}
          </span>
        ) : (
          <>
            <span style={{ color: 'orange' }}>Analyzing</span>&nbsp;
            <MDSpinner size={18} />
          </>
        )}
      </b>
    )
  }
}
