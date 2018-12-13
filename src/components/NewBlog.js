import React, { Component } from "react";
import firebase from 'firebase';

class NewBlog extends Component {
  constructor(){
    super();
    this.state={
      blogTitle: '',
      blogSections: [],
      blogSubtitle: '',
      blogContent: '',
      headerPic: '',
      previewPic: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    return <section className="newBlog">
        <h2>New blog post form</h2>
        <div className="newBlog__form">
          <form action="#">

            <div className="newBlog__title">
              <label htmlFor="blogTitle">Blog Title:</label>
              <input onChange={this.handleChange} value={this.state.blogTitle} type="text" id="blogTitle" />
            </div>

            <div className="newBlog__content">
              <div className="newBlog__subtitle">
                <label htmlFor="blogSubtitle">Subtitle:</label>
              <input onChange={this.handleChange} value={this.state.blogSubtitle} type="text" id="blogSubtitle"/>
              </div>
              <label htmlFor="blogContent">Content:</label>
              <textarea onChange={this.handleChange} value={this.state.blogContent} id="blogContent" name="blogContent" style={{ resize: "none" }} id="blogContent" cols="30" rows="10" />
              <button>New Section</button>
            </div>


            <div className="newBlog__pictureInputs">
              <div className="newBlog__headerPic">
                <label htmlFor="headerPic">Upload Header Photo:</label>
              <input onChange={this.handleChange} value={this.state.headerPic} type="file" id="headerPic" accept="image/*" />
              </div>
              <div className="newBlog__previewPic">
                <label htmlFor="previewPic">Upload Preview Photo:</label>
              <input onChange={this.handleChange} value={this.state.previewPic} type="file" id="previewPic" accept="image/*" />
              </div>
            </div>
          </form>
        </div>
      </section>;
  }
}

export default NewBlog;
