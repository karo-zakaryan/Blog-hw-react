import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PostArea from "./components/PostArea.js"
import Sidebar from "./components/Sidebar.js";
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
    const { users } = this.state;
    const { posts } = this.state;
    return (
      <Router>
        <main>
          <Sidebar>
            <Link className="user-item-link" to="/">
              <div className="home-page-sidebar">
                Home
            </div>
            </Link>
            {users ? (
              users.map(user => (
                <SidebarItem key={user.id}>
                  <Link className="user-item-link" to={`/u/${user.id}`}>
                    <div>
                      {user.name}
                    </div>
                    <div>{user.email}</div>
                    <div>
                      <em>Phone: </em>{user.phone}
                    </div>
                    <div>
                      <em>Website: </em>{user.website}
                    </div>
                    <div>
                      <em>Company: </em>{user.company.name}
                    </div>
                  </Link>
                </SidebarItem>
              ))
            ) : (
                <div>Loading...</div>
              )}
          </Sidebar>
        
          <Route exact={true} path="/" render={() => (
            <div style={{overflow: "hidden"}}>
              <h1>Welcome</h1>
            </div>
          )} />

          <PostArea>
            {posts && (
              <Route path="/u/:userId" render={({ match }) => (
                posts.map(p => (p.userId === +match.params.userId)
                  && <Posts key={p.id} post={p} />
                )
              )} />
            )}
          </PostArea>
        </main>
      </Router>
    );
  }
}

export default App;
