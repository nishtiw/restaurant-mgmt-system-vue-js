<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on home page</h1>
  <table>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <router-link :to="'/update-restaurant/' + item.id">Update</router-link>
        <button v-on:click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "HomeComp",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRestaurant(id) {
      console.log("id: ", id);
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      console.log(result);
      this.restaurants = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
table,
tr,
td {
  border: 1px solid black;
}

td {
  width: 160px;
  height: 50px;
}

td button {
  margin: 5px;
  border: 2px solid skyblue;
  background-color: skyblue;
  color: white;
  padding: 6px;
}

td button:hover {
  margin: 5px;
  border: 2px solid black;
  background-color: black;
  color: white;
  padding: 6px;
}
</style>