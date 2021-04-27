<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__copy">Site made by Orangemn6 in Nuxtjs</div>
      <div class="footer__socials">
        <a href="https://twitter.com/orangemn6">
          <Twitter class="footer__icon" />
        </a>
        <a href="https://github.com/orangemn6">
          <Github class="footer__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Twitter from "~/components/icons/Twitter.vue";
import Github from "~/components/icons/Github.vue";

export default Vue.extend({
  components: {
    Twitter,
    Github
  }
});
</script>
