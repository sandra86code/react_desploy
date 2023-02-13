import React from 'react'

// export const GifGridItem = (img) => {
//     return (
//         <div className='card' >
//             <img src={img.url} alt={img.title} />
//             <p>{img.title}</p>
//         </div>
//     )
// }


export const GifGridItem = ({id,title,url}) => {
    
    return (
        <div className='card' >
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

