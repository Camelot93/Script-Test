import { useEffect, useRef, useState } from 'react';
import './App.css';
import Comp from './Comp';

function App() {
  const data = [
   {  key:"1Wnq",
      list:"first",
      value : "A",
      child : { 
        key: "5Xzs",
        list:"first",
        value : "E",
      }
    },
    { key:"2Fmc",
      list:"first",
      value : "B",
      child: { 
        key: "6Nbk",
        list:"first",
        value : "F",
      }
    },
    { key: "3Rgl",
      list:"first",
      value : "C",
      child:{ 
        key: "7Ohv",
        list:"first",
        value : "G",
      }
    },
    { key: "4Syu",
      list:"first",
      value : "D",
      child: { 
        key: "8Ypo",
        list:"first",
        value : "H",
      }
    },
    { key: "1Lnq",
      list:"second",
      value : "A",
      child:{ 
      key: "5Ipp",
      list:"second",
      value : "E",
    }
    },
    { key: "2Jhh",
      list:"second",
      value : "B",
      child:{ 
      key: "6Kjh",
      list:"second",
      value : "F",
    }
    },
    { key: "3Ffg",
      list:"second",
      value : "C",
      child: { 
      key: "7Lbc",
      list:"second",
      value : "G",
    }
    },
    { key: "4Xcc" ,
      list:"second",
      value : "D",
      child: { 
      key: "8Igd",
      list:"second",
      value : "H",
    }
    },

  ]
 

//
  return (
    <div className="App">
    <Comp 
      data = {data}
      />
    </div>
  );
}

export default App;
