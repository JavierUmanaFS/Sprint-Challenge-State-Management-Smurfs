import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { createContext } from 'react';
import SmurfForm from './smurfForm';



const Smurfs = () => {

  const [smurfs, setSmurfs ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
       setSmurfs(res.data)
    })
  }, [])

  const SmurfContext = createContext(smurfs);

  const smurfsData = useContext(SmurfContext);


  return (
    <SmurfContext.Provider>
    <div>
      <h1>Smurfs</h1>
      <div>
      {smurfsData.map(item => {
        return (
          <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
          </div>
        )
      })}
      </div>
      {/* Form */}
      <div>
    <SmurfForm />
      </div>
    </div>
    </SmurfContext.Provider>
  )
}

export default Smurfs; 