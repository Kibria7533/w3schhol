import React, { Component } from 'react';
import Comment from './Comment';
import Reletedposts from './Reletedposts';
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chapterdata: props.data,
    }
  }
  render() {

    return (
      <div className="main" >
{this.props.data.length?<div>
        {this.props.data.map((data,index) => (
          <div  key={index}><h2>{data.intro}</h2>
            <a href="#about">{data.ch}</a>
            <p>{data.blogtext}</p> 
            </div>
        ))}
        <Reletedposts releted={this.props.rel}/>
          <Comment fetchcomment={this.props.comment} aftercomment={this.props.commentfetchaction} cha={this.props.ch} topic={this.props.topic}/>
     </div> :"You didnt add any chapter yet"}
</div>
    );
  }
}

export default Main;