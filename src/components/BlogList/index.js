// Write your JS code here
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    finalData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const returnedData = await fetch('https://apis.ccbp.in/blogs')
    const data = await returnedData.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({finalData: updatedData, isLoading: false})
  }

  render() {
    const {finalData, isLoading} = this.state
    return (
      <div className="cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          finalData.map(each => <BlogItem key={each.id} details={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
