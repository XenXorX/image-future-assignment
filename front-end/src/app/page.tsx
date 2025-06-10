import HighlightNews from '@/components/highlightNews';

export default async function Home() {
  const newsData = await fetch(`http://localhost:3000/news`);
  const newsArray = await newsData.json();
  const highlightNews = newsArray.slice(0, 3);
  const sideNews = newsArray.slice(3, 4);
  const smallSideNews = newsArray.slice(4, 6);
  const miniSideNews = newsArray.slice(6, 9);
  const normalNews = newsArray.slice(9);

  return (
    <main>
      <div className="p-5">
        <div className="grid grid-cols-6 gap-4">

          <div className="col-span-4">

            {/* highlight news */}

            <HighlightNews highlightNews={highlightNews} />

            {/* normal news */}

            <div className="grid grid-cols-4 gap-4">
              {normalNews.map((news: any) => (
                <div className="flex">
                  <div className="card bg-base-100 w-96 m-2">
                    <figure>
                      <img
                        src={news.img_src}
                        alt={news.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{news.title}</h2>
                      <div className="card-actions justify-end">
                        {/* <span>{convertDate(news.update_date)}</span> */}
                        <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="col-span-2">

            {/* side news */}

            {sideNews.map((news: any) => (
              <div className="flex justify-center">
                <div className="card bg-base-100 w-96 m-2">
                  <figure>
                    <img
                      src={news.img_src}
                      alt={news.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{news.title}</h2>
                    <div className="card-actions justify-end">
                      {/* <span>{convertDate(news.update_date)}</span> */}
                      <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                    </div>
                  </div>
                  <div className="divider" />
                </div>
              </div>
            ))}

            {/* smallSide news */}

            <div className="col-span-2 grid grid-cols-subgrid gap-4">
              {smallSideNews.map((news: any) => (
                <div className="flex justify-center">
                  <div className="card bg-base-100 w-96 m-2">
                    <figure>
                      <img
                        src={news.img_src}
                        alt={news.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{news.title}</h2>
                      <div className="card-actions justify-end">
                        {/* <span>{convertDate(news.update_date)}</span> */}
                        <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                      </div>
                    </div>
                    <div className="divider" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </main >
  );
}
