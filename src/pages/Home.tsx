import '../components/Testimoniyal.css'

  function Home() {
    return (
        <>
      <div className="landing">
    

      <div className="landing-showcase">
        <h2>Our Favorite Creations</h2>
        <div className="cupcake-gallery">
          <img src="/assets/cupcakes/showcase1.png" alt="Cupcake 1" />
          <img src="/assets/cupcakes/showcase2.png" alt="Cupcake 2" />
          <img src="/assets/cupcakes/showcase3.png" alt="Cupcake 3" />
        </div>
      </div>
    </div>
      <div className="review-section">
  <h2>What Our Customers Say</h2>
  <div className="reviews-scroll">
    <div className="review-card">🧁 “The cupcakes taste like magic. So fresh!”<br />— Olivia</div>
    <div className="review-card">🎉 “My custom order came out PERFECT. 10/10.”<br />— Max</div>
    <div className="review-card">💖 “Beautiful presentation, and the kids loved them!”<br />— Priya</div>
    <div className="review-card">🎂 “Easiest cupcake builder ever. Will buy again!”<br />— Leo</div>
    <div className="review-card">🍓 “They made my party extra sweet.”<br />— Emma</div>
  </div>
</div>

        </>

    );
  }

  export default Home;