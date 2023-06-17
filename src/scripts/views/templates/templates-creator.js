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
                            <b>${consultant.practicePlace}</b>
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
                        <h5>RP${consultant.price}</h5>
                        <div class="button">
                            <a href="#/detail-consultant-page" class="detail">Detail</a>
                            <a href="" class="schedule">Schedule</a>
                        </div>
                    </div>
                </div>
`;

const createBookingConsultantTemplate = (consultant) => `
<h1 class="lable-booking">Booking</h1>
    <section class="booking-container">
        <div class="booking">
                <h2>Pilih Jadwal konsultasi</h2>
                <div>
                    <form>
                    ${consultant.readySchedule
                      .map(
                        (ready) => `
                    <input type="radio" value="['${ready.date}','${ready.time}']" id="${ready.date}-${ready.time}">
                    <label for="${ready.date}-${ready.time}">${ready.date} ${ready.time}</label>
                    `
                      )
                      .join('')}
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
            <div class="price">RP${consultant.price}</div>
            <div class="button">
            <button>Detail</button>
            <button>Lanjutkan</button>
            </div>
        </div>
    </section>
`;

const createCheckoutConsultantTemplate = (consultant) => `
<div class="grid-container">
            <div class="countdown-container">
                <span>
                    Batas waktu pembayaran! 00:01:59
                </span>
            </div>

            <div class="checkout-label">
                <h1>Pembayaran</h1>
            </div>

            <div class="transaction-container">
                <div class="detail-container">
                    <img src="https://img.icons8.com/bubbles/50/user.png" alt="gopay" />    
                    <h1>Profile</h1>
                    <p class="specialist">Insight Psikologi</p>
                    <div class="rating">
                        <div class="rating-star">*</div>
                        <div class="rating-experience">#</div>
                    </div>
                    <p class="price">Rp350.000</p>
                    <div class="white button">
                        <button>Detail</button>
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
                        <p class="right">Rp350.000</p>
                        <p class="left">Diskon</p>
                        <p class="right">-Rp50.000</p>
                    </div>
                    <div class="line dash"></div>
                    <div class="price-sum">
                        <p>Total Tagihan</p>
                        <p>Rp350.000</p>
                    </div>
                    <div class="terms-conditions">
                        <p>Dengan melanjutkan transaksi ini, maka saya 
                        telah menyetujui <span>Syarat & Ketentuan YoungMinds</span></p>
                    </div>
                    <div class="continue-button">
                        <button>Lanjutkan</button>
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
  createBookingConsultantTemplate,
  createCheckoutConsultantTemplate,
  createCardArticleTemplate,
};
