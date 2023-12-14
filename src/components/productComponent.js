import productStore from "../store/productStore.js"
import cartStore from "../store/cartStore.js";
import { mapState, mapActions } from 'pinia';

export default {
  data() {
    return {};
  },
  template: `<div class="row row-cols-3 mx-auto g-4 w-75">
    <div class="col" v-for="product in sortProducts" :key="product.id">
        <div class="card">
        <img :src="product.imageUrl" class="card-img-top" alt="">
            <div class="card-body">
            <h6 class="card-title">{{product.title}}
                <span class="float-end">$ {{product.price}}</span>
            </h6>
            <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(product.id, )">加入購物車</a>
            </div>
        </div>
    </div>
    </div>`,
  computed: {
    ...mapState(productStore, ['sortProducts']),
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
  },
};