import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Main from "./components/Main.js"
import Sidebar from "./components/Sidebar.js";
import Root from "./components/Root.js";
import SidebarItem from "./components/SidebarItem.js";
import Posts from "./components/Posts.js";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      posts: null
    }
  }

  componentDidMount() {
    this.getUsers();
    this.getPosts();
  }

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: users
        });
      })
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts: posts
        });
      })
  }

  render() {
    const {users} = this.state;
    const {posts} = this.state;
    return (
      <Router>
        <Root>
          <Sidebar>
            {users ? (
              users.map(user => (
                <SidebarItem key={user.id}>
                  <Link to={ `/u/${user.id}` }>
                    {user.name || '[no description]'}
                  </Link>
                </SidebarItem>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Sidebar>
          <Main>
            <Route exact={true} path="/" render={() => (
                <h1>Welcome</h1>
            )}/>
          {posts && (
          <Route path="/u/:userId" render={({match}) => (
              posts.map(p => (p.userId === +match.params.userId)
                && <Posts key={p.id} post={p} />
              )
            )} />
        )}
          </Main>
        </Root>
      </Router>
    );
  }
}

export default App;
