export const fetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchdata = async(url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data
}

export const youtubeOptions = {
  method: 'GET',
  params: {
    hl: 'en',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};