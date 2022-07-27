import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail}) => {
  const { idDrink, strDrink, strDrinkThumb } = cocktail

  return (
<article className="cocktail">
  <div className="img-container">
    <img src={strDrinkThumb} alt={strDrink} />
  </div>
  <div className="cocktail-footer">
    <h3>{strDrink}</h3>
    <Link className='btn btn-primary btn-details' to={'/cocktail/'+idDrink}>Details</Link> <br/>
    <Link className='btn btn-primary btn-order' to={'/order/'}>Order Now</Link>
  </div>
</article>
  )
  }
export default Cocktail