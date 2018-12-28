<template>
  <div class="test">
  <b-card title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>

</template>


<style>
  @import './test.css';
</style>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import the individual components
import bCard from 'bootstrap-vue/es/components/card/card';
import bCardHeader from 'bootstrap-vue/es/components/card/card-header';
import bCardBody from 'bootstrap-vue/es/components/card/card-body';
import bCardFooter from 'bootstrap-vue/es/components/card/card-footer';
import bCardImage from 'bootstrap-vue/es/components/card/card-footer';
import bTable from 'bootstrap-vue/es/components/table/table';


// // Add components globally:
Vue.component('b-card', bCard);
Vue.component('b-card-header', bCardHeader);
Vue.component('b-card-body', bCardBody);
Vue.component('b-card-footer', bCardFooter);
Vue.component('b-card-img', bCardImage);
Vue.component('b-table', bTable);

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    // bCard,
    // bCardHeader,
    // bCardBody,
    // bCardFooter,
    // bCardImg,
    // bTable
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

</style>
