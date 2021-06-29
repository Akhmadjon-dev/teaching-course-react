let api = "https://jsonplaceholder.typicode.com/users";

async function get(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const ids = res.reduce((sum, i) => [...sum, i.name], []);
      localStorage.setItem("id", JSON.stringify(ids));
      console.log(localStorage.getItem("id"));
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("finally"));
}

get(api);
