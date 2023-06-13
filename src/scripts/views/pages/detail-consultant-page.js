const DetailConsultantPage = {
  async render() {
    return `
      <section class="detail-consultant">
        <div class="main-title">
          <label for="category-consultant">Dokter Psikologi</label>
        </div>
        <div class="container detail-consultant">
          <div class="detail-main">
            <div class="detail-card cards">
              <div class="detail-profile">
                <img src="https://static.sehatq.com/cdn-cgi/image/format=auto,width=1080,quality=90/telemed/profile/20210804141201">
                <div class="information-detail">
                  <h5>Hanifa Asra Silmi M.Psi, Psikolog</h5>
                  <p>Psikolog</p>
                  <span>Rp. 150.000</span>
                </div>
              </div>
              <div class="notice">
                <div class="icon-notice">
                  <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <p>Dokter belum bisa melayani konsultasi. Silahkan pilih jadwal lain untuk chat dengan dokter</p>
              </div>
            </div>
            <div class="cards card-information">
              <h5>Tentang Konsultan</h5>
              <table>
                <tr>
                  <th>No STR.</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Alumni</th>
                  <td>Universitas Indonesia</td>
                </tr>
                <tr>
                  <th>Tempat Praktik</th>
                  <td>Insight Teknologi</td>
                </tr>
                <tr>
                  <th>Spesialisasi</th>
                  <td>
                    <p>Hanifa Asra Silmi, M.Psi, Psikolog merupakan seorang psikolog. Beliau merupakan lulusan S1 Psikologi Universitas Indonesia. Beliau melanjutkan S2 Magister Profesi Psikologi Pendidikan Universitas Indonesia. Saat ini beliau berpraktik di Insight Psikologi di Jakarta Timur.</p>
                    <p>Hanifa Asra Silmi, M.Psi, Psikolog fokus menangani tumbuh kembang anak dan remaja. Beliau juga berpengalaman dalam dan mendampingi orangtua berkaitan dengan parenting skill.</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="navigation-side">
            <div class="experience-rates cards">
              <div class="object">
                <i class="fa-solid fa-business-time"></i>
                <b>Pengalaman</b>
                <p>2 Tahun</p>
              </div>
              <div class="object">
                <i class="fa-solid fa-star"></i>
                <b>Rating <span>(Ulasan)</span></b>
                <p>5 <span>(7)</span></p>
              </div>
            </div>
            <div class="schedule-side cards">
              <h5>Jadwal Terjadwal</h5>
              <div class="list-schedule">
                <div class="schedule">
                  <p>Sabtu, 27 Mei 2023</p>
                  <p>09.00 - 09.30 A.M. WIB</p>
                </div>
                <div class="schedule">
                  <p>Sabtu, 27 Mei 2023</p>
                  <p>09.00 - 09.30 A.M. WIB</p>
                </div>
                <div class="schedule">
                  <p>Sabtu, 27 Mei 2023</p>
                  <p>09.00 - 09.30 A.M. WIB</p>
                </div>
                <div class="schedule">
                  <p>Sabtu, 27 Mei 2023</p>
                  <p>09.00 - 09.30 A.M. WIB</p>
                </div>
              </div>
            </div>
            <a href="/#/booking-page" class="cards button-schedule">Make Schedule</a>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default DetailConsultantPage;
