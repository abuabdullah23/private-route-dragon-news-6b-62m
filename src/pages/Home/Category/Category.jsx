import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();
    console.log(categoryNews)
    return (
        <div>
            <div>
                { id && <h2>{categoryNews.length} news</h2>}
                {
                    categoryNews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;