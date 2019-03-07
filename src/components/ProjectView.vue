<template>

  <!-- Preloader -->
  <!-- <div id="preloader">
        <div class="pre-container">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    </div> -->
  <!-- end Preloader -->
  <div class="container" style="text-align: left; margin-bottom:50px;">
    <b-button variant="outline-secondary" style="border: 0px; font-size: 30px; position:absolute; top:20px; left:20px; z-index:40;"
      @click="goBack"><i class="fa fa-arrow-left"></i></b-button>


    <b-row>
      <img :src="project.cardImage" class="img-project" />


    </b-row>
    <b-row style="margin-top:50px;">

      <b-col md="9">
        <h3 class="text-uppercase">{{project.name}}</h3>
        <div v-if="project.github != ''">
          <a target="_blank" :href="project.github">Github</a>

        </div>
        <div v-if="project.link != ''">
          <a target="_blank" :href="project.link">Website</a>

        </div>
        <p></p>
        <span v-html="this.project.details"></span>

        <b-row>
          <b-col v-if="project.images" v-for="(image, index) in project.images" :key="index">

            <img :src="image" class="images" />
          </b-col>

        </b-row>


      </b-col>

      <b-col md="3">
        <ul class="cat-ul">
          <div class="badges">
            <b-badge variant="light" v-for="(tag, index) in project.tags" :key="index">{{tag}}</b-badge>

          </div>
        </ul>
        <div class="h-10"></div>
        <ul class="social-ul">
          <li class="box-social"><a href="#0"><i class="fab fa-github"></i></a></li>
          <li class="box-social"><a href="#0"><i class="fab fa-linkedin-in"></i></a></li>
          <li class="box-social"><a href="#0"><i class="fab fa-twitter"></i></a></li>
          <li class="box-social"><a href="#0" style="font-size:15px;">tothepoweroftom@gmail.com</a></li>
          <!-- <li class="box-social"><a href="#0" style="font-size:15px;">t</a></li> -->

        </ul>
      </b-col>
    </b-row>
  </div>
  <!-- end main-container -->

</template>

<script>
  export default {
    data() {
      return {
        project: null,
      }
    },

    created() {
      console.log("PARAMS", this.$route.params);
      this.project = this.$route.params.object;

    },

    mounted() {
      window.scrollTo(0,0);
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }

  }

</script>

<style scoped>
  .img-project {
    width: 80%;
    height: 40%;
    padding-top: 70px;
    margin: 0px auto;
    left: 0px;
  }

  .images {
    width: 100%;
    padding-top: 70px;
    margin: 0px auto;
    left: 0px;
  }

</style>
