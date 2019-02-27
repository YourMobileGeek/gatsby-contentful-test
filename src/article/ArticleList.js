import React from 'react';
import ArticleListItem from './ArticleListItem';
export default class ArticleList extends React.Component {
    render() {
        const articles = []
        for( let i=0; i < 6; i++ ) {
            articles.push(<ArticleListItem id={i} key={i} /> )
        }
        return ( 
            <div className='category-page-posts animated fadeIn'>
                <div className='animated fadeIn'> 
                    {articles}
                </div>
            </div>
        )
    }
}