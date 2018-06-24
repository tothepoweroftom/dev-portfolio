<template>
  <div class="container">
    <!-- Preloader -->
    <div id="preloader" v-if="showLoader">
        <div class="pre-container">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    </div>
    <!-- end Preloader -->


        <!-- Top bar -->
        <b-row style="">
          <b-col cols="12">

            <h1 style="font-weight: 700;  ">Tom Power</h1>
            <p>Front End Developer</p>
          </b-col>

          
      </b-row>

      <b-row>
        <b-col cols="12" sm="9" style="text-align:justify">
          <h3 class="uppercase">About Me </h3>
            <h5>Creative & Lorem ipsum dolor sit amet</h5>
            <div class="h-30"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non possumus. Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. Tecum optime, deinde etiam cum mediocri amico. Et nemo nimium beatus est; Ac ne plura complectar-sunt enim innumerabilia-, bene laudata virtus voluptatis aditus </p>

              <p>Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? Esse enim quam vellet iniquus iustus poterat inpune. </p>
  
        </b-col>
        <b-col cols="12" sm="3">
              <ul class="social-ul">
                  <li class="box-social"><a href="#0"><i class="fab fa-github"></i></a></li>
                  <li class="box-social"><a href="#0"><i class="fab fa-linkedin-in"></i></a></li>
                  <li class="box-social"><a href="#0"><i class="fab fa-twitter"></i></a></li>
                  <li class="box-social"><a href="#0" style="font-size:15px;">tothepoweroftom@gmail.com</a></li>
                  <!-- <li class="box-social"><a href="#0" style="font-size:15px;">t</a></li> -->

              </ul>
        </b-col>
      </b-row>

      <b-row style="margin-top:50px">

        <div class="portfolio" style="padding-left:20px">        
          
            <h2 style="text-align:left"> Portfolio</h2>

                <!-- portfolio_filter -->
                <div class="">
                        <ul class="">
                            <li><b-btn class="portfolio-btn ">All</b-btn></li>
                            <li><b-btn class="portfolio-btn">Web</b-btn></li>
                            <li><b-btn class="portfolio-btn">iOS</b-btn></li>
                            <li><b-btn class="portfolio-btn">Physical</b-btn></li>
                        </ul>
                    </nav>
                </div>
        </div>
      </b-row>
      <b-row>
          <b-card-group>
                    <!-- single work -->
                    <portfolio-card v-for="(project, index) in projects" :key="index" :project="project"></portfolio-card>
          </b-card-group>



                    <!-- end single work -->

      </b-row>

        
    </div>

   
    </div>
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard'
import Projects from './projects.js'

export default {
  components: {
    PortfolioCard,
  },
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showLoader: true,
      projects: Projects.projects,
    }
  },

  methods:{ 
    handleMenu() {}
  },

  mounted() {
    this.showLoader = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.portfolio-btn {
  background: transparent;
  border: 0px;
  color:black;

}


</style>
