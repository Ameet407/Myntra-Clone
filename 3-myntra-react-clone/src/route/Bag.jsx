import Bagsummary from "../components/Bagsummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = ()=>{
  const bagItem=useSelector((store)=>store.bag);
const Items=useSelector((store)=>store.items);
 const finalItem=Items.filter((item)=>bagItem.indexOf(item.id)>=0);
  
    return <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map((item)=><BagItem key={item.id} item={item}></BagItem>)}
          
        </div>
        <div className="bag-summary">
        <Bagsummary item={finalItem}></Bagsummary>
        </div>
        
      </div>
    </main>
    </>
}

export default Bag;