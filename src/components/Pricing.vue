<template>
	<div>
		<Navbar whitebg/>
		 <section class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="text-center">Calculate your cost. Submitlocal has a plan for you.</h2>
          <p class="text-center">Plans to suit individuals, growing companies and teams</p>
          <div>
            <div class="range-holder">
              <div id="pr-slider" class="dragdealer">
                <div class="stripe">
                  <div id="green-highlight"></div>
                  <div id="orange-highlight"></div>
                  <div id="blue-highlight"></div>
                  <div class="handle">
                    <div class="infobox">
                      
                      <div class="innerbox">
                        <div class="info-price"></div>
                        <!-- <div class="annual-label">ANNUALY:</div> -->
                        <!-- <div class="annual-price"></div> -->
                        <div class="titlebar"><span id="plan-holder"></span> <span id="device-holder"></span></div>
                      </div>
                    </div>
                    <div class="square">
                      <span class="value"></span>
                      <span class="menu-line"></span>
                      <span class="menu-line"></span>
                      <span class="menu-line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="premium_plan_box">
            <div class="text-center">
              <h3>With a paid plan, you get </h3> &nbsp;
              <div class="paid-row text-left">
                <div class="row">
                  <div class="col-md-4">
                    <h4>Citations Building</h4>
                    <p>Citations are an important aspect when it comes to building your local rankings, but constructing them is a time overriding process.</p>
                  </div>
                  <div class="col-md-4">
                    <h4>Citations Review</h4>
                    <p>Inaccurate business information online are annoying for customers and upset your search rankings.</p>
                  </div>
                  <div class="col-md-4">
                    <h4>Local Search Audit</h4>
                    <p>We will review your current local strategy<br> (or lack of), then provide you with a customized plan</p>
                  </div>
                  <div class="clearfix"></div>
                  <div class="col-md-4">
                    <h4>Track Reviews</h4>
                    <p>You can respond in no time and keep track of what your customers are saying.</p>
                  </div>
                  <div class="col-md-4">
                    <h4>Enterprise Citation Facilities</h4>
                    <p>Enjoy all the benefits of an automated listing solution, but with a hands-on managed approach, saving you time.</p>
                  </div>
                  <div class="col-md-4">
                    <h4>Easy Reporting</h4>
                    <p>Download your reports for daily, weekly, monthly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import JQuery from 'jquery'
