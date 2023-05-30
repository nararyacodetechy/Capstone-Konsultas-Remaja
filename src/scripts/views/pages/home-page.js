const HomePage = {
  async render() {
    return `
      <section class="hero">
        <h2>Home Pages</h2>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
