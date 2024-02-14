import { useEffect } from 'react'

/*
* Componente para controle de requisições HTTP
* Recebe como parâmetros:
* 1: endPoint (String) - Url que designa qual informação deve ser puxada do banco de dados.
* Ela é concatenada à url base da API (a parte que nunca muda das rotas)
*
*2: setFunction (função) - Função que irá setar os dados de retorno da API   
*/
export async function FetchApi(endPoint, setFunction) {
    const urlBase = "http://localhost:3000";
    
        async function fetchData(endPoint, setFunction){
            const res = await fetch(`${urlBase}/${endPoint}`);
            const data = await res.json();
            setFunction(data);

        }

        fetchData(endPoint, setFunction);


        return;
}
export default FetchApi