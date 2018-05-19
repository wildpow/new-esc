import React from 'react';
import StearnsLogo from '../../images/Stears_Logo_WarmGray_Cropped.png';
import MarriedLady from '../../images/StearnsTopImage600x400.jpg';
import StearnsIcon from '../../images/StearnsFleur_Cropped.png';
import StearnsBed from '../../images/StearnsAboveReviews600x400.jpg';
import Stars from '../../images/StearnsStars200x50.png';

const StearnsLanding = () => {
  return (
    <div>
      <header>
        <img src={StearnsLogo} alt="this"/>
      </header>
      <main>
        <article>
          <img src={MarriedLady} alt="this"/>
          <aside>
            <p>
              For over 165 years, Stearns & Foster has worked to build the perfect mattres.
              Every Stearns & Foster mattress is carefully crafted with the finest materials
              to provide you unsurpassed luxury and unparalleled 
              sleep. 
            </p>
            <p>
              Visit today or contact us to schedule a time to experience Consumer Reports 
              top rated Luxury Inneerspring Mattress.
            </p>
            <button>Contact Us</button>
          </aside>
        </article>
        <article>
          <div>
            <div>
              <h3>Authentic Craftsmanship</h3>
              <p>
                Every Stearns & Foster mattress is handcrafted by certified craftsmen who have been specialy trained and pay relentless attention to detail to build the best beds.
              </p>
            </div>
            <img src={StearnsIcon} alt="this"/>
            <div>
              <h3>Indulgent Comfort</h3>
              <p>
                Nothing is as supremely comfortable as a Stearns & Foster bed, offering you that perfect “ahh” moment every time you lie down.
              </p>
            </div>
          </div>
          <h3>Exceptional Quality</h3>
          <div>
          <p>
            Each Stearns & Foster mattress is precisely engineered to meet the highest standards to deliver you exceptional, lasting quality.
          </p>
        </div>
        </article>
        <img src={StearnsBed} alt="this"/>
        <article>
        <div>
          <h3>The Stearns & Foster Experience</h3>
          <div>
            <div>
              <p>Love our S&F Mattress! - Howie C.</p>
              <img src={Stars} alt="this"/>
            </div>
            <div>
              <p>Wake up with no back pain and well rested! - Penny s.</p>
              <img src={Stars} alt="this"/>
            </div>
            <div>
              <p>A dreamers paradise! -Houston T.</p>
              <img src={Stars} alt="this"/>
            </div>
          </div>
        </div>
      </article>
    </main>
  </div>
  )
}
export default StearnsLanding;