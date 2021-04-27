<template>
  <div class="index">
    <Notice title="NoNameTech Store." />
    <Header title="No Name Technology" />
    <div class="index__gallery">
      <template v-for="(product, index) in products">
        <Product :data="product" :key="index" />
      </template>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import Notice from "~/components/Notice.vue";
import Product from "~/components/Product.vue";
import Footer from "~/components/Footer.vue";

import Products from "~/assets/products.ts";

export default Vue.extend({
  components: {
    Header,
    Notice,
    Product,
    Footer
  },
  head() {
    return {
      title: "No Name Tech"
    };
  },
  async asyncData({ route }) {
    return {
      products: Products
    };
  }
});
</script>

