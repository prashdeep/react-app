import React from 'react';
import Card from './Card';

export default class Main extends React.Component {

    constructor(){
        super();
        this.state={
            phones:[]
        }
        this.selectedProduct = this.selectedProduct.bind(this);
    }

    selectedProduct({title}){
        const filteredList = this.state.phones.filter(phone => phone.name === title);
        this.setState({
            phones:filteredList
        })
    }

    componentDidMount(){
        console.log(`Component is mounted on the DOM`)
        this.setState({
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
        })
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

