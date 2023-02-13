import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const {data, loading}  = useFetchGifs(category);


    // useEffect( ()=>{
    //     getGifs(category)
    //     .then((gifs) => setImages(gifs))
    // },[])

    // const getGifs = async () => {

    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=jc97OEt33W0eXvGQ9OxkdxT2F8WDnzXq&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=es`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })
    //     setImages(gifs)
    //     console.log(gifs)

        
        
    // }
         
    
    // getGifs()
        

    return (
        <>
            <h3> {category} </h3>
            { loading && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> }
            <div className='card-grid'>
                                {
                    data.map((img) =>
                        <GifGridItem
                                    key={img.id}
                                    //img={img}
                                    {...img}/>
                    )
                }
                
            </div>
        </>

    )
}