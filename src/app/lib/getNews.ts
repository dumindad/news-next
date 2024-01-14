
const DATA_SOURCE_URL = "https://wall-street-journal.p.rapidapi.com/api/v1/getSections"
const getNews = async () => {
    const options = {
          Cache: "no-store",
          headers: {
              'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
              'X-RapidAPI-Host': process.env.NEXT_PUBLIC_NEWS_RAPIDAPI_HOST
          }
      };
      const res = await fetch(DATA_SOURCE_URL, options)
  
      const news = await res.json()
  return news
}

export default getNews;