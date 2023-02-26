//定义state数据的修改操作
//更改store中state状态的唯一方法就是提交mutation
//每个mutation中都有一个字符串类型的事件类型和一个回调函数
//需要改变state的值就要在回调函数中改变
//执行这个回调函数：store.commit
export function setSearchedMeals(state, meals) { //accept state, and meals which are searched and found
    state.searchedMeals = meals || []
}

export function setMealsByLetter(state, meals) { //accept state, and meals which are searched and found
    state.mealsByLetter = meals || []
}

export function setMealsByIngredient(state, meals) { //accept state, and meals which are searched and found
    state.mealsByIngredient = meals || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
  }