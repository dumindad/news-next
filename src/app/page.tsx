
import NewsCard from "./components/NewsCard";

const API_URL = process.env.NEXT_PUBLIC_LOCAL_NEWS_API_URL;

export default async function Home() {

  const res = await fetch(`${API_URL}/news`)
  console.log("asssa:",res)
  const news = await res.json();
  const newsData = news.data

  return (
    <>

      <div className="p-3 mx-4">
        <NewsCard
          promise={newsData}
        />
      </div>
    </>
  )
}
