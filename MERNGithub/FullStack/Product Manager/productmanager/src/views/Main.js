//after doing the PersonFrom.js 

import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))       
    }, []);
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}

// import React, { useEffect, useState } from 'react';
// import ProductForm from '../components/ProductForm';
// import PersonList from '../components/PersonList';

// export default () => {
//     const [product, setProduct] = useState([]);
//     const [loaded, setLoaded] = useState(false);
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/people')
//             .then(res=>{
//                 setProduct(res.data);
//                 setLoaded(true);
//             });
//     },[])
//     const removeFromDom = productId => {
//         setPeople(product.filter(product => product._id != productId));
//     }
//     return (
//         <div>
//             <ProductForm/>
//         <hr/>
//             {/* {loaded && <ProductList product={product} removeFromDom={removeFromDom} />} */}
//         </div>
//     )
// }