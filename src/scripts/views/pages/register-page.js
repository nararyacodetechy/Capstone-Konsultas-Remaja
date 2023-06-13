const RegisterPage = {
  async render() {
    return `
        <section class="autentication">
          <div class="container autentication">
            <form>
              <h2>Daftar</h2>
              <div class="user-input">
                <input type="text" class="new-user-name" placeholder="Nama Lengkap">
                <input type="email" class="new-user-email" placeholder="Email">
                <input type="password" class="new-user-password" placeholder="Password">
              </div>
              <div class="privacy-accepted">
                <input type="checkbox">
                <li>Saya Menyetujui <a href="">Ketentuan</a> dan <a href="">Kebijakan Privasi</a></li>
              </div>
              <div class="switch-page">
                <li>Sudah punya akun? <a href="">Login</a></li>
                <button type="submit"><a href="">Daftar</a></button>
              </div>
            </form>
            <div class="ilustration">
              <img src="./images/autentication-page/register-ilustration.png">
            </div>
          </div>
        </section>
      `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default RegisterPage;
