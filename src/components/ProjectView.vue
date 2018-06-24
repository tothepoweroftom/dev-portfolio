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
        <b-button variant="outline-secondary" style="border: 0px; font-size: 30px; position:absolute; top:20px; left:20px; z-index:40;" @click="goBack"><i class="fa fa-arrow-left"></i></b-button>


        <b-row>
            <img :src="project.cardImage" class="img-project"/>

            <h3 class="text-uppercase" style="margin:30px;">{{project.name}}</h3>

        </b-row>
        <b-row>

        <b-col md="9">
                                <span v-html="this.project.details"></span>

            <div v-if="project.github != ''">
                <h5><a :href="project.github">Github</a></h5>

            </div>
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
    padding-top: 70px;
    margin: 0px auto;
    height:40%;
    left:0px;
}
</style>
