import React, { Component } from 'react';
import Header from './components/Header';
import './app.css';
import NewBlog from './components/NewBlog';
import BlogPreview from './components/BlogPreview';
import BlogPage from './components/BlogPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <NewBlog />
      <BlogPreview />
      <BlogPage />
      </div>
    );
  }
}

export default App;
