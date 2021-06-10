import './authStyle.css';
function AuthPage() {
  return (
    <div class="main-wrapper">
      <div class="card-wrapper">
        {/* <!-- Login CARD --> */}
        <div class="card-login">
          <div class="login-left">
            <span>ავტორიზაცია</span>
            <button
              class="small-card-button"
              style={{
                margin: '0',
                padding: '0',
                outline: 'none !important',
                display: 'none',
              }}>
              შემოგვიერთდი
            </button>
            <form>
              <input type="text" placeholder="მომხმარებელი" name="" />
              <input type="password" name="" placeholder="პაროლი" />
              <button id="logIn" style={{ width: '80%' }}>
                შესვლა
              </button>
              <br></br>
              <a href="index.html" style={{ width: '80%' }}>
                უკან
              </a>
            </form>
          </div>
          <div class="login-right">
            <span class="small-card-title">ჯერ არ ხარ მომხმარებელი?</span>
            <p class="small-card-p">
              თუ გინდა, რომ ისიამოვნო ჩვენი საიტის სრული ფუნცქიონალით:
            </p>
            <button class="small-card-button" id="joinus">
              შემოგვიერთდი
            </button>
          </div>
        </div>
        {/* <!-- Login CARD --> */}

        {/* <!-- REGISTER CARD --> */}
        <div class="card-register" id="card-register">
          <div class="register-left">
            <span class="small-card-title">უკვე ხარ მომხმარებელი?</span>
            <p class="small-card-p">მაშინ გაიარე ავტორიზაცია:</p>
            <button class="small-card-button" id="logincard">
              ავტორიზაცია
            </button>
          </div>
          <div class="register-right" id="registration">
            <span>რეგისტრაცია</span>
            <button
              class="small-card-button"
              id="logincard_small"
              style={{
                margin: '0',
                padding: '0',
                outline: 'none !important',
                display: 'none',
              }}>
              ავტორიზაცია
            </button>
            <form id="registration" action="index.html">
              <div class="error-text" id="error_username"></div>
              <input type="text" placeholder="მომხმარებელი" name="username" />

              <div class="error-text" id="error_password1"></div>
              <input type="password" placeholder="პაროლი" name="password1" />

              <div class="error-text" id="error_password2"></div>
              <input
                type="password"
                placeholder="გაიმეორეთ პაროლი"
                name="password2"
              />

              <button style={{ width: '80%' }}>რეგისტრაცია</button>
              <br></br>
              <a href="index.html" style={{ width: '80%' }}>
                უკან
              </a>
            </form>
          </div>
        </div>
        {/* <!-- REGISTER CARD --> */}
      </div>
    </div>
  );
}

export default AuthPage;
