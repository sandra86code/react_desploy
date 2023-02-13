import React, {useState} from 'react'; 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifApp = () => {


    const [categories, setCategories] = useState(['Honda', 'Kawasaki', 'Yamaha']);

    const addCategory = () =>{
        
        // categories.push('Suzuki');
        setCategories([...categories, 'Suzuki']);
    }

    const deleteLastCategory = () =>{
        
        categories.splice(-1);
        setCategories([...categories]);
    }

    const deleteFirstCategory = () =>{
        
        categories.shift();
        setCategories([...categories]);
    }

    return (
        <>
            <h2>GifApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            key = {category}
                            category={category} />
                    )
                }
            </ol>
            {/* <button onClick={addCategory}>Añadir categoría</button>
            <button onClick={deleteFirstCategory}>Eliminar primera categoría</button>
            <button onClick={deleteLastCategory}>Eliminar última categoría</button> */}
        </>
    )

    
}


export default GifApp;