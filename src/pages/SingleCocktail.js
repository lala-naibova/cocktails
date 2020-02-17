import React from "react";
import {useParams, Link} from 'react-router-dom'
export default function SingleCocktail() {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(()=>{
    setLoading(true);
    async function getCurrDrink(){
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {strDrink:name, 
            strAlcoholic:info,
            strDrinkThumb:image, 
            strCategory:category, 
            strGlass:glass,
          strInstructions :instruction,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = data.drinks[0];
        const ingredients =[strIngredient1,strIngredient2, strIngredient3, strIngredient4, strIngredient5];

        const newCocktail = {name,info,image,category, glass, instruction, ingredients}

          setCocktail(newCocktail);
        }
        else{
          setCocktail(null)
        }
      } catch (error) {
        
      }
      setLoading(false);
      
    }
    getCurrDrink();
    
  },[id])
  if (loading) {
    return <h2 className='section-title'>Loading...</h2>
  }
  if(!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  else{
    const {name,info,image,category, glass, instruction, ingredients} = cocktail;

    return <section className='section cocktail-section'>
<Link to='/' className='btn btn-primary'>back home</Link>
<h2 className='section-title'>{name}</h2>
<div className='drink'>
<img src={image} alt={name}/>
<div className='drink-info'>
<p>name : {name}</p>
<p>category : {category}</p>
<p>info : {info}</p>
<p>glass : {glass}</p>
<p>instruction : {instruction}</p>
<p>ingredients : {ingredients.join(',')}</p>
</div>
</div>
    </section>
  }
  
}
