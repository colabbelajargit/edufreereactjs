import React from "react";
import "../style/landingpage.css";

function Footer() {
  return (
    <footer className="footercolo px-md-0 px-3 ">
      <div className="container">
        <div className="row pt-5 pb-5 d-flex justify-content-around">
          <div className="col-md-4 col-lg-3">
            <img src="https://res.cloudinary.com/damsz0xlx/image/upload/v1683201273/Assets/white-logo_oh7nw5.png" width="180" alt="" />
            <p className="fw-medium text-white mt-4 fs-6">Cegah stunting itu penting bersama SIPENTING. #SayNoToStunting</p>
            <div className="d-flex justify-content ms-auto footericons">
              <a href="#" className="me-3 text-decoration-none">
                <i className="bi bi-facebook fs-2"></i>
              </a>
              <a href="#" className="me-3 text-decoration-none">
                <i className="bi bi-instagram fs-2"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="bi bi-whatsapp fs-2"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-4 mt-md-0 ffotermenu">
            <div>
              <h5 className="text-white fw-bold fs-5">Halaman Menu</h5>

              <div className="fw-medium text-white">
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Beranda
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Cek Stunting
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Layanan Kami
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Masuk
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Daftar
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-4 mt-md-0">
            <div>
              <h5 className="text-white fw-bold fs-5">Layanan</h5>

              <div className="fw-medium text-white">
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Konsultasi
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Cek IMT
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href=" ">
                  Artikel
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 mt-4 mt-md-0">
            <div>
              <h5 className="text-white fw-bold fs-5">Kontak Kami</h5>

              <div className="fw-medium text-white">
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/#home ">
                  <i className="bi bi-envelope fs-3"></i> halo@sipenting.net
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/#pengaduan ">
                  <i className="bi bi-telephone fs-3"></i> +6289955000233 (cs)
                </a>
                <a className="d-block text-white mb-3 text-decoration-none fs-6" href="/#pengaduan ">
                  <i className="bi bi-geo-alt fs-3"></i> Jl. Bahagia No. 20 B, Bandung, Jawa Barat 40238
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row mt-3 d-flex justify-content">
            <div className="col-lg-4 fs-6 fw-medium text-white fs-7">© 2023 SIPENTING Teams All rights reserved</div>
            <div className="col-lg-3 fs-6 fw-medium text-white ms-auto fs-7">Syarat & Ketentuan</div>
            <div className="col-lg-3 fs-6 fw-medium text-white ms-auto fs-7">Kebijakan Privasi</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
