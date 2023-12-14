import { mapState } from 'pinia';
import cartStore from '../store/cartStore.js';

export default {
  template: `<nav class="navbar bg-light">
        <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">香香餅乾店</span>
        <button type="button" class="btn">
            購物車
            <span class="badge rounded-pill bg-danger text-white">{{this.cart.length}}</span>
        </button>
        </div>
    </nav>`,
  computed: {
    ...mapState(cartStore, ['cart']),
  },
};