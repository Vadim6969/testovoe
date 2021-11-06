export const state = () => ({
  list: [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "nameC",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 1000
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "name B",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 10
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "nameA",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 10000
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "name   Z",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 2000
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEyJHkVlCIYKDCl4OtfTrQR8nu7YMEuqioJA&usqp=CAU",
      title: "nameD",
      text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      price: 15000
    },

  ],
  options: [
    { name: 'По умолчанию', id: '1' },
    { name: 'от меньшего к большему', id: '2' },
    { name: 'от большего к меньшему', id: '3' },
    { name: 'По наименованию', id: '4' }
  ],
})
export const mutations = {

  sorted(state, payload) {
    const sortByMinPrice = (a, b) => a.price > b.price ? 1 : -1;
    const sortByMaxPrice = (a, b) => a.price < b.price ? 1 : -1;
    const sortByTitle = (a, b) => a.title.toLowerCase().replace(/\s/g, '') > b.title.toLowerCase().replace(/\s/g, '') ? 1 : -1;
      switch(payload){
        case '2': return state.list.sort(sortByMinPrice)
        case '3': return state.list.sort(sortByMaxPrice)
        case '4': return state.list.sort(sortByTitle)
        default: return state.list;
      }

  },

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
  sorted(context, payload) {
    context.commit('sorted', payload)
  },
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
  },
  getSortOptions (state) {
    return state.options
  }
}
