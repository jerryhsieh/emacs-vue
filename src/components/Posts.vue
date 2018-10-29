<template>
  <div class="container">
    <h2 class="text-center my-3">List of All Posts</h2>
    <div class="row">
      <div class="col-md-6" v-for="post in posts" v-bind:key="post.id">
        <div class="card mb-4 shadow-sm">
          <div class="card-title ml-2">{{post.title}}</div>
          <div class="card-text mb-4 ml-2">{{post.body.substring(0,50)}}...</div>
          <a href="#" class="btn btn-outline-primary w-25 m-2">More...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  names: "Posts",
  data: function() {
    return {
      posts: [],
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(res => (this.posts = res.data));
  },
};
</script>

<style>
h2 {
  background: #ccc;
  color: #fff;
}
</style>
