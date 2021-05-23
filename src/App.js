import React from "react";
import PropTypes from 'prop-types';




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
