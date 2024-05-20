"use client";
import React, { useState } from 'react'
import { Badge } from './badge';



function BadgeFilter() {

  const [badge, setBadge] = useState('');

  const cuisines: Array<string> = [
    'All',
    'Asian',
    'Greek',
    'Italian',
    'Indian',
    'Japanese',
    'Mediterranean',
    'Mexican',
    'Pakistani',
    'Turkish'
  ];

const handleOnClick = (
e: React.ChangeEvent<HTMLInputElement>,
cuisine:string
)=>{
e.preventDefault();
setBadge(cuisine);
};
  return (
    <div>
      {cuisines.map((cuisine, index) => (
        <Badge 
          key={`${cuisine}-${index}`}
          variant={'outline'}
          className='border border-black text-gray-900 
        text-lg inline-block mx-2 my-1 hover:cursor-pointer
        px-4
       bg-orange-50 hover:scale-110 ease-in duration-200 rounded-full'
       onClick={(e) => handleOnClick(e,cuisine)}
        >
          {cuisine}
        </Badge>
      ))}
    </div>
  )
}

export default BadgeFilter
