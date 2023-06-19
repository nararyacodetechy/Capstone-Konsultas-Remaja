const NonePage = {
  async render() {
    return `
        <section class="none-page">
          <div class="container none-page">
             <img src="https://static.sehatq.com/monorepo-cdnassets/prod/public/images/empty.svg">
             <div class="description-none-found">
                <h3>Halaman yang kamu cari tidak ditemukan!</h3>
                <a href="/">Kembali ke Beranda</a>
             </div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default NonePage;
