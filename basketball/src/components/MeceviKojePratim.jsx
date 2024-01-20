import React from 'react'
import JedanMec from './JedanMec';
const MeceviKojePratim = ({mecevi}) => {
  return (
    <div className='cart-container'>
      <h3>Ovde su tvoji mecevi</h3>
      {mecevi.map((mecev) => (
          <JedanMec mec={mecev} key={mecev.id} inMeceviKojePratim={0} />
        ))}
    </div>
  );
};

export default MeceviKojePratim;