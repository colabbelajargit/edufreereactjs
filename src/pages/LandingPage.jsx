import NavbarEdu from "../component/Navbar";
import { Container, Row, Col, Stack, Button, Card } from "react-bootstrap";
import "../style/landingpage.css";
import { ArrowRight } from "react-bootstrap-icons";

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
      </Stack>
    </>
  );
}
export default LandingPage;
