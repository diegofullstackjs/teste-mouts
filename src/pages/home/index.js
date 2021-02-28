import { useQuery } from '@apollo/client';
import React, { useEffect,useState } from 'react';
import Card from '../../components/Card';
import { FIND_ALL_COUNTRIES } from '../../config/query';


function HomePage() {
    const [Input,setInput] = useState()
    const {data,loading} = useQuery(FIND_ALL_COUNTRIES,{
        fetchPolicy: 'cache'
    })
    useEffect(() => {
        console.log(data)
    },[data])
    const handleChange = event => {
        setInput(event.target.value)
    }
  return(
    <>
    <div className="container mx-auto ">
        <input className="mb-5 mt-5 p-5 w-full border border-gray-400" placeholder="Pesquise..."  onChange={handleChange}/>
    </div>
    <div className="container mx-auto ">
         {loading && <h1 className="text-xl font-bold">Carregando dados...</h1>}
    </div>
      <div className="container mx-auto grid grid-cols-3  gap-4 mt-5">
       
      {
          !loading&&
          data.Country?.filter((v) => {
              if(Input === ""){
                  return v
              }else if(v.name?.toLowerCase().includes(Input?.toLowerCase())) {
                  return v
              }
              
            }).map((el,index) => {
              return <Card 
                     alpha2Code={el.alpha2Code}
                     image={el.flag.svgFile}
                     capital={el.capital} 
                     title={el.name}
                     key={'card-paises'+index}
                      />
          })
      }
      </div>
   </>
    )
}

export default HomePage;