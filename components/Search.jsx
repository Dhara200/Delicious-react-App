import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const[input, setInput] = useState('');

    const navigate = useNavigate()

    const Submit = (e)=>{
        e.preventDefault();
        navigate('/searched/'+ input)
        setInput('');
    }
  return (
    <FORM onSubmit={Submit}>
        <div>
        <input type="text" value = {input}
        onChange={(e)=> setInput(e.target.value)}
        
        />
        <FaSearch />

        </div>
      
    </FORM>
  )
}
const FORM = styled.form`
margin:0rem 2rem;
position:relative;

div{

    width:100%;
    position:relative;
     
}

input{
    border:none;
    background:linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color:white;
    padding:1rem 3rem;
    border-radius:1rem;
    border:none;
    border-bottom:5px solid black;
    outline:none;
    width:100%;


}
svg{
    position:absolute;
    top:50%;
    left:0%;
    transform:translate(100%, -50%);
    color:white;
}
`
export default Search
