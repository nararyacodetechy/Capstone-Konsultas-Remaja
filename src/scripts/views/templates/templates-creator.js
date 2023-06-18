/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

const createCardConsultantsTemplate = (consultant) => `
    <div class="card-consultant">
                    <div class="content-card">
                        <div class="profile">
                            <img tabindex="0" class="card-item_poster lazyload" src="${consultant.avatar}" alt="${consultant.name}">
                        </div>
                        <div class="description">
                            <h5>${consultant.name}</h5>
                            <p>${consultant.specialist}</p>
                            <b class="practice">${consultant.practicePlace}</b>
                            <div class="rate-experience">
                                <div class="rates">
                                    <span>⭐</span>
                                    <b>${consultant.star}</b>
                                </div>
                                <div class="experience">
                                    <i class="fa-solid fa-business-time"></i>
                                    <b>${consultant.experience} tahun</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-card">
                        <h5>${consultant.price}</h5>
                        <div class="button">
                            <a href="/#/detail-consultant-page/${consultant.id}" class="detail">Detail</a>
                            <a href="/#/booking-page/${consultant.id}" class="schedule">Schedule</a>
                        </div>
                    </div>
                </div>
`;

const createDetailConsultantTemplate = (consultant) => `
    <section class="detail-consultant">
        <div class="main-title">
          <label for="category-consultant">Dokter Psikologi</label>
        </div>
        <div class="container detail-consultant">
          <div class="detail-main">
            <div class="detail-card cards">
              <div class="detail-profile">
                <img src="${consultant.avatar}">
                <div class="information-detail">
                  <h5>${consultant.name}</h5>
                  <p>${consultant.specialist}</p>
                  <span>${consultant.price}</span>
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
                  <td>${consultant.noSTR}</td>
                </tr>
                <tr>
                  <th>Alumni</th>
                  <td>${consultant.alumni}</td>
                </tr>
                <tr>
                  <th>Tempat Praktik</th>
                  <td>${consultant.practicePlace}</td>
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
                <p>${consultant.experience} Tahun</p>
              </div>
              <div class="object">
                <i class="fa-solid fa-star"></i>
                <b>Rating <span>(Ulasan)</span></b>
                <p>${consultant.star}<span>(7)</span></p>
              </div>
            </div>
            <div class="schedule-side cards">
              <h5>Jadwal Terjadwal</h5>
              <div class="list-schedule">
              ${consultant.readySchedule
                .map(
                  (ready) => `
              <div class="schedule">
                  <p>${ready.date}</p>
                  <p>${ready.time}</p>
                </div>`
                )
                .join('')}
                <div class="schedule">
                  <p>Sabtu, 27 Mei 2023</p>
                  <p>09.00 - 09.30 A.M. WIB</p>
                </div>
              </div>
            </div>
            <a href="/#/booking-page/${
              consultant.id
            }" class="cards button-schedule">Buat Jadwal</a>
          </div>
        </div>
      </section>
`;

const createBookingConsultantTemplate = (consultant) => `
    <section class="booking-container">
        <div class="booking">
                <h2>Pilih Jadwal konsultasi</h2>
                <div>
                    <form>
                      <select>${consultant.readySchedule
                        .map(
                          (ready) => `
                              <option value="['${ready.date}','${ready.time}']"><p>${ready.date}</p>
                              <p>${ready.time}</p></option>
                          `
                        )
                        .join('')}

                      </select>
                    </form>
                </div>
        </div>
        <div class="selected-profile">
            <h1>Profile Konsultan</h1>
            <div>
            <img src="${consultant.avatar}" alt="profile konselor" />
            <h1>${consultant.name}</h1>
            </div>
            <h2>${consultant.specialist}</h2>
            <h2>${consultant.practicePlace}</h2>
            <div class="rate-experience">
                                <div class="rates">
                                    <span>⭐</span>
                                    <b>${consultant.star}</b>
                                </div>
                                <div class="experience">
                                    <i class="fa-solid fa-business-time"></i>
                                    <b>${consultant.experience} tahun</b>
                                </div>
                            </div>
            <div class="price">${consultant.price}</div>
            <div class="button">
              <button><a href="/#/detail-consultant-page/${
                consultant.id
              }">Detail</a></button>
              <button><a href="/#/checkout-page/${
                consultant.id
              }">Lanjutkan</a></button>
            </div>
        </div>
    </section>
`;

