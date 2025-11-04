import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={'David\'s Blog'}/>
      <ArticleList posts={blogData.posts} />
      <About image="https://images.freeimages.com/images/large-previews/34d/professional-man-at-computer-0410-5697233.jpg?fmt=webp&h=350" about="I am a beginner so be nice" />
    </div>
  );
};

export default App;
