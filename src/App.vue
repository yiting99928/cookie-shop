<template>
  <div id="app" class="container">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductComponent></ProductComponent>
  </div>
</template>

<script setup>
  import NavbarComponent from './components/NavbarComponent.vue'
  import CartComponent from './components/CartComponent.vue'
  import ProductComponent from './components/ProductComponent.vue'
</script>

<style >
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