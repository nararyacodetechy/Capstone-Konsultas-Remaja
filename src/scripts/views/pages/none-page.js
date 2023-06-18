const NonePage = {
  async render() {
    return `
        <section class="none-page">
          <div class="container none-page">
             <img src="https://img.freepik.com/free-vector/404-error-with-portals-concept-illustration_114360-7900.jpg?w=996&t=st=1687038601~exp=1687039201~hmac=f2ff158d12abcc3d37b1c832f7988dcf217d0051bc24fe4a256f1d452527f25a">
             <div class="description-none-found">
                <h3>"Maaf, Halaman belum tersedia!"</h3>
                <a href="/">Back to Home</a>
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
