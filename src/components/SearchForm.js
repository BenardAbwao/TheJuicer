import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { cocktailInput,setCocktailInput } = useGlobalContext()

  const handleChange = (e) => {
    e.preventDefault()
    setCocktailInput(e.target.value)

  }
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Find your tasty drink</label>
          <input type="text" id="name" name="name" value={cocktailInput} onChange={handleChange}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm