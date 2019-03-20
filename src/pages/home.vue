<template>
  <div class="home">
    <div class="logo">
      <img src="../assets/logo.png"/>
    </div>
    <h3 class="title">best-resume-ever</h3>
    <div class="previews">
      <div class="preview" v-for="template in templates">
        <router-link v-bind:to="'/resume/' + template">
          <div class="preview-wrapper">
            <img v-bind:src="getImgUrl(template)" v-bind:alt="template"/>
            <span>{{ template }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.component('resume', {
      name: 'app',
      data: () => {
          return {
              templates: [
                  'material-dark',
                  'left-right',
                  'oblique',
                  'side-bar',
                  'ti8m',
                  'side-bar-rtl',
                  'left-right-rtl',
                  'creative',
                  'cool'
              ],
              file: ''
          };
      },
      methods: {
          getImgUrl: (template) => {
              const images = require.context('../assets/preview', false, /\.png$/);
              return images('./resume-' + template + '.png');
          }
      }
  });
</script>

<style scoped>
  @import '../styles/home.less';
</style>
