import React from "react";
import Layout_seg from "../../shared/layout/layout2/Layout_seg";

function Albuns() {
  return (
    <>
      <Layout_seg>
        <div class="col">
          <div class="container" style={{ borderColor: "var(--bs-secondary)" }}>
            <h1>Álbun</h1>
            <div class="card">
              <div class="card-body">
                <div
                  class="card"
                  style={{ width: "222px", borderStyle: "none" }}
                >
                  <div
                    class="card-body"
                    style={{
                      textAlign: "center",
                      borderStyle: "dashed",
                      borderColor: "var(--bs-gray-500)",
                    }}
                  >
                    <h4 class="card-title">Selecione uma foto</h4>
                    <i
                      class="fas fa-camera"
                      style={{ fontSize: "86px", color: "var(--bs-primary)" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="row flex-box flex-wrap-wrap">
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Nature"
                  href="https://oxentesensei.com.br/wp-content/uploads/2023/01/Kakashi-Naruto-Quarta-Grande-Guerra-Ninja-capa.jpg"
                >
                  <img
                    class="img-fluid"
                    src="https://oxentesensei.com.br/wp-content/uploads/2023/01/Kakashi-Naruto-Quarta-Grande-Guerra-Ninja-capa.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Technology"
                  href="https://nerdhits.com.br/wp-content/uploads/2022/03/kakashi-hatake-768x402.jpg"
                >
                  <img
                    class="img-fluid"
                    src="https://nerdhits.com.br/wp-content/uploads/2022/03/kakashi-hatake-768x402.jpg"
                  />
                </a>
              </div>

              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Travel"
                  href="https://upload.wikimedia.org/wikipedia/it/thumb/2/27/Kakashi_Hatake.png/800px-Kakashi_Hatake.png"
                >
                  <img
                    class="img-fluid"
                    src="https://upload.wikimedia.org/wikipedia/it/thumb/2/27/Kakashi_Hatake.png/800px-Kakashi_Hatake.png"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Food"
                  href="https://www.looper.com/img/gallery/the-untold-truth-of-kakashi-hatake-from-naruto/the-untold-truth-of-kakashi-hatake-from-naruto-1650275462.jpg"
                >
                  <img
                    class="img-fluid"
                    src="https://www.looper.com/img/gallery/the-untold-truth-of-kakashi-hatake-from-naruto/the-untold-truth-of-kakashi-hatake-from-naruto-1650275462.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Music"
                  href="https://i.ytimg.com/vi/_Vcamqn1NaQ/maxresdefault.jpg"
                >
                  <img
                    class="img-fluid"
                    src="https://i.ytimg.com/vi/_Vcamqn1NaQ/maxresdefault.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Photography"
                  href="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/01/kakashi1-1.jpg"
                >
                  <img
                    class="img-fluid"
                    src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/01/kakashi1-1.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout_seg>
    </>
  );
}

export default Albuns;
