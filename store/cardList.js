export const state = () => ({
  list: [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "Наименование товара1",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: "10 000 руб."
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "Наименование товара2",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: "10 000 руб."
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "Наименование товара3",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: "10 000 руб."
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "Наименование товара4",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: "10 000 руб."
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "Наименование товара5",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: "10 000 руб."
    },

  ]
})
export const mutations = {
  addCard(state, payload) {
    state.list.push(payload)
  },
  deleteItem(state, payload) {
    state.list.forEach((el, i) => {
      if (el.id === payload) state.list.splice(i, 1)
    })

  }
}
export const actions = {
  addCard(context, payload) {
    context.commit('addCard', payload)
  },
  deleteItem(context, payload) {
    context.commit('deleteItem', payload)

  }
}
export const getters = {
  getList (state) {
    return state.list
  }
}
