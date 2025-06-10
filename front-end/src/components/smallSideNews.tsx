import convertDate from "@/lib/convertDate";

export default function SmallSideNews({ smallSideNews }: any) {
    return (
        <>
            {smallSideNews.map((news: any) => (
                <div className="mb-3">
                    <a href={news.redirect_url} >
                        <div className="flex flex-row">
                            <div className="basis-2/3">
                                <h2 className="text-base font-bold mb-2">{news.title}</h2>
                                <div className="flex justify-between">
                                    <p className="font-light">{convertDate(news.update_date)}</p>
                                    <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                                </div>
                            </div>
                            <div className="basis-1/3  pl-2">
                                <img src={news.img_src} alt={news.title} />
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </>
    );
}