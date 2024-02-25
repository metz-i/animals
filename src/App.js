import React, { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
            {renderedAnimals}
        </div>
    );
}

export default App;





//import AnimalShow from './AnimalShow';
//
//function getRandomAnimal() {
//    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
//    return animals[Math.floor(Math.random() * animals.length)];
//}
//
//
//
//function App() {
//    const handleClick = () => {
//        setAnimals([...animals, getRandomAnimal()]);
//     } ``
//
//     const renderedAnimals = animals.map((animal, index) => {
//        return <AnimalShow type={animal} key={index} />
//     })
////
//    return (<div>
//        <button onClick={handleClick}>Add animal</button>
//        <div>{animals}</div>
//    </div>
//    );
//    };
//
//
//export default App;

//function App() {
    // const [animals, setAnimals] = useState([])

    // function makeArray() {
    //     return [1, 10, 32, 40];
    // }

    // const myArray = makeArray();
    // const firstElement = myArray[0];
    // const secondElement = myArray[1];
    //const[firstElement, secondElement] = makeArray()
    //console.log(firstElement, secondElement);

    // const [count, setCount] = useState([]);
   //  const [value, setValue] = useState(0);

    // console.log(useState(50));