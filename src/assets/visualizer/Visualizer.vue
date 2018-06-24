<template>
    <div class='visualizer' id="visualizer">

    </div>
</template>

<script>
import sketch from './p5VisualiserSketch.js'
import p5 from 'p5'


export default {
    data() {
        return {
            myp5: null,
        }
    },
    mounted() {
        this.myp5 = new p5(sketch, document.getElementById('visualizer'))
    },

    methods: {
    },
}
</script>

<style scoped>

.visualizer {
    width:100vw;
    height:100vh;
    border-radius: 5px;
    z-index: -1;
    position:absolute;
    top:0;
    left:0;
    background: rgba(255, 255, 255, 0.459);
}


</style>
