const LoginPage = {
  async render() {
    return `
      <section class="autentication">
        <div class="container autentication">
          <form>
            <h2>Login</h2>
            <div class="user-input">
              <input type="email" class="new-user-email" placeholder="Email">
              <input type="password" class="new-user-password" placeholder="Password">
            </div>
            <div class="switch-page">
              <li>Sudah punya akun? <a href="">Daftar</a></li>
              <button type="submit"><a href="">Login</a></button>
            </div>
            <div class="choices-login">
              <li>Login dengan</li>
              <a href=""><img src="./images/autentication/google-login.png" class="google-login"></a>
            </div>
          </form>
          <div class="ilustration">
            <img src="./images/autentication/login-ilustration.png">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default LoginPage;
