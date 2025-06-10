import HighlightNews from '@/components/highlightNews';
import NormalNews from '@/components/normalNews';
import SideNewsNews from '@/components/sideNews';
import SmallSideNews from '@/components/smallSideNews';

export default async function Home() {
  const newsData = await fetch(`http://localhost:3000/news`);
  const newsArray = await newsData.json();
  const highlightNews = newsArray.slice(0, 3);
  const sideNews = newsArray.slice(3, 4);
  const smallSideNews = newsArray.slice(4, 9);
  const normalNews = newsArray.slice(9);

  return (
    <main>
      <div className="p-5">
        <div className="grid grid-cols-6 gap-4">

          <div className="col-span-4">
            <HighlightNews highlightNews={highlightNews} />
            <NormalNews normalNews={normalNews} />
          </div>

          <div className="col-span-2">
            <SideNewsNews sideNews={sideNews} />
            <SmallSideNews smallSideNews={smallSideNews} />
          </div>

        </div>
      </div>
    </main >
  );
}
