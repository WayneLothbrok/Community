<template>
  <div>
    <div class="SignFlowHomePage">
      <div class="SignFlowHomePage-content">
        <img src="/static/images/logo.png" alt="知乎 LOGO" class="SignFlowHomepage-logo">
        <div class="css-onmark">
          <div class="SignContainer-content">
            <SignContainer></SignContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignContainer from './SignContainer'
export default {
  name: 'Sign',
  components: {
    SignContainer
  }
}
</script>

<style scoped>
.SignFlowHomePage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("/static/images/sign_bg.db29b0fb.png");
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.SignFlowHomePage-content {
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 2px;
  min-height: 688px;
  height: calc(100% - 42px);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.SignFlowHomepage-logo {
  width: 128px;
  height: 81px;
  margin-bottom: 24px;
}

.css-onmark {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding: 0;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  border-radius: 2px;
  width: 400px;
  overflow: hidden;
}

.SignContainer-content {
  margin: 0 auto;
  text-align: center;
}
</style>
