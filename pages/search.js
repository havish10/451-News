import request from 'superagent'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

import ArticleList from '../components/ArticleList'

export default class Index extends React.Component {
  static async getInitialProps(props) {
    const res = await request.get(`https://newsapi.org/v2/everything`).query({
      apiKey: '013e055c64384632b17a8924c642b377',
      q: props.query.q,
    })
    return { news: res.body, query: props.query }
  }

  render() {
    console.log(this.props.news)
    return (
      <div>
        <div>
          <ArticleList news={this.props.news} q={this.props.query.q} />
        </div>
      </div>
    )
  }
}