import Dragdealer from 'dragdealer'
import Footer from '@/components/Footer'
export default {
	name: 'Pricing',
	components: {
    'Navbar': Navbar,
    'Footer': Footer
  },
  metaInfo: {
    title: 'SubmitLocal Pricing | Website Listing Service Pricing ',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'title', content: 'SubmitLocal Pricing | Website Listing Service Pricing '
      },
      { name: 'description', content: 'SubmitLocal Pricing is very cheap compared to other local business listing services and citation services. Check local listings and manage them with SubmitLocal citation submission service. Get listed on google with low cost citation services.' }
    ]
  },
  mounted() {
    let $ = JQuery;

    //set defaults
    $("#plan-holder").text('Personal Plan:');
    $("#device-holder").text('1-50 Locations');
    $(".info-price").html('$ 30 / Location');
    $(".annual-price").html('$24');

    new Dragdealer('pr-slider', {
      animationCallback: function(x, y) {
        var slider_value = ((Math.round(x * 100)));
        //$("#pr-slider .value").text(slider_value);
        var stripe_width = slider_value + 1;
        $(".stripe").css("width", "" + stripe_width + "%");

        //set personal
        if (slider_value > 0 && slider_value < 6) {
          $("#plan-holder").text('Personal Plan:');
          $("#device-holder").text('1-50 Locations');
          $(".info-price").html('$ 30 / Location');

          $("#green-highlight").hide();
        }

        //set basic
        if (slider_value > 5 && slider_value < 37) {
          $("#plan-holder").text('Basic Plan:');

          $("#orange-highlight").hide();
          $("#green-highlight").show();
          $("#green-highlight").css("width", "" + (slider_value + 40.5) + "%");

          if (slider_value > 5) {
            $(".info-price").html('$ 30 / Location');
            $(".annual-price").html('$ 290');
            $("#device-holder").text('1-50 Locations');
          }
          if (slider_value > 11) {
             $(".info-price").html('$ 30 / Location');
            $(".annual-price").html('$ 290');
            $("#device-holder").text('1-50 Locations');
          }
          if (slider_value > 18) {
             $(".info-price").html('$ 30 / Location');
            $(".annual-price").html('$ 290');
            $("#device-holder").text('1-50 Locations');
          }
          if (slider_value > 24) {
             $(".info-price").html('$ 27 / Location');
            $(".annual-price").html('$ 5790');
            $("#device-holder").text('50-100 Locations');
          }
          if (slider_value > 31) {
             $(".info-price").html('$ 27 / Location');
            $(".annual-price").html('$ 5790');
            $("#device-holder").text('50-100 Locations');
          }

        }

        //set business
        if (slider_value > 38 && slider_value < 83) {
          $("#plan-holder").text('Business Plan:');

          $("#green-highlight").css("width", "314px");
          $("#orange-highlight").show();
          $("#blue-highlight").hide();

          
          if (slider_value > 38) {
            $(".info-price").html('$ 25 / Location');
            $(".annual-price").html('$ 7990');
            $("#device-holder").text('100-250 Locations');

          }

          if (slider_value < 40) { $("#orange-highlight").hide(); }
          if (slider_value > 70) { $("#orange-highlight").css("width", "" + (slider_value / 4.8) + "%"); }

          if (slider_value > 44) {
            $(".info-price").html('$ 25 / Location');
            $(".annual-price").html('$ 7990');
            $("#device-holder").text('100-250 Locations');

            $("#orange-highlight").css("width", "" + (slider_value / 2.5) + "%");
          }

          if (slider_value > 50) { $("#orange-highlight").css("width", "" + (slider_value / 1.7) + "%"); }

          if (slider_value > 57) {
            $(".info-price").html('$ 25 / Location');
            $(".annual-price").html('$ 7990');
            $("#device-holder").text('100-250 Locations');
          }

          if (slider_value > 68) { $("#orange-highlight").css("width", "" + (slider_value / 1.6) + "%"); }

          if (slider_value > 70) {
            $(".info-price").html('$ 23 / Location');
            $(".annual-price").html('$ 9990');
            $("#device-holder").text('250-1000 Locations');
          }
        }

        //set enterprise
        if (slider_value > 83) {
          $("#plan-holder").text('Enterprise Plan:');
          $("#orange-highlight").css("width", "433px");


          if (slider_value > 84) {
            $("#blue-highlight").css("width", "" + (slider_value / 24) + "%");
            $("#blue-highlight").show();
          }
          if (slider_value > 88) { $("#blue-highlight").css("width", "" + (slider_value / 10) + "%"); }
          if (slider_value > 93) { $("#blue-highlight").css("width", "" + (slider_value / 8) + "%"); }
          if (slider_value > 97) { $("#blue-highlight").css("width", "" + (slider_value / 6) + "%"); }

          $(".info-price").html('$ 20 / Location');
          $(".annual-price").html('');
          $("#device-holder").text('1000+ Locations');
        }

      }
    });
  }
}
</script>
 <style scoped>
  .bg-purple {
    color: #fff;
    background: -webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: -moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
    background: linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%);
}
  .hero .hero-wrapper {
    padding: 60px 0 !important;
    background: none !important;
  }

  .hero-title {
    margin-bottom: 0 !important;
  }

  .hero {
    background: url(https://s3.us-east-2.amazonaws.com/submitlocal/contact1.jpg) !important;
    background-size: cover !important;
    background-position: center center !important;
  }

  .contact-container {
    padding: 60px 0;
  }

  .pricing {
    background: #F2F5F8;
  }

  footer {
    background: linear-gradient(87deg, #2d008e, #006cff) !important;
  }

  nav.nav-lightbg a.navbar-brand {
    background: url(https://s3.us-east-2.amazonaws.com/submitlocal/logo.svg) no-repeat !important;
  }

  nav.nav-lightbg .navbar-nav .nav-item .nav-link {
    color: #0e4de3 !important;
  }

  .range-holder {
    margin: 10em auto 0 auto;
    padding: 200px 0 70px 0;
    width: 960px;
    background: url("https://dl.dropboxusercontent.com/u/4277345/codepen/pr-plan-scale.png") bottom center no-repeat;
  }

  .dragdealer {
    position: relative;
    height: 30px;
    background: #FFF;
    border-radius: 8px;
    -webkit-box-shadow: 1px 0 32px 6px #e3e3e3;
    -moz-box-shadow: 1px 0 32px 6px #e3e3e3;
    box-shadow: 1px 0 32px 6px #e3e3e3;
  }

  .dragdealer .handle {
    position: absolute;
    top: 0;
    left: 0;
  }

  .stripe {
    background: #FFD200;
    position: absolute;
    top: 0;
    left: 0;
    margin: 3px;
    height: 24px;
    border-radius: 8px;
  }

  #green-highlight {
    position: absolute;
    top: 0;
    left: 67px;
    height: 24px;
    background: #FFD200;
    display: none;
  }

  #orange-highlight {
    position: absolute;
    top: 0;
    left: 381px;
    height: 24px;
    background: #FF910B;
    display: none;
  }

  #blue-highlight {
    position: absolute;
    top: 0;
    left: 814px;
    height: 24px;
    background: #FC0E28;
    display: none;
  }

  .square {
    position: absolute;
    top: 5px;
    left: 0;
    margin-top: -13px;
    margin-left: -10px;
    cursor: pointer;
    width: 50px;
    height: 37px;
    background: #ebebeb;
    border-radius: 8px;
    color: #FFF;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    padding-top: 10px;
    border: 1px solid #E0E0E0;
  }

  .menu-line {
    width: 41%;
    margin: 1px auto;
    height: 4px;
    background: #05347b;
    display: block;
  }

  .infobox {
    position: absolute;
    top: 45px;
    left: 0;
    margin-top: -235px;
    margin-left: -117px;
    width: 260px;
    height: 155px;
    background: #FFF;
    padding: 0px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border: #0e4de3 solid 2px;
  }

  .infobox:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 20px 23px 0;
    border-color: #FFFFFF transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -19px;
    left: 107px;
  }

  .infobox:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 21px 24px 0;
    border-color: #0e4de3 transparent;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -23px;
    left: 106px;
  }

  .titlebar {
    background: #0e4de3;
    color: #FFF;
    padding: .5em;
    line-height: 1.5em;
    font-size: 15px;
  }

  #plan-holder {
    font-weight: bold;
  }

  .innerbox {
    padding: 1em;
  }

  .info-price {
    color: #FF910B;
    font-size: 24px;
    line-height: 1.8em;
  }


  .annual-label {
    color: #505054;
    font-size: 14px;
    font-weight: bold;
    width: 110px;
    line-height: 1.8em;
  }

  .annual-price {
    color: #939393;
    font-size: 17px;
    width: 110px;
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
    margin-bottom: 15px;
  }

  .paid-row p {
    color: #898d98 !important;
    font-size: 15px !important;
  }

  .bg-gold {
    background: -webkit-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    background: -o-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    background: -moz-linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
}

.annual-price,
.annual-label {
  display: none !important; 
}

@media screen and (max-width: 768px) {
  .range-holder {
    display: none;
  }

  h2, p {
    text-align: left !important;
  }
}

  </style>