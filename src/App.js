import React, { Component } from 'react';
import './index.css';
import ArticleList from './article/ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ArticleList />
        </header>
      </div>
    );
  }
}

export default App;
