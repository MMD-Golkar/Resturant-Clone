export function AboutUs() {
  return (
    <section>
      <div className="flex w-50 mt-100">
        <img src="../src/assets/images/coffee.png" className="w-full" />
        <img
          src="../src/assets/images/moving-dotts.png"
          className="w-full"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(27%) sepia(30%) saturate(900%) hue-rotate(350deg) brightness(90%)",
          }}
        />
        <img src="../src/assets/images/about1.png" className="w-full" />
        <img src="../src/assets/images/map.png" />
      </div>
      <div>
        <span></span>
        <p>ABOUT US</p>
        <h4>One Of The Best Coffee Service</h4>
        <p>
          We serve more than just coffee — we create little moments of warmth
          and happiness. ☕ From your first sip to your last, every cup is made
          to make your day better.
        </p>
        <div>
            <div>
                <button>right arrow</button>
                <p>Espresso — Rich coffee, hot water.</p>
            </div>
            <div>
                <button>right arrow</button>
                <p>Caramel Latte — Espresso, milk, caramel syrup.</p>
            </div>
            <div>
                <button>right arrow</button>
                <p>Mocha — Espresso, chocolate, steamed milk.</p>
            </div>
        </div>
        <button>See More About Us</button>
      </div>
    </section>
  );
}
