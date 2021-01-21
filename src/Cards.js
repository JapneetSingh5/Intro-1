import React from 'react';
import { FRESHERS } from "./Freshers";
import CardWrapper from './CardWrapper';

const Cards=()=>{
    const renderCards = [];

    for(let i=0; i<FRESHERS.length; i++){
        const fresherObject = FRESHERS[i];
        const contact1url = FRESHERS[i].contact[0];
        const contact2url = FRESHERS[i].contact[1];
        renderCards.push(<CardWrapper entryNum={fresherObject.entryNum} name={fresherObject.name} image={fresherObject.image} about={fresherObject.about} branch={fresherObject.branch} contact1={contact1url.url} contact2={contact2url.url}></CardWrapper>)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {renderCards}
            </div>
        </div>
    );
}

export default Cards;

