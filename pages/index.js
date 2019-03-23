import Link from 'next/link'
import { parse } from 'node-html-parser'

const request = require('superagent')

export default class Index extends React.Component {
  request = async () => {
    const res = await request.get(
      'https://outlineapi.com/v3/parse_article?source_url=https://www.reuters.com/article/us-usa-trump-russia/trump-russia-report-handed-in-u-s-lawmakers-seek-rapid-release-idUSKCN1R4059',
    )

    console.log(res.body.data.html)
    const root = parse(res.body.data.html)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.request()}>CliCK MEE!</button>
        <p />
      </div>
    )
  }
}
