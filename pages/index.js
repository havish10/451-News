import { parse } from 'node-html-parser'
import Button from '@material-ui/core/Button'
import request from 'superagent'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await request.get(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=013e055c64384632b17a8924c642b377',
    )
    return { news: res.body }
  }

  render() {
    console.log(this.props.news)
    return (
      <div>
        {this.props.news.articles.map(x => (
          <Card style={{ maxWidth: 345, display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <h1>{x.title}</h1>
              </CardContent>
              <CardMedia
                style={{
                  backgroundRepeat: 'no-repeat',
                  height: '140px',
                  width: 151,
                }}
                image={x.urlToImage}
                title="Image"
              />
            </div>
          </Card>
        ))}
      </div>
    )
  }
}
