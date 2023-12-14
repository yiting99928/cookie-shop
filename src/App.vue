<template>
  <div id="app">
    <Navbar-Component></Navbar-Component>
    <Cart-Component></Cart-Component>
    <Product-Component></Product-Component>
  </div>
</template>
<script setup>
  import NavbarComponent from './components/navbarComponent.js'
  import CartComponent from './components/cartComponent.js'
  import ProductComponent from './components/productComponent.js'
</script>

<style>
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
  .table-image {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
</style>