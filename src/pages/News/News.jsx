import React from 'react';
import { useLocation } from 'react-router-dom';

const News = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <h2>this is news page{location.pathname}</h2>
        </div>
    );
};

export default News;