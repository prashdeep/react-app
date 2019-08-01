import React from 'react';
import Card from './Card';

export default class Main extends React.Component {

    constructor(){
        super();
        console.log(`called from the constructor of Main component..`)
        this.selectedProduct = this.selectedProduct.bind(this);
    }

    selectedProduct(data){
       console.log(data)
    }

    componentDidMount(){
        console.log(`Component is mounted on the DOM`)
    }

    render(){
       const phones=[
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
        return (
            <div className="left">
                {
                    phones.map((phone,index) => <Card 
                                                key={index} 
                                                title={phone.name} 
                                                body={phone.desc}
                                                selected = {this.selectedProduct}/>)
                }
            </div>
        );
    }
}

