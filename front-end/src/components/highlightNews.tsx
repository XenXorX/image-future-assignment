import convertDate from "@/lib/convertDate";

export default function HighlightNews({ highlightNews }: any) {
    return (
        <>
            <div className="carousel w-full">
                {highlightNews.map((news: any) => (
                    <div id={'news_' + news.entry_id} className="carousel-item w-full">
                        <a href={news.redirect_url} >
                            <div className="flex flex-row">
                                <div className="basis-2/3">
                                    <img src={news.img_src} alt={news.title} />
                                </div>
                                <div className="basis-1/3 p-5">
                                    <h2 className="text-xl font-bold">{news.title}</h2>
                                    <div className="flex justify-between">
                                        <p className="font-light">{convertDate(news.update_date)}</p>
                                        <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div >
                ))
                }
            </div >
            <div className="flex w-full justify-center gap-2 py-2">
                {highlightNews.map((news: any, i: number) => (
                    <a href={'#news_' + news.entry_id} className="btn btn-xs">{i + 1}</a>
                ))}
            </div>
            <div className="divider divider-neutral" />
        </>
    );
}