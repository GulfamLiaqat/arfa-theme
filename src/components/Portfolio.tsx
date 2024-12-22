const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title style-2 text-center">
              <h2 className="title">
                Our Work<span>.</span>
              </h2>
            </div>

            <div className="portfolio_wrap">
              <div className="portfolio_item" data-cursor="View<br>Details">
                <a
                  href="single-portfolio.html"
                  className="portfolio_item_inner cursor-hide"
                >
                  <div className="thumb">
                    <img
                      src="/assets/images/portfolio/portfolio-img-1.jpg"
                      alt="ThemeShala"
                    />
                  </div>
                  <div className="content">
                    <span className="category">Development</span>
                    <h3 className="title">Decentralized Lending Platform</h3>
                  </div>
                </a>
              </div>

              <div className="portfolio_item" data-cursor="View<br>Details">
                <a
                  href="single-portfolio.html"
                  className="portfolio_item_inner cursor-hide"
                >
                  <div className="thumb">
                    <img
                      src="/assets/images/portfolio/portfolio-img-2.jpg"
                      alt="ThemeShala"
                    />
                  </div>
                  <div className="content">
                    <span className="category">branding Design</span>
                    <h3 className="title">Anti Money Four Laundering</h3>
                  </div>
                </a>
              </div>

              <div className="portfolio_item" data-cursor="View<br>Details">
                <a
                  href="single-portfolio.html"
                  className="portfolio_item_inner cursor-hide"
                >
                  <div className="thumb">
                    <img
                      src="/assets/images/portfolio/portfolio-img-3.jpg"
                      alt="ThemeShala"
                    />
                  </div>
                  <div className="content">
                    <span className="category">Development</span>
                    <h3 className="title">Decentralized Lending Platform</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
