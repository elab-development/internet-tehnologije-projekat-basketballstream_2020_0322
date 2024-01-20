import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotificationsOffOutline } from "react-icons/io5";
//function JedanMec(props)
//console.log(props);
//destrukturiranje objekta
function JedanMec({mec, onAdd, onRemove, inMeceviKojePratim}) {
    const stil={margin: 15, borderStyle: "dashed"};
    

  return (
   
    <div className={inMeceviKojePratim===1 ? "card" : "card-cart"} style={stil}>
      <h2 className="card-title">{mec.title} </h2>

      <img className={inMeceviKojePratim===1 ? "card-img-top" : "card-img-left"}
       src="https:/picsum.photos/200"
       alt="Slika1" />
       <div className="card-body">
       <h3 className="card-title">Final vreme</h3>
       <p className="card-text">{mec.description}</p>
       </div>
       {inMeceviKojePratim===1 ? (
     <>  
     <button className='btn' onClick={() => onAdd(mec.title, mec.id)}>
        <IoMdNotificationsOutline/></button>
        <button className='btn' onClick={() => onRemove(mec.title, mec.id)}>
        <IoNotificationsOffOutline/></button>
        </>
       ):(
       <><h4>Rezultat: {mec.rezultat}</h4>
        <h4>Amount: {mec.amount}</h4></> 
       )}
    </div>
  );
}

export default JedanMec;