const createCheckoutConsultantTemplate = (consultant) => `
<div class="grid-container">
            <div class="countdown-container">
                <span>
                    Batas waktu pembayaran! <span id="countdown">00:00:00</span>
                </span>
            </div>

            <div class="checkout-label">
                <h1>Pembayaran</h1>
            </div>

            <div class="transaction-container">
                <div class="detail-container">
                    <img src="${consultant.avatar}" alt="${consultant.name}" />    
                    <div class="information-detail-transaction">
                      <h1>${consultant.name}</h1>
                      <p class="specialist">${consultant.specialist}</p>
                      <div class="rating">
                          <div class="rates">
                              <span>⭐</span>
                              <b>${consultant.star}</b>
                          </div>
                          <div class="experience">
                              <i class="fa-solid fa-business-time"></i>
                              <b>${consultant.experience} tahun</b>
                          </div>
                      </div>
                      <p class="price">${consultant.price}</p>
                      <div class="white button">
                          <a href="/#/detail-consultant-page/${consultant.id}"><button>Detail</button></a>
                      </div>
                    </div>
                </div>

                <div class="payment-label">
                    <h1>Pilihan Pembayaran</h1>
                </div>

                <div class="payment-container">
                    <div class="e-wallet">
                        <form action="">
                            <p class="label payment">E-Wallet</p>
                            <input type="radio" id="gopay" name="fav_language" value="Gopay">
                            <label for="html">Gopay</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                            <div class="line-solid-1"></div>
                            <input type="radio" id="linkaja" name="fav_language" value="LinkAja">
                            <label for="css">LinkAja</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                            <div class="line-solid-1"></div>
                            <input type="radio" id="ovo" name="fav_language" value="Ovo">
                            <label for="javascript">Ovo</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                            <div class="line-solid-1"></div>
                            <input type="radio" id="dana" name="fav_language" value="Dana">
                            <label for="javascript">Dana</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                        </form>
                    </div>

                    <div class="virtual-account">
                        <form action="">
                            <p class="label payment">Virtual Account Transfer</p>
                            <input type="radio" id="gopay" name="fav_language" value="Gopay">
                            <label for="html">Gopay</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                            <div class="line-solid-1"></div>
                            <input type="radio" id="linkaja" name="fav_language" value="LinkAja">
                            <label for="css">LinkAja</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                            <div class="line-solid-1"></div>
                            <input type="radio" id="ovo" name="fav_language" value="Ovo">
                            <label for="javascript">Ovo</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                            <div class="line-solid-1"></div>
                            <input type="radio" id="dana" name="fav_language" value="Dana">
                            <label for="javascript">Dana</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                        </form>
                    </div>

                    <div class="credit-card">
                        <form action="">
                            <p class="label payment">Kartu Kredit</p>
                            <input type="radio" id="dana" name="fav_language" value="Dana">
                            <label for="javascript">Dana</label>
                            <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />
                        </form>
                    </div>

                    
                </div>
                <div class="reciept-container">
                    <form>
                        <input type="text" id="discount" name="discount" placeholder="Masukan Kode">
                    </form>
                    <div class="line-solid-2"></div>    
                    <h1>Ringkasan</h1>
                    <div class="line-solid-1"></div>
                    <div class="price-count">
                        <p class="left">Total Harga Produk</p>
                        <p class="right">${consultant.price}</p>
                        <p class="left">Diskon</p>
                        <p class="right">-Rp50.000</p>
                    </div>
                    <div class="line dash"></div>
                    <div class="price-sum">
                        <p>Total Tagihan</p>
                        <p>${consultant.price}</p>
                    </div>
                    <div class="terms-conditions">
                        <p>Dengan melanjutkan transaksi ini, maka saya 
                        telah menyetujui <span>Syarat & Ketentuan YoungMinds</span></p>
                    </div>
                    <div class="continue-button">
                        <button>Bayar</button>
                    </div>
                   
                    <div id="paymentSuccessPopup" class="popup">
                    <div class="popup-content">
                      <h3>Pembayaran Berhasil!</h3>
                      <p>Terima kasih atas pembayaran Anda.</p>
                      <div class="price-details">
                        <div class="price-count">
                          <p class="left">Total Harga Produk</p>
                          <p class="right">${consultant.price}</p>
                          <p class="left">Diskon</p>
                          <p class="right">-Rp50.000</p>
                        </div>
                      </div>
                      <button class="close-button">Kembali ke Halaman Utama</button>
                    </div>
                  </div>
                  

                </div>
            </div>
        </div>
`;

const createCardArticleTemplate = (article) => `
    <a href="${article.url}" class="list-articles">
        <img src="${article.image}">
        <div class="information">
            <h3>${article.title}</h3>
            <p class="category">${article.category}</p>
            <p class="description">${article.description}</p>
            <div class="writer">
                <p>${article.createdAt}</p> |
                <p>${article.writer}</p>
            </div>
        </div>
    </a>
`;

export {
  createCardConsultantsTemplate,
  createDetailConsultantTemplate,
  createBookingConsultantTemplate,
  createCheckoutConsultantTemplate,
  createCardArticleTemplate,
};
