let container = document.getElementById("list");

/// forma submit bo'lganda

function submitHandler(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  container.innerHTML = "";
  fetch("http://book.alitechbot.uz/api/books")
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase()) ? true : false
      );

      filtered.forEach((item) => {
        let card = ` <li>
              <p>Title: ${item.title} </p>
              <p>Author: ${item.author.firstName} </p>
              </li>`;

        container.innerHTML += card;
      });
    });
}

fetch("http://book.alitechbot.uz/api/books")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      let card = ` <li>
          <p>Title: ${item.title} </p>
          <p>Author: ${item.author.firstName} </p>
        </li>`;

      container.innerHTML += card;
    });
  });
