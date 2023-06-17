const CheckoutPage = {
	async render() {
	return `

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
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
	}
};

export default CheckoutPage;