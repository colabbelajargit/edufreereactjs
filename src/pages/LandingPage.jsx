import NavbarEdu from "../component/Navbar";
import { Container, Row, Col, Stack, Button, Card, Dropdown } from "react-bootstrap";
import "../style/landingpage.css";
import { ArrowRight } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock, faPlayCircle, faUsers } from "@fortawesome/free-solid-svg-icons";
import TestimonialCarousel from "../component/caousel";
import Accordion from "react-bootstrap/Accordion";

function LandingPage() {
  return (
    <>
      <Stack gap={0}>
        <NavbarEdu />
        <div className="hero hero-view mt-5 p-lg-5" id="hero">
          <Container>
            <Row className="mb-md-0 mb-5 text-center">
              <Col lg={6} py-lg-5>
                <div className="hero-content py-5">
                  <h1 className="text-lg-start fw-bold main-title text-white fw-semibold fs-2 mb-3 ">Bangun dan Wujudkan Cita Bersama EDUFREE</h1>
                  <p className="text-lg-start mt-lg-2 main-content fs-5  text-white">EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.</p>

                  <div className="mt-4 text-lg-start mt-5 pt-2">
                    <Button variant="warning px-4 py-2">Lihat Cursus</Button>{" "}
                    <Button variant="warning px-4 py-2" style={{ border: "none", background: "transparent", color: "white" }}>
                      Lihat Alur Belajar <ArrowRight style={{ marginRight: "5px" }} />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="text-center text-lg-start mt-3">
                  <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688388821/Group_2621_be8sr1.png" className="hero-img img-fluid float-end mx-5" style={{ width: "75%" }} alt="Hero" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="rating-view p-3">
          <Container>
            <Row className="d-flex justify-content-between">
              <Col xs={3} md={1} className="stats-detail">
                <h2 className="fw-semibold">2100K</h2>
                <p>Members</p>
              </Col>
              <Col xs={3} md={1} className="stats-detail">
                <h2 className="fw-semibold">100K</h2>
                <p>Countries</p>
              </Col>
              <Col xs={3} md={1} className="stats-detail">
                <h2 className="fw-semibold">150K</h2>
                <p>Hotels</p>
              </Col>
              <Col xs={3} md={2} className="stats-detail mt-5 fs-3 fw-bold">
                <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688488152/Vector5_nzgr4x.png" style={{ width: "30px" }} alt="Owthest" className="me-3" />
                Lorem
              </Col>
              <Col xs={3} md={2} className="stats-detail mt-5 fs-3 fw-bold">
                <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688487658/Vector1_l9jolm.png" style={{ width: "30px" }} alt="Owthest" className="me-3" />
                Ditlance
              </Col>
              <Col xs={3} md={2} className="stats-detail mt-5 fs-3 fw-bold">
                <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688487658/Vector2_zztvve.png" style={{ width: "30px" }} alt="Owthest" className="me-3" />
                Owthest
              </Col>
              <Col xs={3} md={2} className="stats-detail mt-5 fs-3 fw-bold">
                <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688487658/Vector3_tsjiur.png" style={{ width: "30px" }} alt="Owthest" className="me-3" />
                Neovasi
              </Col>
            </Row>
          </Container>
        </div>

        <div className="keuntungan-cursus mt-5 p-lg-5">
          <h2 className="text-center fs-3 fw-semibold">
            Keuntungan Bergabung Dengan <br />
            E-Learning EDUFREE
          </h2>
        </div>
        <div className="">
          <Container>
            <Row className="mx-auto mt-5">
              <Col lg={4} md={6} sm={12} className=" number mb-5">
                <Card className="number-card" style={{ backgroundColor: "#F4F6FC" }}>
                  <Container className="p-3 number">
                    <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688591107/num-1_p5naqp.png" className="imgnumber" />
                    <h3 class="my-3 fw-medium fs-3">Kursus Gratis</h3>
                    <p className="fw-regular">Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu</p>
                  </Container>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className=" number mb-5">
                <Card className="number-card" style={{ backgroundColor: "#F4F6FC" }}>
                  <Container className="p-3 number">
                    <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688591107/num-2_qqit37.png" className="imgnumber" />
                    <h3 class="my-3 fw-medium fs-3">Akses Selamanya</h3>
                    <p className="fw-regular">Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru </p>
                  </Container>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className=" number mb-5">
                <Card className="number-card" style={{ backgroundColor: "#F4F6FC" }}>
                  <Container className="p-3 number">
                    <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688591107/num-3_k31dvk.png" className="imgnumber" />
                    <h3 class="my-3 fw-medium fs-3">Grup Konsultasi</h3>
                    <p className="fw-regular">Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan dan kamu juga bisa mebuka diskusi baru </p>
                  </Container>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className=" number mb-5">
                <Card className="number-card" style={{ backgroundColor: "#F4F6FC" }}>
                  <Container className="p-3 number">
                    <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688591107/num-4_i5pews.png" className="imgnumber" />
                    <h3 className="my-3 fw-medium fs-3">Sertifikat dan Portofolio</h3>
                    <p className="fw-regular">Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan</p>
                  </Container>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className=" number mb-5">
                <Card className="number-card" style={{ backgroundColor: "#F4F6FC" }}>
                  <Container className="p-3 number">
                    <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688591107/num-5_qxkv0d.png" className="imgnumber" />
                    <h3 className="my-3 fw-medium fs-3">Belajar Lebih Terarah</h3>
                    <p className="fw-regular">Kursus menyediakan kursus dari level dasar hingga expert sehingga semua bisa belajar dengan layanan yang kami sediakan</p>
                  </Container>
                </Card>
              </Col>
              <Col lg={4} md={6} sm={12} className=" number mb-5">
                <Card className="number-card" style={{ backgroundColor: "#F4F6FC" }}>
                  <Container className="p-3 number">
                    <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688591107/num-6_dwslv9.png" className="imgnumber" />
                    <h3 className="my-3 fw-medium fs-3">Instruktur Mahir</h3>
                    <p className="fw-regular">Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya</p>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="tentangkami-view mt-5 " id="tentangkami">
          <Container>
            <Row className="mb-md-0 mb-5 text-center">
              <Col lg={6} py-lg-5>
                <div className="tentangkami-content py-5">
                  <h5 className="text-lg-start fw-5">Tentang Kami</h5>
                  <h1 className="text-lg-start fw-bold main-title  fw-semibold fs-2 mb-3 ">EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h1>
                  <p className="text-lg-start mt-lg-2 main-content fs-5 ">Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="text-center text-lg-start mt-3">
                  <img src="https://res.cloudinary.com/ddzkvbulh/image/upload/v1688599882/feature-image_y9dhas.png" className="hero-img img-fluid float-end mx-5" style={{ width: "75%" }} alt="Hero" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="recomendasi mt-5">
          <Container className="mt-5">
            <Row className="mb-md-0 mb-5 text-center ">
              <Col lg={6} py-lg-5>
                <h1 className="text-lg-start fw-bold main-title fw-semibold fs-2 mb-3">
                  Rekomendasi Kursus <br /> Untuk Kamu
                </h1>
              </Col>
              <Col lg={6}>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic" className="me-2" style={{ backgroundColor: "transparent", color: "black", border: "none" }}>
                    Pilih Kategori
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                  <Button variant="warning px-4 ">Lihat Cursus</Button>{" "}
                </Dropdown>
              </Col>
            </Row>
            <hr />
          </Container>
        </div>
        <Container className="mb-5">
          <Row className="mx-auto mt-5">
            <Col lg={4} md={6} sm={12} className="mb-5">
              <a class="course-card" href="index.html">
                <img class="imgcourse" src="https://res.cloudinary.com/dlrskr4dh/image/upload/v1688725052/unsplash_m_HRfLhgABo_nvsgt9.png" alt="course" />

                <div class="rating-box pe-3">
                  <div class="rating-star ms-2">
                    <FontAwesomeIcon icon={faStar} /> {/* Ganti <i> dengan <FontAwesomeIcon> */}
                  </div>
                  <div class="rating-text">4.9</div>
                </div>

                <Container>
                  <h4 class="mt-3 fw-medium title">Dasar Pemrograman WEB</h4>
                  <h5 class="desc fw-light">Materi pembelajarn mengenai pembuatan website tingkat pemula</h5>
                </Container>
                <Container className="mt-3">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faClock} /> 4,5 jam
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faPlayCircle} /> 20 video
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faUsers} /> 1900 siswa
                      </div>
                    </div>
                  </div>
                </Container>
              </a>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-5">
              <a class="course-card" href="index.html">
                <img class="imgcourse" src="https://res.cloudinary.com/dlrskr4dh/image/upload/v1688555827/samples/edufree/pexels-lukas-590016_1_qeibtu.png" alt="course" />

                <div class="rating-box pe-3">
                  <div class="rating-star ms-2">
                    <FontAwesomeIcon icon={faStar} /> {/* Ganti <i> dengan <FontAwesomeIcon> */}
                  </div>
                  <div class="rating-text">4.9</div>
                </div>

                <Container>
                  <h4 class="mt-3 fw-medium title">Digital Marketing 101</h4>
                  <h5 class="desc fw-light">Materi mengenai strategi dan konsep marketing pemula</h5>
                </Container>
                <Container className="mt-3">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faClock} /> 4,5 jam
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faPlayCircle} /> 20 video
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faUsers} /> 930 siswa
                      </div>
                    </div>
                  </div>
                </Container>
              </a>
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-5">
              <a class="course-card" href="index.html">
                <img class="imgcourse" src="https://res.cloudinary.com/dlrskr4dh/image/upload/v1688555789/samples/edufree/pexels-olya-kobruseva-5561923_1_v003te.png" alt="course" />

                <div class="rating-box pe-3">
                  <div class="rating-star ms-2">
                    <FontAwesomeIcon icon={faStar} /> {/* Ganti <i> dengan <FontAwesomeIcon> */}
                  </div>
                  <div class="rating-text">4.9</div>
                </div>

                <Container>
                  <h4 class="mt-3 fw-medium title">Data Science Dasar</h4>
                  <h5 class="desc fw-light">Materi pembelajaran mengenai dasar-dasar data science</h5>
                </Container>
                <Container className="mt-3">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faClock} /> 4,5 jam
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faPlayCircle} /> 20 video
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="icon-text">
                        <FontAwesomeIcon icon={faUsers} /> 1030 siswa
                      </div>
                    </div>
                  </div>
                </Container>
              </a>
            </Col>
          </Row>
        </Container>
        <div className="couselbg mb-5">
          <Container className="mt-5 mb-5">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h1>Kata Mereka Tentang</h1>
                <h1> Kursus EDUFREE</h1>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <TestimonialCarousel />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="mt-5">
          <Container>
            <Row>
              <Col sm={12} md={4} lg={4}>
                <h1>
                  Frequently Asked <br /> Questions
                </h1>
              </Col>
              <Col sm={12} md={8} lg={8}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
          \
        </div>
      </Stack>
    </>
  );
}
export default LandingPage;
