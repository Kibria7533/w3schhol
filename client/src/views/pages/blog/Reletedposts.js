import React, { Component } from 'react';

class Reletedposts extends Component {
   
    render() {
        return (
            <div>
                {this.props.releted.length?<div><h1 style={{"color":"ActiveCaption","textAlign":"center"}}>Releted Posts</h1>
                <hr></hr>
                {this.props.releted.map(data=>(
                    <div key={Math.random()}>
                        <a>{data}</a>
                        <br></br>
                 </div>
               
                 )
                )}</div>:''}
                 
              
            </div>
        );
    }
}

export default Reletedposts;