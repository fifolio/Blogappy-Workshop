import endpoints from "../../api/posts/endpoints";
const { getAll } = endpoints;

const requests = {
  getAll: async (page) => {
    const { url } = getAll(page);
    const res = await fetch(url);
    const data = await res.json();
    return new Promise((res, rej) => {
      data ? res(data) : rej(undefined);
    });
  },
};

export default requests;
