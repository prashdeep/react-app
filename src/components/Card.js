import React,{Component} from 'react';

export default class Card extends Component {

    details(){
        console.log('Came inside the click event handler');
    }
    render(){
        return  (
            <div className="card" style={{width: 18 +'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.title.toUpperCase()}</h5>
                    <p className="card-text">{this.props.body}</p>
                    <a className="btn btn-primary" onClick={this.details()}>Details</a>
                </div>
                </div>
        );
    }
}
