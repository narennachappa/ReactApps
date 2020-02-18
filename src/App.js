import React, { Component } from "react";
import { Provider } from "react-redux";

import Posts from "./Components/Posts";
import PostForm from "./Components/Postform";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
