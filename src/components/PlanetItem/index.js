// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem
  return (
    <div className="list-item">
      <img src={imageUrl} alt={`planet ${name}`} className="img" />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
