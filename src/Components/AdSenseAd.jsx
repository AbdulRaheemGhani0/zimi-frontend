import { useEffect } from 'react';

const AdSenseAd = ({ slot }) => {
  useEffect(() => {
    // Only push if adsbygoogle is loaded
    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div className="ad-container" style={{ overflow: 'hidden', margin: '20px 0' }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-5040655448890712"
           data-ad-slot={slot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdSenseAd;
