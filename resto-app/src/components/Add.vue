<template>
  <Header />
  <h1>Hello, Welcome on Add Restaurant page</h1>
  <form class="add">
    <input type="text" v-model="restaurant.name" placeholder="Enter name" name="name" />
    <input
      type="text"
      v-model="restaurant.address"
      placeholder="Enter address"
      name="address"
    />
    <input
      type="text"
      v-model="restaurant.contact"
      placeholder="Enter contact"
      name="contact"
    />
    <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "AddRestaurant",
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      }
    };
  },
  components: {
    Header
  },
  methods: {
    async addRestaurant() {
      console.log("this.restaurant: ", this.restaurant);
      let result = await axios.post("http://localhost:3000/restaurants", this.restaurant);
      console.log(result);
    }
  },
  mounted() {
    console.warn("mounted");
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>