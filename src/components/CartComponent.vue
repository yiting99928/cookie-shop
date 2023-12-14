<template>
  <div class="bg-light p-4 my-3">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
        <tbody>
        <tr v-for="cart in cartList.carts" :key="cart.id">
            <td width="100"><a @click.prevent="removeCartItem(cart.id)" href="#" class="text-dark"><i class="fas fa-times"></i></a></td>
            <td width="100"><img :src="cart.product.imageUrl" class="table-image" alt=""></td>
            <td>{{ cart.product.title }}</td>
            <td width="200">
            <select name="" id="" class="form-select" :value="cart.qty"
                @change="(e) => setCartQty(cart.id, e)">
                <option :value="i" v-for="i in 20">{{ i }}</option>
              </select>
            </td>
            <td width="200" class="text-end">$ {{ cart.subtotal }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td colspan="5" class="text-end">
            總金額 NT$ {{cartList.total}}
            </td>
        </tr>
        </tfoot>
    </table>
    </div>
</template>

<script>
import cartStore from '../stores/cartStore.js';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(cartStore, ['cartList']),
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty']),
  },
};
</script>

