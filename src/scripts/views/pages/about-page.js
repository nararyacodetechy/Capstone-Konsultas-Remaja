const AboutPage = {
  async render() {
    return `
          <section class="aboutPage">
            <div class="container">
                <div class="about-logo">
                    <h2>Tentang Kami</h2>
                      <img src="./images/home-page/about/about-logo.png">
                </div>
                <div class="row">
                    <div
                          class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                          <div class="icon-box">
                              <h4>Visi</h4>
                              <p>Menjadi mitra terdepan dalam membantu remaja meraih potensi penuh mereka, membangun kesejahteraan emosional, dan menghadapi perubahan dengan percaya diri.</p>
                              <h4>Misi</h4>
                              <p>1. Menyediakan lingkungan yang aman, nyaman, dan mendukung bagi remaja untuk berbagi pengalaman, perasaan, dan tantangan yang mereka hadapi.</p>
                              <p>2. Menyediakan layanan konseling individual, kelompok, dan keluarga yang berfokus pada pemahaman diri, penyelesaian masalah, dan pengembangan keterampilan sosial.</p>
                              <p>3. Mempertajam keterampilan remaja dalam mengatasi tekanan akademik, emosional, dan sosial melalui pendekatan yang holistik dan berbasis bukti.</p>
                              <p>4. Membantu remaja memahami dan mengelola emosi mereka dengan baik, sehingga mereka dapat mengambil keputusan yang bijaksana dan menghadapi tantangan dengan ketenangan.</p>
                          </div>
                    </div>
                      <div
                          class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-2 px-lg-4">
                          <div class="about-text">
                          <h3>Hai! salam kenal dari kami YoungMinds! Solusi bercerita buat kalian</h3>
                          <p class="indent">YoungMinds adalah perusahaan jasa konsultasi remaja yang berkomitmen untuk membantu remaja menghadapi berbagai tantangan dan perubahan dalam hidup mereka. Dengan pengalaman dan pengetahuan yang luas di bidang ini, kami menyediakan layanan konseling dan pendampingan yang mendukung perkembangan pribadi, kesejahteraan emosional, dan keberhasilan akademik remaja.</p>
                          <p class="indent">Tim profesional kami terdiri dari konselor berlisensi dan ahli yang berdedikasi untuk bekerja dengan remaja. Kami mengadopsi pendekatan yang holistik, memahami bahwa setiap remaja adalah individu yang unik dengan kebutuhan dan potensi masing-masing. Kami menawarkan lingkungan yang aman dan mendukung di mana remaja dapat merasa nyaman untuk berbagi dan mengungkapkan perasaan mereka tanpa takut dihakimi atau dipermalukan.</p>
                          <p class="indent">Layanan konsultasi remaja kami meliputi berbagai bidang, seperti masalah emosional, tekanan akademik, hubungan sosial, pengambilan keputusan, kecemasan, dan banyak lagi. Kami bekerja sama dengan remaja dan orang tua mereka untuk merumuskan strategi yang efektif dalam mengatasi masalah yang dihadapi dan mencapai tujuan yang diinginkan. Kami mengutamakan kerahasiaan dan privasi sebagai nilai inti dalam setiap interaksi dengan klien kami.</p>
                          <p class="indent">Setiap sesi konseling dilakukan secara pribadi dan informasi yang dibagikan dijaga kerahasiaannya dengan ketat. Kami berharap dapat menjadi mitra yang setia dalam perjalanan remaja menuju kedewasaan. Bersama-sama, kita dapat mengatasi tantangan, menemukan solusi yang tepat, dan membantu remaja meraih potensi penuh mereka. Hubungi kami hari ini untuk menjadwalkan konsultasi dan mulai membangun masa depan yang cerah bagi remaja Anda.</p>
                          </div>
                    </div>

            </div>
      </section>
        `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default AboutPage;
