import React, { Component } from 'react';
import Sidenav from './Sidenav';
import Main from './Main';

import axios from 'axios';
import Header from './Header';





class Body extends Component {
  constructor({match}) {
    super()
    this.state = {
      topic:match.params.html,
      ch: "",
      chapters: [],
      chaptercontent: [],
      comments: [],
      reletedposts: [],
      redirect: true

    }
  }
  bodydatafetch = async (chname) => {
    this.commentfetch(chname);
    this.reletedpostsfetch(chname);
    const { topic } = this.state;

    await axios.post(`http://localhost:5000/getchapter`, { "Topic": topic, "ch": chname }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(val => {
      if(val.data.length)
      this.setState({ chaptercontent: val.data[0].posts })
      this.setState({ ch: chname })

    })
  }
  commentfetch = async (cname) => {
    const { topic } = this.state;
    await axios.post(`http://localhost:5000/allcomments`, { "Topic": topic, "ch": cname }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(commentval => {
      if(commentval.data[0].comments.length)
      this.setState({ comments: commentval.data[0].comments[0].comment })
      else
      this.setState({ comments: [] })

    })
  }
  reletedpostsfetch = async (ccname) => {
    const { topic } = this.state;
    await axios.post(`http://localhost:5000/reletedposts`, { "Topic": topic, "ch": ccname }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(reletedval => {
      console.log('reletedval');
      console.log(reletedval);
      if(reletedval.data[0].reletedposts.length)
      this.setState({ reletedposts: reletedval.data[0].reletedposts[0].reletedpost })
      else
      this.setState({ reletedposts:[] })


    })
  }
  async componentDidMount() {
    console.log('mytopic')
    console.log(this.state.topic);
    await axios.post(`http://localhost:5000/allchapter/${this.state.topic}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log(data.data.length)
      if (data.data[0].posts.length) {
        this.setState({ redirect: true })
        this.setState({ chapters: data.data[0].posts })
        this.setState({ ch: data.data[0].posts[0].ch })
        this.bodydatafetch(data.data[0].posts[0].ch)
      }
      else {
        this.setState({ redirect: false })
      }

    })

  }
  render() {
    return (

      <div>
       <Header/>
        <Sidenav ch={this.state.chapters} redata={this.bodydatafetch} />
        <Main data={this.state.chaptercontent} rel={this.state.reletedposts} topic={this.state.topic} ch={this.state.ch} commentfetchaction={this.commentfetch} comment={this.state.comments} />

      </div>

    );
  }
}

export default Body;