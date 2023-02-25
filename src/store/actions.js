//提交状态，调用mutations方法对数据进行操作
//action可以提交mutation
//action中可以执行store.commit
//在页面中调用这个action，需要执行store.dispatch
import axiosClient from '../axiosClient';
export function searchMeals({ commit }, keyword) {
    axiosClient.get('search.php?s='+keyword)  //making request to server
        .then(({ data }) => {  //with the response 'data'
            
            commit('setSearchedMeals', data.meals)// commit the mutation to save the received data
        })
}

export function searchMealsByLetter({ commit }, letter) {
    axiosClient.get('search.php?f='+letter)  //making request to server
        .then(({ data }) => {  //with the response 'data'
            
            commit('setMealsByLetter', data.meals)// commit the mutation to save the received data
        })
}

export function searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get('filter.php?i='+ingredient)  //making request to server
        .then(({ data }) => {  //with the response 'data'
            
            commit('setMealsByIngredient', data.meals)// commit the mutation to save the received data
        })
}