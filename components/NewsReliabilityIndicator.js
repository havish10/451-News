import MDSpinner from 'react-md-spinner'

export default class extends React.Component {
  state = {}

  render() {
    return (
      <span style={{ fontFamily: 'Roboto' }}>
        <b style={{ color: 'orange' }}>ANALYZING</b>
        <br />
        <MDSpinner size={18} />
      </span>
    )
  }
}
