<template>
<div>

    <b-card  :title="project.name" 
          :img-src="project.cardImage"
          style="max-width: 20rem; margin:10px; border-radius:0px; text-align:left;"
          class="mb-2"
          
    >
      <div class="badges">
      <b-badge variant="light" v-for="(tag, index) in project.tags" :key="index">{{tag}}</b-badge>

      </div>
    <b-button variant="outline-secondary" @click="projectDetails">View</b-button>
  </b-card>
  </div>

</template>

<script>
export default {

  props: ['project'],

  methods: {
    projectDetails() {
      this.$router.push({name: 'ProjectView', params: {object: this.project}});
    }
  }



}
</script>

<style scoped>
img {
  max-height: 150px;
}

.card {
  height:350px;
  max-height:350px;
}
.badges {
  height: 80px;
}

</style>
