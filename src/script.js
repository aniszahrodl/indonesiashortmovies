function film() {
  return {
    aksi: [],
    drama: [],
    horor: [],
    komedi: [],

    selectedFilm: null,
    init() {
      // Fetch data from JSON file
      fetch("https://FebrianiDwi.github.io/dbFilm/filmAksi.json")
        .then((response) => response.json())
        .then((data) => {
          this.aksi = data.slice(0, 5);
        });

      fetch("https://FebrianiDwi.github.io/dbFilm/filmDrama.json")
        .then((response) => response.json())
        .then((data) => {
          this.drama = data.slice(0, 5);
        });

      fetch("https://FebrianiDwi.github.io/dbFilm/filmHoror.json")
        .then((response) => response.json())
        .then((data) => {
          this.horor = data.slice(0, 5);
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmKomedi.json")
        .then((response) => response.json())
        .then((data) => {
          this.komedi = data.slice(0, 5);
        })
        .catch((error) => console.error("Error fetching data:", error));
    },

    openModal(film) {
      this.selectedFilm = film;
    },
  };
}

function subfilm() {
  return {
    aksi: [],
    drama: [],
    horor: [],
    komedi: [],

    selectedFilm: null,
    init() {
      // Fetch data from JSON file
      fetch("https://FebrianiDwi.github.io/dbFilm/filmAksi.json")
        .then((response) => response.json())
        .then((data) => {
          this.aksi = data;
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmDrama.json")
        .then((response) => response.json())
        .then((data) => {
          this.drama = data;
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmHoror.json")
        .then((response) => response.json())
        .then((data) => {
          this.horor = data;
        });
      fetch("https://FebrianiDwi.github.io/dbFilm/filmKomedi.json")
        .then((response) => response.json())
        .then((data) => {
          this.komedi = data;
        })
        .catch((error) => console.error("Error fetching data:", error));
    },

    openModal(film) {
      this.selectedFilm = film;
    },
  };
}
