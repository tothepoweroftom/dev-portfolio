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
        <b-row style="margin-top: 50px;">
          <b-col cols="12">

            <h1 style="font-weight: 700;  ">Tom Power</h1>
            <p>Front End Developer</p>
          </b-col>

          
      </b-row>

      <b-row>
        <b-col cols="12" sm="9" style="text-align:justify">
          <h3 class="uppercase">About Me </h3>
            <h5>Creative & Technical</h5>
            <div class="h-30"></div>
              <p>I don't believe in right/left brain dominance. I try and balance my mathematical and analytical mind with my creative and musical mind — tying together my Bachelor's degree in Theoretical Physics and Master's degree in Music & Media Technologies from Trinity College Dublin.</p>
              <p> My programming passion is front end development and Vue.js. For me its the closest programming comes to music. Its a technical and a creative challenge. Its about providing a great user experience. I love libraries like <strong> p5js, Tonejs</strong> and <strong>d3js</strong>. Tools which let us do so much with the blank website. </p>

              <p> Currently I am working as a creative software developer for MOBGEN:Lab, part of Accenture Interactive. The role involves a large range of technologies from web, mobile, voice and VR. My specific focus is on <strong>Javascript and Web Development</strong>. But I also have strong proficiency with <strong>Python, C++ and Swift</strong> and experience with <strong>DSP</strong> and <strong>Machine Learning</strong>.

              <p>I pride myself in quickly understanding complex new topics. Once you have understood and mastered Quantum Field Theory, everything else seems easier! Moving forward with my career I would like to continue improving my technical skills and contribute to something meaningful.</p>
        </b-col>
        <b-col cols="12" sm="3">
              <ul class="social-ul">
                  <li class="box-social"><a target="_blank" href="https://github.com/tothepoweroftom"><i class="fab fa-github"></i></a></li>
                  <li class="box-social"><a target="_blank" href="https://www.linkedin.com/in/tom-power-b20a57125/"><i class="fab fa-linkedin-in"></i></a></li>
                  <li class="box-social"><a target="_blank" href="https://twitter.com/wildsurmiseband"><i class="fab fa-twitter"></i></a></li>
                  <li class="box-social"><a target="_blank" href="mailto:tothepoweroftom@gmail.com" style="font-size:15px;">tothepoweroftom@gmail.com</a></li>
                  <!-- <li class="box-social"><a href="#0" style="font-size:15px;">t</a></li> -->

              </ul>
              <img src="/static/img/tompower.gif" class="profile-image"/>
        </b-col>
      </b-row>

      <b-row style="margin-top:50px">

        <div class="portfolio" style="padding-left:20px">        
          
            <h2 style="text-align:left"> Portfolio</h2>

                <!-- portfolio_filter -->
                <div class="">
                        <ul class="">
                            <li><b-btn class="portfolio-btn" @click="sortCards(0)">All</b-btn></li>
                            <li><b-btn class="portfolio-btn" @click="sortCards(1)">Web</b-btn></li>
                            <li><b-btn class="portfolio-btn" @click="sortCards(2)">iOS</b-btn></li>
                            <li><b-btn class="portfolio-btn" @click="sortCards(3)">Creative</b-btn></li>
                        </ul>
                    </nav>
                </div>
        </div>
      </b-row>
      <b-row style="padding-left:20px">
          <b-card-group>
                    <!-- single work -->
                    <!-- <transition-group name="fade" tag="li"> -->

                    <portfolio-card v-for="(project, index) in filtered" :key="index" :project="project"></portfolio-card>
                    <!-- </transition-group> -->
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
      filtered: [],
    }
  },

  methods:{ 
    sortCards(value) {
      if (value === 0){
        this.filtered = this.projects;
      } else {
        this.filtered = [];
        this.projects.forEach((el) => {
          console.log(el.type);
          el.type.forEach((type) => {
          if (type === value) {
            this.filtered.push(el);
            return
          }
          })

        })
      }

      
    },

    createFilterStructure(id, args, func) {
        return {id, args, func};
    },
    addFilterFunction(id, args, func) {
        this.filter.push(this.createFilterStructure(id, args, func));
    }
  },

  created() {
    this.filtered = this.projects;
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

.profile-image {
  width:200px;
  margin-left:-24px;
}


</style>
