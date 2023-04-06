// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetItem={eachItem} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
