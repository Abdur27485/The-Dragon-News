import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitleState from '../../../hooks/UseTitleState';

const Category = () => {
    const data = useLoaderData();
    useTitleState('Category')
    return (
        <div>
            {
                data.map( news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;