import React from 'react'


type Props = {
  promise: Promise<News[]>
}
const NewsCard = async ({ promise }: Props) => {
  const posts = await promise

  const content = posts ? posts?.map((post, i) => {
    return (
      <div key={i} className="card-container"
      style={{
        width: "50%",
        border: "solid 3px #d3d3d3",
        margin: "10px auto"
      }} >
        <article >
          <h2>Titel: {post.label}</h2>
          <h3>Category: {post.key}</h3>
          <h6>Date: {post.updatedAt.length > 10 ? post.updatedAt.substring(0, 10) : post.updatedAt}</h6>
        </article>
      </div>
    )
  }) : null
  return content;
}

export default NewsCard;