"use client";
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import BadgeFilter from '@/components/ui/badge-filter';



  const getRecipes = async () => {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
   return data.recipes;
 
    
  }

async function HomePage(){
const recipes = await getRecipes();



  return (
    <div className='xl:px-24 px-10'>
      <div className='my-12'>
      <BadgeFilter />
     <div className='grid grid-cols-1 md:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10
     gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40'>
     {recipes.map((recipe,index)=>(
      <Card key={`${recipe.name}-${index}`}
      className='flex flex-col bg-orange-50
      hover:scale-105 ease-in duration-200
      xl:min-h-[600px] fancyGradient'
      >
  <CardHeader><img src={recipe.image} 
  alt={recipe.name}
   width={500} 
   height={500}
   className='bg-cover rounded-md shadow-xl'
   />

   </CardHeader>
  <CardContent className='flex-1 flex flex-col items-center justify-center'>
    <CardTitle className='uppercase lg:text-3xl
    relative font-bold line-clamp-2 text-center'>
    {recipe.name}
    </CardTitle>
    </CardContent>
    <CardFooter className='flex justify-around items-center w-full'>
      <div className='flex flex-col items-center'>
        <p className='text-lg text-center'>Serves</p>
        <p className='text-gray-800 text-center'>{recipe.servings}</p>

      </div>
      <div className='flex flex-col items-center'>
        <p className='text-lg text-center'>Prep Time</p>
        <p className='text-gray-800 text-center'>{recipe.prepTimeMinutes} MIN</p>
      </div>

      <div className='flex flex-col items-center'>
        <p className='text-lg text-center'>Cook Time</p>
        <p className='text-gray-800 text-center'>{recipe.cookTimeMinutes}</p>

      </div>
 
  </CardFooter>
</Card>

     ))}
     </div>
     </div>
    </div>
  );
}

export default HomePage;
