const API_RANDOM =
  "https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_o5jKiBu7nddK5Pk9WnrAT9ESG8k9xzqDzneETXQucxoTEha9j3NQdIzje4hMGDdH";
const API_FAVORITES =
  "https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_o5jKiBu7nddK5Pk9WnrAT9ESG8k9xzqDzneETXQucxoTEha9j3NQdIzje4hMGDdH";

const spanError = document.getElementById("error");

async function loadRandomMichis() {
  const res = await fetch(API_RANDOM);
  const data = await res.json();
  console.log("Random");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    img1.src = data[0].url;
    img2.src = data[1].url;
  }
}

async function loadFavoritesMichis() {
  const res = await fetch(API_FAVORITES);
  const data = await res.json();
  console.log("Favoritos");
  console.log(data);

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}

loadRandomMichis();
loadFavoritesMichis();
