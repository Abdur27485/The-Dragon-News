import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:27485/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.log(error)
            })
    }, [])
    console.log(categories)
    return (
        <div>
            <h4>All Category</h4>
            <div className='fw-bold text-center'>
                {
                    categories.map(item => {
                        return <Link to={`/category/${item.id}`} key={item.id} className='text-decoration-none text-black py-3 m-0 mb-1 bg-secondary-subtle d-block'>{item.name}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default LeftNav;