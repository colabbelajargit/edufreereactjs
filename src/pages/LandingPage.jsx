import NavbarEdu from "../component/Navbar";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import "../style/landingpage.css";
import { ArrowRight } from "react-bootstrap-icons";

function LandingPage() {
  return (
    <>
      <Stack gap={3}>
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
      </Stack>
    </>
  );
}
export default LandingPage;
