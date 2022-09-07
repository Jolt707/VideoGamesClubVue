<template>
  <div class="navbar">
    <router-link to="/" class="navbar-title bettercompass-blue"
      >BetterVideoGames™ Club</router-link
    >
    <router-link to="/" class="navbar-item" :class="{ active: active('/') }"
      >Home</router-link
    >
    <router-link
      to="/news"
      class="navbar-item"
      :class="{ active: active('/news') }"
      >News</router-link
    >
    <router-link
      to="/comp"
      class="navbar-item"
      :class="{ active: active('/comp') }"
      >Competitions</router-link
    >
    <router-link
      to="/gallery"
      class="navbar-item"
      :class="{ active: active('/gallery') }"
      >Gallery</router-link
    >
    <router-link
      to="/members"
      class="navbar-item"
      :class="{ active: active('/members') }"
      >Members</router-link
    >
    <div class="navbar2">
      <a @click="switchTheme()" class="navbar-item" style="justify-self: end"
        >Theme switcher</a
      >
      <a class="hamburger" @click="mobileNavbar()">☰</a>
    </div>
  </div>

  <div class="mobile-navbar" id="mobile-navbar">
    <router-link
      to="/"
      class="mobile-navbar-item"
      :class="{ active: active('/') }"
      >Home</router-link
    >
    <router-link
      to="/news"
      class="mobile-navbar-item"
      :class="{ active: active('/news') }"
      >News</router-link
    >
    <router-link
      to="/comp"
      class="mobile-navbar-item"
      :class="{ active: active('/comp') }"
      >Competitions</router-link
    >
    <router-link
      to="/gallery"
      class="mobile-navbar-item"
      :class="{ active: active('/gallery') }"
      >Gallery</router-link
    >
    <router-link
      to="/members"
      class="mobile-navbar-item"
      :class="{ active: active('/members') }"
      >Members</router-link
    >
    <a
      @click="switchTheme()"
      class="mobile-navbar-item"
      style="justify-self: end"
      >Theme switcher</a
    >
  </div>
  <router-view />
  <div class="footer">
    <p class="footer-item">Author: Jolt707</p>
    <p class="footer-item">
      <a href="mailto:bettervideogames@gmail.com">Email us!</a>
    </p>
    <p class="footer-item">
      <a
        href="https://github.com/JensenStamp/BetterVideoGamesClub"
        target="_blank"
        >Site Source Code</a
      >
    </p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      light: localStorage.getItem("light") === "true",
    };
  },
  methods: {
    active(route) {
      return route === this.$route.path;
    },
    switchTheme() {
      const body = document.getElementById("body");
      this.light = !this.light;
      localStorage.setItem("light", this.light);
      body.className = this.light ? "light" : "dark";
    },
    mobileNavbar() {
      const x = document.getElementById("mobile-navbar");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  },
  mounted() {
    const body = document.getElementById("body");
    body.className = this.light ? "light" : "dark";
  },
  watch: {
    $route(route) {
      document.title = route.name + " - BetterVideoGames";
    },
  },
};
</script>
