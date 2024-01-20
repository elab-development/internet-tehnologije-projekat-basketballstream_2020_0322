import JedanMec from './JedanMec.jsx';
//nije arrow f-ja
/*   {mecevi.map((mecevi) => {
         return <JedanMec mec={mecevi} />;
})}  */
const Mecevi = ({mecevi, onAdd, onRemove}) => {
    
  return (
    <div className='all-products'>
        {mecevi.map((mecev) => (
          <JedanMec mec={mecev} key={mecev.id} onAdd={onAdd} onRemove={onRemove} inMeceviKojePratim={1} />
        ))}
        
      
    </div>
  );
}

export default Mecevi;