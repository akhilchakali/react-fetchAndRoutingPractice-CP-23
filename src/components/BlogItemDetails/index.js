// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {finalData: {}, isLoading: true}

  componentDidMount() {
    this.onClickData()
  }

  onClickData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      topic: data.topic,
      author: data.author,
      content: data.content,
    }
    this.setState({finalData: updatedData, isLoading: false})
  }

  rendering = () => {
    const {finalData} = this.state
    const {title, author, imageUrl, avatarUrl, content, topic} = finalData
    return (
      <div className="cont">
        <h1>{title}</h1>
        <p>{author}</p>
        <img src={imageUrl} alt={title} />
        <img src={avatarUrl} alt={title} />
        <p>{content}</p>
        <p>{topic}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="cont">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.rendering()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
