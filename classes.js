class NewRelease {
  #port = 80; //<= Con # y el nombre,
  //el metodo se convierte en privado🚀
  listen() {
    console.log(`Listening in port ::
    ${this.#port}`);
  }
}

new NewRelease().listen();
//✅ Es valido
new NewRelease().#port;
//❌ No es valido, metodo privado🔒
