const Acheivements = () => {
    return (
        <section className="achievements-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title style-3">
              <div className="section_title_content">
                <h6 className="subtitle">Awards & Recognition</h6>
                <h2 className="title">Our Achievements</h2>
              </div>

              <a href="#" className="ts-btn"><span>get started</span></a>
            </div>

            <div className="achievements_wrap">
              <div className="achievements_item ts-hover__reveal-item">
                <span className="number">2024</span>
                <h5 className="title">Best content marketing</h5>
                <span className="category">Clutch</span>

                <div className="award">
                  <div className="image" data-bg-image="./assets/images/awards/award-1.jpg"></div>
                </div>
              </div>

              <div className="achievements_item ts-hover__reveal-item">
                <span className="number">2023</span>
                <h5 className="title">Content marketing excellence</h5>
                <span className="category">The Forrester</span>

                <div className="award">
                  <div className="image" data-bg-image="./assets/images/awards/award-2.jpg"></div>
                </div>
              </div>

              <div className="achievements_item ts-hover__reveal-item">
                <span className="number">2022</span>
                <h5 className="title">Best healthcare analytics</h5>
                <span className="category">Digiday</span>

                <div className="award">
                  <div className="image" data-bg-image="./assets/images/awards/award-3.jpg"></div>
                </div>
              </div>

              <div className="achievements_item ts-hover__reveal-item">
                <span className="number">2021</span>
                <h5 className="title">Best social media campaign</h5>
                <span className="category">Clutch</span>

                <div className="award">
                  <div className="image" data-bg-image="./assets/images/awards/award-4.jpg"></div>
                </div>
              </div>

              <div className="achievements_item ts-hover__reveal-item">
                <span className="number">2020</span>
                <h5 className="title">Top user experience research</h5>
                <span className="category">Awwwards</span>

                <div className="award">
                  <div className="image" data-bg-image="./assets/images/awards/award-5.jpg"></div>
                </div>
              </div>

              <div className="achievements_item ts-hover__reveal-item">
                <span className="number">2019</span>
                <h5 className="title">Year of influence marketing</h5>
                <span className="category">Smmworld</span>

                <div className="award">
                  <div className="image" data-bg-image="./assets/images/awards/award-6.jpg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Acheivements;