import convertDate from "@/lib/convertDate";

export default function SideNewsNews({ sideNews }: any) {
    return (
        <>
            {sideNews.map((news: any) => (
                <div>
                    <a href={news.redirect_url} >
                        <img src={news.img_src} alt={news.title} />
                        <h2 className="text-lg font-bold mb-2 mt-5">{news.title}</h2>
                        <div className="flex justify-between">
                            <p className="font-light">{convertDate(news.update_date)}</p>
                            <div className="badge badge-neutral badge-outline">{news.channel_name}</div>
                        </div>
                    </a>
                    <div className="divider divider-neutral" />
                </div >
            ))}
        </>
    );
}