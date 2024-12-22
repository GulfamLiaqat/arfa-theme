import React from "react";

const Blogs = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title text-center">
              <h6 className="subtitle">Blog & Article</h6>
              <h2 className="title">ALatest News & Articles</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <article className="blog_item">
              <div className="blog_item_meta">
                <span className="date">July 25. 2024</span>
                <span className="comment">
                  <a href="single-blog.html">
                    <i className="flaticon-message-love"></i>
                  </a>
                </span>
              </div>

              <h5 className="blog_item_title">
                <a href="single-blog.html">
                  Crafting Impactful Brands with Digital Creativity
                </a>
              </h5>
              <div className="blog_item_excerpt">
                Discover how digital creativity elevates brands, combining
                strategy and design…
              </div>

              <a href="single-blog.html" className="ts-btn-icon blog_item_btn">
                <span className="icon_bar"></span>
              </a>

              <div className="bottom_shape"></div>
            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article className="blog_item">
              <div className="blog_item_meta">
                <span className="date">July 25. 2024</span>
                <span className="comment">
                  <a href="single-blog.html">
                    <i className="flaticon-message-love"></i>
                  </a>
                </span>
              </div>

              <h5 className="blog_item_title">
                <a href="single-blog.html">
                  Why Brands Need Creative Digital Agencies
                </a>
              </h5>
              <div className="blog_item_excerpt">
                Learn why creative digital agencies are essential for brand
                growth today…
              </div>

              <a href="single-blog.html" className="ts-btn-icon blog_item_btn">
                <span className="icon_bar"></span>
              </a>

              <div className="bottom_shape"></div>
            </article>
          </div>

          <div className="col-xl-4 col-md-6">
            <article className="blog_item">
              <div className="blog_item_meta">
                <span className="date">July 25. 2024</span>
                <span className="comment">
                  <a href="single-blog.html">
                    <i className="flaticon-message-love"></i>
                  </a>
                </span>
              </div>

              <h5 className="blog_item_title">
                <a href="single-blog.html">
                  Transforming Ideas into Digital Success Stories
                </a>
              </h5>
              <div className="blog_item_excerpt">
                See how agencies turn concepts into impactful digital brand
                experiences…
              </div>

              <a href="single-blog.html" className="ts-btn-icon blog_item_btn">
                <span className="icon_bar"></span>
              </a>

              <div className="bottom_shape"></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
