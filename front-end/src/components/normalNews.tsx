import convertDate from "@/lib/convertDate";

export default function NormalNews({ normalNews }: any) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {normalNews.map((news: any) => (
                <div>
                    <a href={news.redirect_url} >
                        <img src={news.img_src} alt={news.title} />
                        <h2 className="text-base font-bold mb-2 mt-3">{news.title}</h2>
                        <div className="flex justify-between">
                            <p className="font-light">{convertDate(news.update_date)}</p>
                            <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}