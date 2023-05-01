import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const data = useLoaderData();
    return (
        <div>
            {
                data.map( news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;