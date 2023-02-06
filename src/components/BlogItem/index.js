// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details
  return (
    <li>
      <Link to={`/blogs/${id}`}>
        <div>
          <h1>{title}</h1>
          <div className="name">
            <img className="avt" src={avatarUrl} alt={`avatar${id}`} />
            <p>{author}</p>
          </div>
          <img className="img" src={imageUrl} alt={`item${id}`} />
          <p>{topic}</p>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
