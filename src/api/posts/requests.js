import endpoints from "./endpoints";
const { getAll, getOne } = endpoints;

const requests = {
  getAll: async (page) => {
    const { url } = getAll(page);
    const res = await fetch(url);
    const data = await res.json();
    return new Promise((res, rej) => {
      data ? res(data) : rej(undefined);
    });
  },
  getOne: async (id) => {
    const URL = `posts/${id}`;
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    return new Promise((res, rej) => {
      data ? res(data) : rej(undefined);
    });
  },
  deleteOne: async (id) => {
    const url = `posts/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return new Promise((res, rej) => {
      data ? res(data) : rej(undefined);
    });
  },
};

export default requests;
