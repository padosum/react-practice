import React from 'react'
import { Spinner } from '../../components/Spinner'
import { useGetPostQuery } from '../api/apiSlice'

import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  let content
  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <br />
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    )
  }

  return <section>{content}</section>
}

export default SinglePostPage
