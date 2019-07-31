import React from 'react';
import Card from './Card';

function Main() {
    const titleMessage = "IPhone X"
    return (
        <div className="left">
            <Card title={titleMessage}/>
            <Card/>
           </div>
    );
}

export default Main;