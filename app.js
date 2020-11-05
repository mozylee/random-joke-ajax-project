const jokeDiv = document.querySelector("#display-joke");
const btn = document.querySelector("#get-joke");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
  const jokeResponse = await fetch(url, { method: "GET" });
  const jokeJson = await jokeResponse.json();
  jokeDiv.innerHTML = jokeJson.value;
});
