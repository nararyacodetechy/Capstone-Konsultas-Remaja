const BookingPage = {
	async render() {
		return `
    <h1 class="lable-booking">Booking</h1>
    <section class="booking-container">
        <div class="booking">
                <h2>Pilih Jadwal konsultasi</h2>
                <div>
                    <form>
                        <label>Tanggal</label>
                        <input type="date" id="konsul-date" name="date" placeholder="Pilih tanggal konsultasi..">

                        <label>Jam</label>
                        <input type="time" id="konsul-time" name="time" placeholder="Pilih jam konsultasi..">

                        <label>Jenis Pertemuan</label>
                        <select id="on-off" name="">

                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                        
                        </select>
                    
                        <input type="submit" value="Submit">
                    </form>
                </div>
        </div>
        <div class="selected-profile">
            <h1>Profile Konselor</h1>
            <div>
            <img src="https://img.icons8.com/bubbles/50/user.png" alt="profile konselor" />
            <h1>Dr. Handoko</h1>
            </div>
            <h2>Psikolog</h2>
            <h2>Insight Psikolog</h2>
            <div class="rating">
                <div class="rating-star">*</div>
                <div class="rating-experience">#</div>
            </div>
            <div class="price">Rp150.000</div>
            <div class="button">
            <button>Detail</button>
            <button>Lanjutkan</button>
            </div>
        </div>
    </section>
    
    `;
	},

	async afterRender() {
		// Fungsi ini akan dipanggil setelah render()
	}
};

export default BookingPage;
