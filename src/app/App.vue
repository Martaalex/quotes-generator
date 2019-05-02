<template>
  <div id="app">
    <h1>Quotes</h1>
    <div :key="quote.id" v-for="quote in quotes" class="title">
      {{ quote.id }}

      {{ quote.title }}
      <div class="lighten">
        {{ quote.body }}
      </div>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from "vuex";
  import { mapGetters } from "vuex";
  import { mapActions } from "vuex";
  import { REQUESTING } from "@/store/modules/status-types";
  import { FETCH_DATA } from "@/store/modules/action-types";

  const Quotes = createNamespacedHelpers("Quotes");

  export default {
    name: "app",

    computed: {
      ...Quotes.mapGetters({
        status: "status",
        quotes: "quotes"
      })
    },
    isRequesting() {
      return this.status === REQUESTING;
    },
    created() {
      this.fetchData();
    },
    methods: {
      ...Quotes.mapActions({
        fetchData: FETCH_DATA
      })
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
