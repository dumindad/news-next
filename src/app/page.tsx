
import NewsCard from "./components/NewsCard";
import getNews from "./lib/getNews";


export default async function Home() {

  const datanews = await getNews();
  const posts = datanews.data
  return (
    <>

      <div className="p-3 mx-4">
        <NewsCard
          promise={posts}
        />
      </div>
    </>
  )
}

