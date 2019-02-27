import React from 'react';

export default class ArticleListItem extends React.Component {
    render(){
        return (
        <article className='post'>
            <div className='post-preview col-xs-10 no-gutter'>
            
            <h2><a href='/hello-world/'> Hello World </a> </h2>

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at felis risus. Orci varius natoque. </p>

            <p className='meta'>
                <img src='/ariana.jpg' alt="Ariana Davis"/>
                <a href='/author/ariana_davis/'> Ariana Davis </a>
                <i className='link-spacer'></i>
                <time className='post-date' dateTime='2015-10-04'> Nov 2015 </time>
            </p>
            </div>
        </article>

        )
    }
} 