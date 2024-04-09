<template>
  <Header />
  <h1>Hello, Welcome on Update Restaurant page</h1>
  <form class="add">
    <input
      type="text"
      v-model="restaurant.name"
      placeholder="Enter name"
      name="name"
    />
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
    <button type="button" v-on:click="updateRestaurant">
      Update Restaurant
    </button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "UpdateRestaurant",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async updateRestaurant() {
      let result = await axios.put(
        "http://localhost:3000/restaurants/"+this.$route.params.id,
        this.restaurant
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
      console.log(this.restaurant);
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants?id=" + this.$route.params.id
    );
    this.restaurant = result.data[0];
  },
};
</script>