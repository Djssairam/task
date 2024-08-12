// src/App.jsx
import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerContent, setBannerContent] = useState({ description: '', link: '', timer: 0 });

  useEffect(() => {
    // Fetch banner data from the backend here
    fetch('/api/banner')
      .then(res => res.json())
      .then(data => setBannerContent(data));
  }, []);

  return (
    <>
    <div className="heading w-full text-center text-8xl bg-black  text-green-300">
      <p>COUNTDOWN</p>
    </div>
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4">
      {bannerVisible && <Banner content={bannerContent} />}
      <Dashboard
        onToggleBanner={() => setBannerVisible(!bannerVisible)}
        onUpdateContent={(newContent) => setBannerContent(newContent)}
        />
    </div>
        </>
  );
}

export default App;
