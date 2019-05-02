<template>
  <div id="app">
    <h1>Quotes</h1>
    <div :key="post.id" v-for="post in posts" class="title">
      {{ post.id }}

      {{ post.title }}
      <div class="lighten">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "app",
    data() {
      return {
        posts: null
      };
    },
    mounted() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => (this.posts = response.data));
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .title {
      color: black;
      font-family: monospace;
      font-size: 19px;
    }
    .lighten {
      color: #2c3e50;

      font-family: cursive;
      font-size: 14px;
    }
  }
</style>
