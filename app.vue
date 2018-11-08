<template>
  <div id="app">
    <router-view/>
    <div id="cookieConsent">
    <div id="closeCookieConsent">x</div>
    This website is using cookies. <a href="#" target="_blank">More info</a>.
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
export default {
  name: 'App',
  beforeMount() {
      var isCookieBannerPlaced = localStorage.getItem('isCookieBannerPlaced');
      if(!isCookieBannerPlaced){
          localStorage.setItem('isCookieBannerPlaced', true)
          setTimeout(function () {
            var a = document.getElementById("cookieConsent");
            a.style.display = 'none';
        }, 4000);
      } else {
            setTimeout(function () {
            var a = document.getElementById("cookieConsent");
            a.style.display = 'none';
        });
      }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500,700');
  @import 'assets/css/bootstrap.min.css';
  @import 'assets/css/base';
  body {
    // margin-top: 138px;
    position: relative;
    // padding-bottom: 80px;
    font-size: 0.875rem;
    font-family: 'Rubik', sans-serif;
    // height: 2000px;
    letter-spacing: -0.03rem;
    background: #F2F5F8;
    min-height: 100vh;
}

.fixed-layout {
    max-width: 1200px;
    margin: auto;
}

.txt-orange {
    color: #FF8106 !important;
}

.txt-green {
        color: #53B970;
}

.txt-red {
    color: #FC4138;
}

.txt-blue {
        color: #4FBADC;
}

.btn {
    font-size: 0.875rem;
    letter-spacing: normal;
    padding-left: 1.375rem;
    padding-right: 1.375rem;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
}

.btn-primary {
    background: #006cff;
    border-color: #006cff;
    &:hover {
        background: #006cff;
        border-color: #006cff;
    }
}

nav {
    position: static !important;
    top: 0 !important;
    background: transparent !important;
    border: none !important;
    .navbar-brand {
        width: 160px !important;
        height: 35px !important;
        background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo_white.svg) no-repeat !important;
    }
    @media (min-width: 576px) {
        .navbar-brand {
            width: 100px;
            height: 50px;
            background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo_white.svg) no-repeat;
        }
    }

    .navbar-nav {
        .nav-item {
            .nav-link {
                color: #fff;
            }
        }
    }

    @media (min-width: 768px) {
        height: 80px;
        background: #fff;
        border-bottom: 1px solid #e0e0e0;
        .navbar-nav {
            .nav-item {
                .nav-link {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }
            }
        }
        .navbar-brand {
            width: 270px;
            height: 50px;
            background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo.svg) no-repeat;
        }
    }
}

section {
    h2 {
        font-size: 32px;
        letter-spacing: -1px;
        color: #0e4de3;
        font-weight: 400;
    }
}

