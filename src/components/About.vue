<template>
	<div>
		<Navbar whitebg/>
			<section class="header">
    <div class="container">
      <div class="row">
        <div class="header-wrapper">
          <h2 class="text-center">Welcome to Submitlocal</h2>
          <p class="text-center">We are encouraging people to deliver outstanding solutions with great experiences.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="text-center" style="margin-top: 40px;">
    <div class="container abt-cont shadow-box">
      <div class="row d-flex">
        <div class="">
          <h2 class="txt-green">What we do</h2>
          <p> We founded submitlocal in early 2015 after being unsatisfied with resolutions in local marketing. Our early objective was to create software that could solve problems we were facing ourselves.</p>
          <p>Our software tracks hundreds of thousands of business profiles & monitors millions of interactions to provide businesses with automated marketing as well as insights that they would otherwise not get.</p>
        </div>
      </div>
    </div>
    <div class="light-gray-bg abt-cont shadow-box">
      <div class="container">
        <div class="row d-flex">
          <div class="">
            <h2 class="txt-red">Our Culture</h2>
            <p>We create products that businesses love. This has come about through a culture bred by the smart and fun people at Submitlocal that think outside the box.</p>
            <p>Everyone at submitlocal is encouraged to focus on ideas and projects that have mass impact and adoption. We offer a fun, chilled-out work atmosphere where anything goes as long as you are getting stuff done.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container abt-cont shadow-box">
      <div class="row d-flex">
        <div class="">
          <h2 class="txt-blue">We are hiring!</h2>
          <p>
            Submitlocal is looking out for smart, passionate people to join us in building great products.
          </p>
          <p>Hit us on at <a href="mailto:careers@submitlocal.com">careers@submitlocal.com</a></p>
        </div>
      </div>
    </div>
  </section>
  <section class="getit">
      <div class="container">
        <div class="row d-flex">
          <div class="col-sm-2">
            <img src="https://s3.us-east-2.amazonaws.com/submitlocal/rocket-launch.svg" alt="">
          </div>
          <div class="col-sm-8">
            <h2>Get your submitlocal dashboard now</h2>
            <p>Managing your local marketing made simple with submitlocal dashboard</p>
          </div>
          <div class="col-sm-2">
            <router-link to="/scan" class="btn btn-primary" href="">Get Started now</router-link>
          </div>
        </div>
      </div>
    </section>
    <Footer colorBg/>
	</div>
</template>
<script>
	import Navbar from '@/components/Navbar'
	import Footer from '@/components/Footer'
	export default {
		name: 'About',
		components: {
	    // 'Listing': Listing,
	    // 'TopNav': TopNav,
	    'Navbar': Navbar,
	    'Footer': Footer
	  },
	}
</script>
<style scoped lang="scss">
   @media screen and (max-width: 768px) {
     .header {
        h2, p {
          text-align: left !important;
        }
      }

      .header-wrapper {
        padding: 0 16px;
      }

      .abt-cont {
        box-shadow: none !important;
        padding: 0 30px;
        // padding: 0;
        // max-width: 100%;
        // width: 100%;
        .container {
          // max-width: 100%;
        }
        &.light-gray-bg {
          padding: 0 16px;
        }
      }
   }
</style>