import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1 className="hero-title">Your e-commerce</h1>
        <h3 className="hero-subtitle">The best marketplace from Vite</h3>
      </div>
      <img
        src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1060&t=st=1678894889~exp=1678895489~hmac=73f02bbd95f75c22f49802b260d599a0577f8993f85d9a1a2e0eba766146d42d"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
