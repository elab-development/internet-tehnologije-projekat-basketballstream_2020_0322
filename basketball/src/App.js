import './App.css';
import Menu from "./components/Menu";
import Mecevi from "./components/Mecevi";
import { useState } from 'react';
import MeceviKojePratim from './components/MeceviKojePratim';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cartNum, setCartNum]= useState(0);
  const [cartMecevi, setCartMeceve]= useState([]);
  const [mecevi, setMeceve] = useState([
    {
        id: 1,
        title:"NY vs WSH",
        description:
        "Opis utakmice",
              rezultat:"113-109",
              amount: 0,
        },
        {
        id: 2,
        title:"TOR vs CHI",
        description:
        "Opis utakmice",
              rezultat:"110-116",
              amount: 0,
        },
        {
        id: 3,
        title:"UTAH vs OKC",
        description:
        "Opis utakmice",
        rezultat:"129-134",
        amount: 0,
        },
        ]);
        function refreshMeceviKojePratim(){
          let newMecevi= mecevi.filter((mecev)=>mecev.amount>0);
          setCartMeceve(newMecevi);

        }
    function addMec(title, id){
        console.log("Dodat mec: " +title);
        /*if(cartNum>=0 && cartNum<1){
        setCartNum(cartNum+1);
        }*/
        //console.log(cartNum);
        //prodji kroz niz elemenata i proveri da li odgovara id
        mecevi.forEach((mecev)=>{
         if(mecev.id === id){
          mecev.amount++;
          if(cartNum>=0){
            setCartNum(cartNum+1);
            }
        
        
         }
         
        });
        refreshMeceviKojePratim();
    }
    function removeMec(title, id){
        console.log("Otpracen mec: " +title);
        /*if(cartNum===1){
        setCartNum(cartNum-1);
        }*/
        //console.log(cartNum);
        //razlika izmedju foreach i map je da map mora nesto da vrati return

        mecevi.forEach((mecev)=>{
          if(mecev.id === id){
            mecev.amount--;
            if(cartNum===1){
              setCartNum(cartNum-1);
              }
        
        
          }
          
         });
         refreshMeceviKojePratim();
         
    }
    
  return (
  
    <BrowserRouter className="App">
      <Menu cartNum={cartNum}></Menu>
     <Routes>
             <Route
             path="/"
             element={<Mecevi mecevi={mecevi} onAdd={addMec} onRemove={removeMec}/>}
             />
            <Route
            // futer heder path="/meceviKojePratim* pojedinacni slucajevi path="/meceviKojePratim/:id" Menu <Link to='/meceviKojePratim/id=15'
             path="/meceviKojePratim"
             element={<MeceviKojePratim mecevi={cartMecevi} />}
             />
     </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
