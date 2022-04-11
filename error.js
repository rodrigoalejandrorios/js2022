import fetch from "node-fetch";

const url = "https://rickandmortyapi.com/api/characterCODRR";
//Deberia devolver error😵‍💫

const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    //Manejo de errores ❌
    throw new Error("Error", { cause: e });
  }
};

const data = await getData();
console.log(data);
