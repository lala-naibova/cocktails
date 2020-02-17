import React from "react";

export default function SearchForm({setSearchTerm}) {
  return <section className='section'>
    <h1 className='section-title'>search cocktails</h1>
    <div className='form'> 
    <form className='search-form'>
      <div className='form-control'>
      <label htmlFor='cocktail' className=''>search your favorite cocktail</label>
      <input type='text' id='cocktail' onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      </div>
      
    </form>
    </div>
    
    </section>;
}
