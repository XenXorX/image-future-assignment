function convertDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

export default async function Home() {
  const newsData = await fetch(`http://localhost:3000/news`)
  const newsArray = await newsData.json()
  const highlightNews = newsArray.slice(0, 5);
  const sideNews = newsArray.slice(5, 10);
  const normalNews = newsArray.slice(10);

  return (
    <main>
      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
          <div className="carousel w-full">
            {highlightNews.map((news: any) => (
              <div id={'news_' + news.entry_id} className="carousel-item w-full">
                <div className="card card-side bg-base-100 shadow-sm">
                  <figure>
                    <img
                      src={news.img_src}
                      alt={news.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{news.title}</h2>
                    <span>{convertDate(news.update_date)}</span>
                    <span className="badge badge-neutral badge-outline justify-end">{news.channel_name}</span>
                  </div>
                </div>
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

        <div className="col-span-1">
          {sideNews.map((news: any) => (
            <div className="flex justify-center">
              <div className="card bg-base-100 w-96 m-2 shadow-sm">
                <figure>
                  <img
                    src={news.img_src}
                    alt={news.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{news.title}</h2>
                  <div className="card-actions justify-end">
                    <span>{convertDate(news.update_date)}</span>
                    <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main >
  );
}
