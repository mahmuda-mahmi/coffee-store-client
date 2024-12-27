import React, { useState } from 'react';
import CoffeeCard from './CoffeeCard';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const loadedCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffee);

    return (
        <>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto my-20'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div >
        </>
    );
};

export default Home;