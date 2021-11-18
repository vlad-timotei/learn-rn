import CREDENTIALS from "../../credentials";

const params = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': CREDENTIALS.PEXELS_API,
    },
  };

const getPexels = async(uri, params) =>{
    try {
        const response = await fetch( uri, params );
        if( !response.ok )
            return;
        const json = await response.json();
        return json;
  
      } catch (error) {
        console.error(error);
      }
}

const searchImages = async (query, per_page) => {
    return await getPexels(`https://api.pexels.com/v1/search?per_page=${per_page}&query=${query}`, params);
}

export default { searchImages };