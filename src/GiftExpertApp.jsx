import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategori = ( newCategory ) => {

      if( categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories]);
      
      //setCategories([...categories, 'Valorant']);
    };

  return (
    <>
        {/* titulo */}
        <h1>GiftExpertApp</h1>

        {/* Input */}
        <AddCategory 
        //setCategories={ setCategories }
        onNewCategory={ (event) => onAddCategori(event) }
        />

        {/* Listado de Gif */}
            { categories.map( category => (
                  <GifGrid 
                    key={category}
                    category={category}/>
              )) 
            }

    </>
  )
}
