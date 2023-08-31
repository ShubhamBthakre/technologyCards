// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  const containerClassName = `card-container ${className}`

  return (
    <li className={containerClassName} key={containerClassName}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="img" alt={title} />
    </li>
  )
}

export default Card
