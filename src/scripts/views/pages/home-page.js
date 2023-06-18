const HomePage = {
  async render() {
    return `
    <!-- ======= Hero Section ======= -->
    <section class="hero">
        <div class="content">
            <div class="information">
                <h1>Mari Konsultasi Bersama Kami</h1>
                <h1>Posyandu Remaja demi generasi bangsa!</h1>
            </div>
            <div class="button">
                <a class="login" href="http://localhost:3000/login" class="btn-get-started scrollto">Login</a>
                <a class="register" href="http://localhost:3000/register" class="btn-get-started scrollto">Register</a>
            </div>
        </div>
        <div class="hero-banner" id="hero">
            <img
                src="https://img.freepik.com/free-photo/young-girls-sharing-with-notes_23-2147656360.jpg?size=626&ext=jpg&ga=GA1.1.1659838085.1656204107&semt=ais"
                        alt="Hero 1"
                        class="active"
                    />
            <img
                src="https://img.freepik.com/free-photo/woman-with-classmates-enjoying-studies_23-2147655981.jpg?size=626&ext=jpg&ga=GA1.2.1659838085.1656204107&semt=ais"
                alt="Hero 2"
            />
            <img
                src="https://img.freepik.com/free-photo/girl-listening-classmates_23-2147655966.jpg?w=996&t=st=1687042948~exp=1687043548~hmac=392bd9bae90ec5389c40916b229a0417858810d1163fdb4927e597a6730d60cb"
                alt="Hero 3"
            />
        </div>
    </section>
    <!-- ======= Hero Section ======= -->
    
    <section id="why-us" class="why-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 d-flex align-items-stretch">
                    <div class="content">
                        <h3>Kenapa harus ke Posyandu Remaja?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in
                            reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore
                            quibusdam vel necessitatibus optio ad corporis.
                        </p>
                        <div class="text-center">
                            <a href="#services" class="more-btn">Learn More
                                <i class="bx bx-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 d-flex align-items-stretch">
                    <div class="icon-boxes d-flex flex-column justify-content-center">
                        <div class="row">
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="fa fa-comments" aria-hidden="true"></i>
                                    <h4>Nikmati kemudahan berkonsultasi</h4>
                                    <p>Konsultasi online dapat memudahkan akses para kaum milenial</p>
                                </div>
                            </div>
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    <h4>Konsultan ahli</h4>
                                    <p>Menjunjung tinggi privasi pelanggan</p>
                                </div>
                            </div>
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="fa fa-money" aria-hidden="true"></i>
                                    <h4>Biaya terjangkau buat pelajar</h4>
                                    <p>Konsultasi yang murah buat para remaja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End .content-->
                </div>
            </div>
        </div>
    </section>
    <!-- End Why Us Section -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container-fluid">
            <div class="row">
                <div
                    class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                </div>
                <div
                    class="content col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                    <h3>Hai! salam kenal dari kami YoungMinds! Solusi bercerita buat kalian</h3>
                    <p>YoungMinds adalah layanan kesehatan mental online yang siap memberikan
                        konsultasi aman dan nyaman untuk kamu. Berawal dari visi untuk meningkatkan
                        kualitas layanan kesehatan mental di Indonesia, kami mengutamakan
                        profesionalitas, standar etis, dan kenyamanan kamu sepanjang konsultasi.</p>

                    <div class="icon-box">
                        <div class="icon">
                            <i class="fa fa-video-camera" aria-hidden="true"></i>
                        </div>
                        <h4 class="title">
                            <a href="">Dapat dilakukan melalui video call</a>
                        </h4>
                        <p class="description">Bangun koneksi terbaikmu bersama para konsultan supaya
                            mereka dapat membantumu menjadi lebih tenang!</p>
                    </div>

                    <div class="icon-box">
                        <div class="icon">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <h4 class="title">
                            <a href="">Atur jadwal</a>
                        </h4>
                        <p class="description">Buatlah jadwalmu dan sesuaikan dengan konsultan</p>
                    </div>

                    <div class="icon-box">
                        <div class="icon">
                            <i class="fa fa-wifi" aria-hidden="true"></i>
                        </div>
                        <h4 class="title">
                            <a href="">Pastikan koneksi bagus</a>
                        </h4>
                        <p class="description">Selagi sesi konsultasi online berlangsung pastikan koneksimu bagus</p>
                    </div>

                </div>
            </div>

        </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
        <div class="container">

            <div class="section-title">
                <h1>Services</h1>
                <p>Apa masalah kamu?</p>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fas fa-heart-broken"></i>
                        </div>
                        <h4>
                            <a href="">Masalah kesehatan hati</a>
                        </h4>
                        <p>Masalah percintaan menjadi hal yang sering dialami oleh para remaja, tetapi
                            jangan pernah abaikan ini!</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fas fa-sad-tear"></i>
                        </div>
                        <h4>
                            <a href="">Masalah kesehatan mental</a>
                        </h4>
                        <p>Masalah mental seringkali diabaikan oleh para remaja, perundungan atau
                            bullying membuat mental mereka menjadi down</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fas fa-brain"></i>
                        </div>
                        <h4>
                            <a href="">Masalah kejiwaan</a>
                        </h4>
                        <p>Gangguan kesehatan mental yang dibiarkan tanpa penanganan dapat berkembang
                            menjadi kondisi yang disebut sakit jiwa. Beberapa orang bisa saja mengalami hal
                            tersebut akibat tekanan dan berbagai persoalan hidup yang dialaminya.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fas fa-transgender"></i>
                        </div>
                        <h4>
                            <a href="">Masalah penyimpangan seksual</a>
                        </h4>
                        <p>Kelainan seksual adalah suatu keadaan di mana seseorang memilih obyek seks
                            yang tidak wajar. Misalnya memilih binatang, mayat, anak-anak kecil sebagai
                            obyek seks, atau suka disakiti saat berhubungan seks. Kelainan ini didapat sejak
                            kecil. Bisa dari lingkungan pergaulan, akibat trauma, atau kelainan genetika.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fas fa-pills"></i>
                        </div>
                        <h4>
                            <a href="">Masalah penyalahgunaan Napza</a>
                        </h4>
                        <p>Perkembangan seseorang dalam masa anak-anak dan remaja akan membentuk
                            perkembangan diri orang tersebut di masa dewasa. Pada masa remaja, justru
                            keinginan untuk mencoba-coba, mengikuti trend dan gaya hidup, serta
                            bersenang-senang besar sekali. Walaupun semua kecenderungan itu wajar-wajar
                            saja, tetapi hal itu bisa juga memudahkan remaja untuk terdorong menyalahgunakan
                            narkoba.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fas fa-baby"></i>
                        </div>
                        <h4>
                            <a href="">Masalah kehamilan yang tidak diinginkan</a>
                        </h4>
                        <p>KTD atau kehamilan tidak diinginkan merupakan kehamilan saat dimana salah
                            satu atau kedua belah pihak dari pasangan tidak menginginkan terjadinya
                            kehamilan sama sekali atau kehamilan yang sebenarnya diinginkan tapi tidak pada
                            saat itu.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<section id="testimonials" class="testimonials">
    <div class="section-title">
        <h1>Ulasan</h1>
        <p>Apa kata mereka?</p>
    </div>
    <div class="container">
        <div class="testimonials-slider">
            <div class="testimonials-slider-inner">
                <div class="testimonial-item">
                    <img src="./images/home-page/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                    <h3>Deddy Corbuzier</h3>
                    <h4>Mahasiswa</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Dokternya sangat ramah, baik dan ngejelasinnya pun detail dari mulai
                        menyelesaikan masalah, memberikan jawaban yang tepat, memberikan solusi dan
                        caranya menghadapi masalah tersebut. Pelayanannya sangat baik dan bikin nyaman
                        banget dikala pandemi ini bisa memberikan solusi yang relevan. Terbaik Pokoknya!
                        Terimaksih Solusi Sehat
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                </div>
                <div class="testimonial-item">
                    <img src="./images/home-page/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                    <h3>Pevita Pearce</h3>
                    <h4>Pelajar</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Dokternya sangat ramah, baik dan ngejelasinnya pun detail dari mulai
                        menyelesaikan masalah, memberikan jawaban yang tepat, memberikan solusi dan
                        caranya menghadapi masalah tersebut. Pelayanannya sangat baik dan bikin nyaman
                        banget dikala pandemi ini bisa memberikan solusi yang relevan. Terbaik Pokoknya!
                        Terimaksih Solusi Sehat
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                </div>
                <div class="testimonial-item">
                    <img src="./images/home-page/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                    <h3>Ayu Tingting</h3>
                    <h4>Penjual Gorengan</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Dokternya sangat ramah, baik dan ngejelasinnya pun detail dari mulai
                        menyelesaikan masalah, memberikan jawaban yang tepat, memberikan solusi dan
                        caranya menghadapi masalah tersebut. Pelayanannya sangat baik dan bikin nyaman
                        banget dikala pandemi ini bisa memberikan solusi yang relevan. Terbaik Pokoknya!
                        Terimaksih Solusi Sehat
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                </div>
                <div class="testimonial-item">
                    <img src="./images/home-page/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                    <h3>Tanboy Kun</h3>
                    <h4>Petani</h4>
                    <p>
                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                        Dokternya sangat ramah, baik dan ngejelasinnya pun detail dari mulai
                        menyelesaikan masalah, memberikan jawaban yang tepat, memberikan solusi dan
                        caranya menghadapi masalah tersebut. Pelayanannya sangat baik dan bikin nyaman
                        banget dikala pandemi ini bisa memberikan solusi yang relevan. Terbaik Pokoknya!
                        Terimaksih Solusi Sehat
                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                </div>
                    <div class="testimonial-item">
                        <img src="./images/home-page/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                        <h3>Lionel Messi</h3>
                        <h4>Atlet Lempar Lembing</h4>
                        <p>
                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                            Dokternya sangat ramah, baik dan ngejelasinnya pun detail dari mulai
                            menyelesaikan masalah, memberikan jawaban yang tepat, memberikan solusi dan
                            caranya menghadapi masalah tersebut. Pelayanannya sangat baik dan bikin nyaman
                            banget dikala pandemi ini bisa memberikan solusi yang relevan. Terbaik Pokoknya!
                            Terimaksih Solusi Sehat
                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-flow">
        <div class="section-flow">
            <h1>Alur Konsultasi</h1>
            <p>Bagaimana cara melakukan konsultasi ?</p>
        </div>
        <div class="box">
            <div class="box-item">
                <img src="./images/home-page/flow/layanan.png" alt="Image 4">
                <h2>Cari Layanan</h2>
            </div>
            <span>></span>
            <div class="box-item">
                <img src="./images/home-page/flow/konsultan.png" alt="Image 5">
                <h2>Pilih Konsultan</h2>
            </div>
            <span>></span>
            <div class="box-item">
                <img src="./images/home-page/flow/chat.png" alt="Image 7">
                <h2>Buat Jadwal</h2>
            </div>
            <span>></span>
            <div class="box-item">
                <img src="./images/home-page/flow/jadwal.png" alt="Image 6">
                <h2>Konsultasi</h2>
            </div>
        </div>
    </section>

    <section class="ProfilTeam">
    <div class="container">
        <h1>Our Team</h1>
        <p>Kami bersinergi dengan tujuan yang sama</p>
        <div class="team-profile">
            <div class="team-member">
                <img src="./images/home-page/team/raditya.jpg" alt="Member 1">
                <a href="https://www.linkedin.com/in/bagus-nararya-nanda-raditya-785410252/">Raditya</a>
                <p>Web Developer</p>
            </div>
            <div class="team-member">
                <img src="./images/home-page/team/team1.png"" alt="Member 2">
                <a href="">Jane Smith</a>
                <p>UI/UX Designer</p>
            </div>
            <div class="team-member">
                <img src="./images/home-page/team/team1.png"" alt="Member 3">
                <a href="">David Johnson</a>
                <p>Full Stack Developer</p>
            </div>
            <div class="team-member">
                <img src="./images/home-page/team/team1.png"" alt="Member 3">
                <a href="">David Johnson</a>
                <p>Full Stack Developer</p>
            </div>
        </div>
      </div>
    </section>

    <section class="supportby">
        <h1 class="judul">Bekerja sama dengan <span class="highlight">kami</span></h1>
        <p class="paragraf"><span class="highlight">YoungMinds</span> menyediakan layanan edukasi dan konsultasi seputar masalah kesehatan mental kamu.</p>
        <div class="gambar">
            <img src="./images/home-page/partner/mbkm.png" alt="Gambar 1">
            <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1973487/1973487-1563248797755-7e69686001d3e.jpg" alt="Dicoding">
            <img src="./images/home-page/partner/posyandu.png" alt="Gambar 3">
        </div>
    </section>

    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    function animateBanner() {
      const bannerImages = document.querySelectorAll('#hero img');
      let currentIndex = 0;

      setInterval(() => {
        bannerImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % bannerImages.length;
        bannerImages[currentIndex].classList.add('active');
      }, 5000);
    }

    animateBanner();
  },
};

export default HomePage;
