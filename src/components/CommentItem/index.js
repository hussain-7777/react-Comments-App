// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, comment, isLiked, date, initialBackground} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const deleteImageUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-con">
      <div className="comment-con1">
        <div className={`initial-con ${initialBackground}`}>
          <p className="initial">{initial}</p>
        </div>
        <div className="comment-con2">
          <p>
            {name}
            <span className="postedTime">{postedTime}</span>
          </p>
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-delete-con">
        <div>
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button type="button" className={likeClassName} onClick={onClickLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-comment"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img src={deleteImageUrl} className="delete-image" alt="delete" />
        </button>
      </div>
      <hr className="hr-line" />
    </li>
  )
}

export default CommentItem
