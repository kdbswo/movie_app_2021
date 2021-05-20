import React from "react";
import PropTypes from 'prop-types';


const foodILike = [
  {
    id:1,
    name: "kimchi",
    image:"https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5
  },
  {
    id:2,
    name: "bulgogi",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg"
    ,rating: 4.8
  },
  {
    id:3,
    name: "kimbap",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/10/168d255254103ff54861098af10adfae1.jpg"
    ,rating: 4.5
  },
  {
    id:4,
    name: "kimchijjigae",
    image:"http://www.chungjungone.com/knowhow/images/blog/ezr/ker30/1.jpg"
    ,rating: 4.3
  }
]


function Food({ name, picture, rating }) {
    return (
        <div>
          <h2>I like {name}</h2>
          <h4>{rating}/5.0</h4>
          <img src={picture} alt={name} />
        </div>
    );
}
  
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


function App() {
  return (
    <div>
      {foodILike.map(dish => (
         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}      
    </div>
  );
}

export default App;
