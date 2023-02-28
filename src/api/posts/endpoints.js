const endpoints = {
  getAll: (page) => {
    return {
      url: `/posts/?page=${page}`,
    };
  },
  getOne: (id) => {
    return {
      url: `/posts/${id}`,
    };
  },
};

export default endpoints;
