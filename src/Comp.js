import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

function Comp({data}) {

const [randomCalc, setRandomCalcl] = useState(Math.random() * (100 -1) + 1)
const [complexCalcResult, setComplexCalcResult] = useState(null)


useEffect(()=>{
    setComplexCalcResult(Math.sqrt(randomCalc * 80 / 7 ))
},[randomCalc])

    return (
      <div className="comp" >
       <ul>
      {
       data.map((el,i)=>
           el.list === "first" && 
                <>
                
                <li 
                key={i} 
                >
                <Tooltip 
                content={data.filter(filtEl=> el.value === filtEl.value).map((mapEl)=>mapEl.key)} direction="top">
                  {el.value}
                  </Tooltip>
                  
                  <ul>
                  {
                      el.child && 
                 
                            <li>
                                <Tooltip  
                                content={data.filter(filtEl=> el.child.value === filtEl.child.value).map((mapEl)=>mapEl.child.key)} direction="top">
                                {el.child.value}
                                </Tooltip>
                            </li>
                        
                        
                    }
                
                  </ul>
                </li>
                </>
        
        
        )
  
      }
            </ul>

            <ul>
            {
       data.map((el,i)=>
           el.list === "second" && 
                <>
                
                <li 
                key={i} 
                >
                <Tooltip 
                content={data.filter(filtEl=> el.value === filtEl.value).map((mapEl)=>mapEl.key)} direction="top">
                  {el.value}
                  </Tooltip>
                  
                  <ul>
                    {
                      el.child && 
                 
                            <li>
                                <Tooltip  
                                content={data.filter(filtEl=> el.child.value === filtEl.child.value).map((mapEl)=>mapEl.child.key)} direction="top">
                                {el.child.value}
                                </Tooltip>
                            </li>
                        
                        
                    }
                
                  </ul>
                </li>
                </>
        
        
        )
  
      }
            </ul>
            {complexCalcResult}
        <button onClick={()=>{
            setRandomCalcl(Math.random() * (100 -1) + 1)
        }}>
            click me
        </button>
      </div>
    );
  }
  
  export default Comp;
