import React from 'react';
import Card from './Card';

function Main() {
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
              phones.map((phone,index) => <Card key={index} title={phone.name} body={phone.desc} />)
            }
           </div>
    );
}

export default Main;