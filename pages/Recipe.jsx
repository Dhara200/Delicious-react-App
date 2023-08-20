import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const Recipe = () => {

  let params = useParams();
const [details, setDetails ] = useState({})
const[activetab, setActivetab] = useState('instructions')
  const fetchdata = async()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=d320ff2db68d4298b0aaf1bd07a3c8d1`)
    const datas = await data.json();
    console.log(datas)
    setDetails(datas)
    
  }

  useEffect(()=>{
    fetchdata()
  },[params.name])

  return (
    <Details>
     
     <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="{details.title}" />
     </div>
     <Info>
    <Button 
    className={activetab === 'instructions' ? 'active' : ''}
     onClick = {()=> setActivetab('instructions')}>
      Instructions
    </Button>
    <Button className={activetab === ' ingredients' ? 'active' : ''} 
    onClick = {()=> setActivetab('ingredients')}>
      Ingredients
    </Button>

    {activetab === 'instructions' && (

<div>
<h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
<h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
</div>
    )}


{activetab === 'ingredients' && (
  <ul>
      {details.extendedIngredients.map((ingredient)=>(
      <li key = {ingredient.id}>{ingredient.original}</li>
      
      ))}
    </ul> 


)}  
   
     </Info>
    </Details>
  )
}

const Details = styled.div`
margin-top :10rem;
margin-bottom:5rem;
display:flex;

.active{
  background:linear-gradient(35deg, #494949, #313131);
  color:white;
}
h2{
  margin-bottom:2rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  margin-top:2rem;
}
`


const Button = styled.button`
  padding:1rem 2rem;
  color:#313131;
  border: 2px solid black;
  margin-right:2rem;
  font-weight:600;

`
const Info = styled.div`
margin-left:10rem;
`

export default Recipe

  