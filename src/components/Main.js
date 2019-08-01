import React from 'react';
import Card from './Card';

export default class Main extends React.Component {

    constructor(){
        super();
        this.state={
            phones:[
                {
                    name:'IPhone',
                    desc:'Latest Iphone model from Apple'
                },
                {
                    name:'One Plus 6',
                    desc:'Flagship phone from OnePlus'
                },
                {
                    name:'Samsung S10',
                    desc:'Hight performance..'
                }
            ]
        }
        this.selectedProduct = this.selectedProduct.bind(this);
    }

    selectedProduct({title, body}){

        this.setState({
            phones:[
                {
                    name:title, 
                    desc:body
                }
            ]
        })
       //this.setState({phones:[data]})
    }

    componentDidMount(){
        console.log(`Component is mounted on the DOM`)
    }

    render(){
        return (
            <div className="left">
                {
                    this.state.phones.map((phone,index) => <Card 
                                                key={index} 
                                                title={phone.name} 
                                                body={phone.desc}
                                                selected = {this.selectedProduct}/>)
                }
            </div>
        );
    }
}

