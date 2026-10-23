import { issue } from './data.js';
import Header from './components/Header.jsx';
import { Sermon, WorshipOrder, WorshipTimes, News, Gallery, Welcome } from './components/Sections.jsx';
import { Footer, BottomNav } from './components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="issue">{issue}</div>
        <Header />
        <main>
          <Sermon />
          <WorshipOrder />
          <WorshipTimes />
          <News />
          <Gallery />
          <Welcome />
        </main>
        <Footer />
        <BottomNav />
      </div>
    </div>
  );
}
