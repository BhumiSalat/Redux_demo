const initState = {
  posts: [
    { id: "1", title: "for shopping", body: "Vegetables" },
    { id: "2", title: "buy milk", body: "from amul" },
    { id: "3", title: "buy cake", body: "for mummas birthday" },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
