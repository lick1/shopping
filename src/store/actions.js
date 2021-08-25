import {ADD_COUNTER,ADD_TO_CART} from './mutation-type.js'
export default {
  addCart(content, payload) {
    let oldProduct = null
    content.state.cartList.forEach((item) => {
      if (item.iid == payload.iid) {
        oldProduct = item
      }
    })
    if (oldProduct) {
      content.commit(ADD_COUNTER, oldProduct)
    } else {
      payload.count = 1;
			payload.checked = true;
      content.commit(ADD_TO_CART, payload);
    }
  }
}