.homepage {
    background: linear-gradient(87deg, #2d008e, #006cff) !important;
    footer {
        background: linear-gradient(87deg, #2d008e, #006cff) !important;
    }
}

.hero {
    position: relative;
    color: #fff;
    padding: 0 0 90px 0;
    .tagline {
        text-align: center;
        font-size: 22px;
        color: #333;
        padding: 15px 0;
        border-bottom: 1px solid #E0E0E0;
    }
    .hero-wrapper {
        padding-top: 13vh;
        padding-bottom: 18vh;
        position: relative;
        @media (min-width: 568px) and (max-width: 1024px) {
            margin-left: 0;


        }
        .hero-title {
            font-size: 35px;
            width: 50%;
            font-weight: 400;
            font-family: Quicksand,sans-serif;
            margin-bottom: 70px;
            span {
                display: block;
                font-size: 18px;
                font-weight: 400;
                color: #fff;
                opacity: .7;
                font-family: 'Rubik', sans-serif;
                margin-top: 10px;
            }
            @media screen and (max-width: 768px) {
                width: 100%;
                font-size: 28px;
            }
        }
        .m-arrow {
            position: absolute;
            right: 0;
            top: 32px;
            @media (min-width: 991px) and (max-width: 1024px) {
                width: 63%;
            }
            @media (max-width: 990px) {
                display: none;
            }
        }
    }
    .hero-icon {
        img {
            width: 40px;
        }
    }
    .show-off {
        position: absolute;
        bottom: -200px;
        -webkit-box-shadow: 0 2px 8px 0 rgba(26,37,63,.05);
        box-shadow: 0 2px 8px 0 rgba(26,37,63,.05);
        background: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        @media screen and (max-width: 768px) {
            left: 0;
            position: static;
            border-radius: 4px;
            overflow: hidden;
            text-align: center;
        }
    }
    .hero-f {
        padding: 40px 40px 20px 40px;
        background: #ffffff;
        color: #000;
        h2 {
            margin-top: 15px;
            font-size: 22px;
            color: #000;
        }
        &.hero-f1 {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        &.hero-f3 {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
    p {
        font-weight: 100;
        color: #8992a6;
    }
}

.works {
    padding: 200px 0 120px;
    background: #ffffff;
    @media screen and (max-width: 768px) {
        padding-top: 0px;
    }
    .works-wrapper {
        margin-left: 56px;
        position: relative;
        padding-top: 100px;
        .business-img {
            width: 350px;
            max-width: 100%;
            padding-top: 50px;
            @media (max-width: 768px) {
                width: 100%;
                display: none;
            }
        }
        @media screen and (max-width: 768px) {
            margin-left: 0;
        }
    }
    p {
        font-size: 28px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: -.8px;
        text-align: left;
        color: #1a253f;
        padding-top: 25px;
    }
    ul {
        padding: 40px 0 0 0;
        margin: 0;
        li {
            list-style-type: none;
            font-weight: 300;
            font-size: 18px;
            margin-bottom: 20px;
            letter-spacing: -.5px;
            color: #8992a6;
            img {
                width: 36px;
                margin-right: 10px;
                vertical-align: top;
            }
            @media screen and (max-width: 768px) {
                list-style-type: none;
                font-weight: 300;
                font-size: 18px;
                margin-bottom: 20px;
                letter-spacing: -.5px;
                color: #8992a6;
                font-size: 17px;
                line-height: 24px;
                position: relative;
                padding-left: 45px;
                img {
                    position: absolute;
                    left: 0;
                }
            }
        }
    }
    .btn {
        margin-top: 40px;
    }
}

.video-demo {
    // background: #1464A3;
    background: linear-gradient(170deg, #1464A3 50%, #fff 50%);
    padding: 10vh 0 22vh 0;
    color: #fff;
    h4 {
        color: #333;
        font-size: 18px;
        margin: 16px 0;
        font-weight: 400;
    }
    .video {
        padding-top: 40px;
        img {
            margin: auto;
            width: 49%;
            @media (max-width: 768px) {
                width: 100%;
            }
        }
    }
}

footer {
    color: white;
    background: transparent;
    font-size: 0.75rem;
    color: #e4e4e4;
    height: 80px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 768px) {
        height: auto;
        .col-md-* {
            padding-bottom: 20px;
        }
    }
    a {
        font-size: 13px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        margin-left: 20px;
        color: #fff;
        &:hover {
            color: #fff;
        }
    }
    .logo {
        max-width: 200px;
        margin-bottom: 20px;
    }

    ul {
        li {
            display: inline-block;
            vertical-align: top;
        }
    }
    .footer-pad {
        address {
            display: inline-block;
            vertical-align: top;
        }
        @media screen and (max-width: 768px) {
            .list-unstyled {
                font-size: 12px;
                text-align: center;
            }
        }
    }
}

.footer-bottom {
    background: transparent;
    padding: 2em;
}

.footer-top {
    background: #1464A3;
}

.footer-middle {
    padding-top: 2.5em;
    color: white;
}

.features {
    .works {
        padding-bottom: 15vh;
        .works-wrapper {
            margin-left: 0;
        }
    }
    .sub-title {
        margin-bottom: 100px;
    }
    .hero {
        background-image: url(assets/img/header-bg.png);
    }
    .hero-f {
        h2 {
            margin-top: 5px;
            font-size: 23px;
            font-weight: 500;
        }
        p {
            font-size: 16px;
            line-height: normal;
        }
    }
    .feature-img {
        img {
            max-width: 100%;
        }
    }
    .f-col {
        padding: 50px 0;
    }
    .f-title {
        font-size: 40px;
        font-weight: 600;
    }
    .f-subtitle {
        font-size:18px;
        margin-top: 5px;
    }
    .f-list {
        h2 {
            padding-top: 40px;
        }
        .sub-title {
            margin-bottom: 30px;
        }
    }
}

.light-gray-bg {
    background: #f5f5f5;
}

.mt40 {
    margin-top: 40px;
}

.abt-cont {
    padding: 120px 100px;
    text-align: left;
    max-width: 960px;
    margin: auto;
    margin-bottom: 50px;
    h2 {
        font-size: 40px;
        font-weight: 600;
    }
    p {
        font-size: 18px;
    }
}
  .scanForm {
    form {
        padding: 15px;
        border-radius: 4px;
        box-shadow: 0 2px 17px 0 rgba(0, 0, 0, 0.08);
        header {
          padding: 15px 0 15px 0;
          font-size: 28px;
          font-weight: bold;
        }
        .separator {
          font-size: 18px;
          text-align: left;
          margin-bottom: 15px;
          font-weight: 500;
        }
    }
  }
  .listing-wrapper {
    background: #ffffff;
    padding: 24px;
    border-radius: 4px;
    margin-top: 100px;
    position: relative;
    .print_link {
        position: absolute;
        right: 0;
        display: inline-block;
        vertical-align: top;
        color: #05347b !important;
        background: #fff;
        top: -36px;
        background: #fff;
        padding: 10px 27px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
  }

  .submit-btn {
    width: 100%;
  }

  .main-content {
    // padding-top: 148px;
    table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0 1em;
    }
  }
  .top-info {
    //padding: 30px 0;
  }

  .getit {
    margin-bottom: 80px;
    padding: 50px 0;
    background-image: linear-gradient(87deg,#1a253f,#303540);
    @media screen and (max-width: 768px) {
        .col-md-2,
        .col-md-8 {
            padding-bottom: 20px;
        }
    }
    img {
        width: 100px;
    }
    h2 {
        font-family: Quicksand,sans-serif;
        font-size: 21px !important;
        font-weight: 700 !important;
        font-style: normal !important;
        font-stretch: normal !important;
        line-height: normal !important;
        letter-spacing: normal !important;
        text-align: left;
        color: #fff;
    }
    p {
        font-size: 18px;
        font-weight: 400;
        font-style: normal !important;
        font-stretch: normal !important;
        line-height: 1.44;
        letter-spacing: -.5px;
        text-align: left;
        color: #ddd;
    }
    .btn {
        background: none;
        border: 1px solid #fff;
    }
  }

  .features-home {
    background-color: #eff2f6;
    .works-wrapper {
        padding-top: 0;
    }
    @media screen and (max-width: 768px) {
        padding-top: 100px;
    }
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
}

.pricing h2,
.contact-header h2,
.features h2 {
    font-family: Quicksand,sans-serif;
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
}

.pricing .header,
.features .header {
    margin-top: 87px;
}

.pricing .header p,
.contact-header .header p,
.features .header p {
    opacity: 0.7;
    font-size: 18px;
    color: #05347b;
}

nav.nav-lightbg a.navbar-brand {
    background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo.svg) no-repeat !important;
  }

  nav.nav-lightbg .navbar-nav .nav-item .nav-link {
    color: #05347b !important;
  }

nav.nav-lightbg .navbar-nav .nav-item .nav-link {
    color: #05347b !important;
}

.body {
  font-size: 15px;
}

.card-holder {
  margin: 2em 0;
}

.bg-gold {
  background: -webkit-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  background: -o-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  background: -moz-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
}

.bg-news {
  background: -webkit-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
  background: -o-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
  background: -moz-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
  background: linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
}

.bg-germany {
    color: #fff;
    background: -webkit-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), -webkit-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
    background: -o-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), -o-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
    background: -moz-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), -moz-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
    background: linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
}

.bg-aurora {
    color: #fff;
    background: -webkit-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background: -o-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background: -moz-linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
    background: linear-gradient(-70deg, #fa7c30 30%, rgba(0, 0, 0, 0) 30%), url('https://www.nasa.gov/sites/default/files/thumbnails/image/pia21421-cr.jpg');
  background-size: cover;
  background-position: 50% 21%;
  text-align: right;
}

.bg-germany {
    color: #fff;
    background: -webkit-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), -webkit-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
    background: -o-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), -o-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
    background: -moz-linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), -moz-linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
    background: linear-gradient(110deg, #000 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(110deg, #dd0000 66%, #ffc608 66%);
}

.bg-purple {
    color: #fff;
    background: -webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
}

.bg-spring {
    background: -webkit-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -webkit-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
    background: -o-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -o-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
    background: -moz-linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), -moz-linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
    background: linear-gradient(70deg, #fff810  30%, rgba(0,0,0,0) 30%), linear-gradient(30deg, #63e89e 60%, #ff7ee3 60%);
}

.top-submitlocal {
    background: #fff;
    padding: 40px 0;
    margin-top: 30px;
    h1 {
        font-weight: 300;
    }
    p {
        font-size: 18px;
    }
}

.features {
    background: #F2F5F8;
}

.whitebg {
    background: #F2F5F8;
}

  .premium_plan_box {
    background: #fff;
    padding: 50px 0 15px 0;
    margin-top: 50px;
    -webkit-box-shadow: 1px 0 32px 6px #e3e3e3;
    -moz-box-shadow: 1px 0 32px 6px #e3e3e3;
    box-shadow: 1px 0 32px 6px #e3e3e3;
    /*padding-bottom: 47px;*/
    margin-bottom: 100px;
  }

  .premium_plan_box h3 {
    color: #0e4de3;
    margin-bottom: 30px;
  }

  .premium_plan_box p {
    color: #8992a6;
  }

  .paid-row {
    padding: 0 40px;
  }

  .paid-row .col-md-4 {
    margin-bottom: 40px;
  }

  .paid-row p {
    color: #898d98 !important;
    font-size: 15px !important;
  }

  .features footer *,
  .pricing footer * ,
  .contact-header footer * {
    color: #fff !important;
    font-size: 12px;
  }

  .features footer {
    background: linear-gradient(87deg, #2d008e, #006cff) !important;
  }

.shadow-box {
    -webkit-box-shadow: 1px 0 32px 6px #e3e3e3;
    -moz-box-shadow: 1px 0 32px 6px #e3e3e3;
    box-shadow: 1px 0 32px 6px #e3e3e3;
}

#app {
    >div {
        height: 100%;
    }
    .login {
        footer {
            background: transparent;
            * {
                color: #05347b !important
            }
        }
    }
}

.nav-lightbg .navbar-toggler-icon{
    background: url(assets/img/navbar-blue.svg) !important;
    background-repeat: no-repeat !important;
}


@media screen and (max-width: 768px) {
    body {
        padding-bottom: 115px;
    }
    .getit {
        .d-flex {
            >div {
                margin-bottom: 16px !important;
            }
        }
    }
}

.home {
    padding-top: 132px;
  }
  #cookieConsent {
    background-color: rgba(20,20,20,0.8);
    max-height: 100px;
    font-size: 14px;
    color: #ccc;
    line-height: 26px;
    padding: 8px 0 8px 30px;
    font-family: "Trebuchet MS",Helvetica,sans-serif;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}
#cookieConsent a {
    color: #4B8EE7;
    text-decoration: none;
}
#closeCookieConsent {
    float: right;
    display: inline-block;
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin: -15px 0 0 0;
    font-weight: bold;
}
#closeCookieConsent:hover {
    color: #FFF;
}
</style>
