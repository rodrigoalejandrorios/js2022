import fetch from "node-fetch";

const url = "https://rickandmortyapi.com/api/character";
//API de ejemplo: Rick and Morty API😎

const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

//Maravilloso🔥
const data = await getData();
console.log(data);
