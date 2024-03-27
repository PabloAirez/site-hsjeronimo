import { useState, useEffect } from 'react'

/*
* Hook para controle de requisições HTTP
* Recebe como parâmetros:
* endPoint (String) - Url que designa qual informação deve ser puxada do banco de dados.
* Ela é concatenada à url base da API (a parte que nunca muda das rotas).
* O uso do useEffect é para não realizar novamente a request a cada recarregamento dos componentes.
*
* Modo de uso: Importe o arquivo do Hook na sua página e defina uma const {data : nomeDaSuaVariavel} = useFetch(endpoint);
*/

export const urlBase = "http://192.168.8.75:3000";

export const useFetch = (endPoint) => {
    const [data,setData] = useState([]);
    const [config, setConfig] = useState([]); // seta as configurações de cabeçalho
    const [method,setMethod] = useState([]); // GET, POST, UPDATE, DELETE
    const [error,setError] = useState(false);
    const [callFetch, setCallFetch] = useState(false); // Serve para chamar novamente o fetch com GET após executar um método POST

    const httpConfig = (data,method)=>{
        if(method === "POST"){
            setConfig({
                method,
                Headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)
            });
        }

        setMethod(method);
    }

    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                const res = await fetch(`${urlBase}/${endPoint}`);
                const data = await res.json();
                setData(data);
            }catch(error){
                setError("Ops! Não foi possível carregar os dados");
            }
           
        }

        fetchData();
    },[endPoint, callFetch])
    

    useEffect(()=>{
        const httpRequest = async ()=>{
            if(method === "POST"){
                let url = `${urlBase}/${endPoint}`;
                let options = [url,config];
                const res = await fetch(...options);
                const data = await res.json();
                setCallFetch(data);
            }
        }
        httpRequest();
    },[config,method,endPoint]);
       


        return {data, httpConfig,error};
};
