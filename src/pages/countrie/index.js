import { useQuery } from "@apollo/client";
import { FIND_ONE_TO_ONE,FIND_ALL_COUNTRIES } from "../../config/query";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";


function CountriePage() {
  const { slug } = useParams();
  const history = useHistory();
  const [state, setState] = useState({
    Country: [],
  });
  const [form, setForm] = useState();
  const { data, client } = useQuery(FIND_ONE_TO_ONE, {
    fetchPolicy: "cache",
    variables: {
      filter: slug,
    },
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let filter = state.Country?.map((el) => {
      return Object.assign({}, el, form);
    });
    console.log(filter);
    client.cache.writeQuery({
      query: FIND_ALL_COUNTRIES,
      data: {
        Country: filter,
      },
    })
    client.cache.writeQuery({
      query: FIND_ONE_TO_ONE,
      variables: {
        filter: slug,
      },
      data: {
        Country: filter,
      },
    });
  };
  useEffect(() => {
    console.log(data);
    setState(data);
  }, [data]);
  return (
    <>
      <div className="container mx-auto  mt-5">
        <button className="p-3 bg-gray-600 hover:bg-gray-400 text-white font-bold"
        onClick={() => history.goBack()}
        >Voltar</button>
      </div>
      <div className="shadow-lg container mx-auto mt-5 flex ">
        <div className="w-1/2 h-auto">
          <div
            className="w-full bg-cover bg-center h-80"
            style={{
              backgroundImage: `url(${data?.Country?.map(
                (img) => img.flag?.svgFile
              )})`,
            }}
          />
        </div>
        <div className="w-1/2 h-auto self-stretch">
          <div className="flex w-full h-auto justify-around">
            <div className="self-start flex flex-col">
              {data &&
                data.Country?.map((val, index) => (
                  <>
                    <div className="w-full pl-2">
                      <h2 className="text-xl font-bold">Nome: </h2>
                      <h1 className="text-xl">{val.name}</h1>
                    </div>
                    <div className="w-full pl-2">
                      <h2 className="text-xl font-bold">Capital: </h2>
                      <h1 className="text-xl">{val.capital}</h1>
                    </div>
                    <div className="w-full pl-2">
                      <h2 className="text-xl font-bold">Domain: </h2>
                      {val.topLevelDomains.map((domain) =><h1 className="text-xl">{domain.name}</h1> )}
                    </div>
                    <div className="w-full pl-2">
                      <h2 className="text-xl font-bold">Moeda: </h2>
                      {val.currencies.length > 1 ? (
                        <ul>
                          {val.currencies?.map((money) => (
                            <li>{money.name}</li>
                          ))}
                        </ul>
                      ) : (
                        val.currencies?.map((money) => (
                          <h1 className="text-xl">{money.name}</h1>
                        ))
                      )}
                    </div>
                    <div className="w-full pl-2">
                      <h2 className="text-xl font-bold">Populaçao: </h2>
                      <h1 className="text-xl">{val.population}</h1>
                    </div>
                  </>
                ))}
            </div>
            <div className="self-center">
              <h1 className="text-xl">Editar Informaçoes</h1>
              <form
                className="flex w-full flex-col mt-2"
                onSubmit={handleSubmit}
              >
                <div className="flex justify-between mt-2 items-center">
                  <label className="text-xl mr-1">Pais:</label>
                  <input
                    className="w-full border border-gray-400 p-2"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <label className="text-xl mr-1">Capital:</label>
                  <input
                    className="w-full border border-gray-400 p-2"
                    name="capital"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <label className="text-xl mr-1">Population:</label>
                  <input
                    className="w-full border border-gray-400 p-2"
                    name="population"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between mt-2 items-center">
                  <label className="text-xl mr-1">Área:</label>
                  <input
                    className="w-full border border-gray-400 p-2"
                    name="area"
                    onChange={handleChange}
                  />
                </div>

                <button className="bg-green-400 hover:bg-green-700 border border-black text-black h-10 mt-2">
                  Atualizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountriePage;
