export default async function Home() {
  const newsData = await fetch(`http://localhost:3000/news`)
  const newsArray = await newsData.json()
  const highlightNews = newsArray.slice(0, 5);
  const sideNews = newsArray.slice(5, 10);
  const normalNews = newsArray.slice(10);

  return (
    <main>
      <div className="flex flex-row">
        <div className="divider divider-neutral" />

        <div className="basis-2/3">
          <div className="carousel w-full">
            {highlightNews.map((news: any) => (
              <div id={'news_' + news.entry_id} className="carousel-item w-full">
                <img
                  src={news.img_src}
                  className="w-full" />
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            {highlightNews.map((news: any, i: number) => (
              <a href={'#news_' + news.entry_id} className="btn btn-xs">{i + 1}</a>
            ))}
          </div>
        </div>

        <div className="basis-1/3">

        </div>

        <div className="divider divider-neutral" />
      </div>
    </main>
  );
}
