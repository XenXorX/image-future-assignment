import convertDate from "@/lib/convertDate";

export default function HighlightNews({ highlightNews }: any) {
    return (
        <>
            <div className="carousel w-full">
                {highlightNews.map((news: any) => (
                    <div id={'news_' + news.entry_id} className="carousel-item w-full">
                        <div className="card xl:card-side bg-base-100">
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
                    </div>
                ))}
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                {highlightNews.map((news: any, i: number) => (
                    <a href={'#news_' + news.entry_id} className="btn btn-xs">{i + 1}</a>
                ))}
            </div>
            <div className="divider divider-neutral" />
        </>
    );
}