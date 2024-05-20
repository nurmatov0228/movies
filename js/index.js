const card = document.querySelector("#list");
const katta = document.querySelector("#katta");

var movies = [
  {
    title: "Patton Oswalt: A....",
    year: 2017,
    categories: ["Uncategorized"],
    summary: "Patton Oswald, despite a personal....",
    imdbId: "tt7026230",
    imdbRating: 7.4,
    runtime: 66,
    language: "English",
    trailer: "https://youtube.com/watch?v=4hZi5QaMBFc",
    bigPoster: "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
  },
  {
    title: "New York Doll",
    year: 2005,
    categories: ["Documentary", "Music"],
    summary: "A recovering alcoholic and recent....",
    imdbId: "tt0436629",
    imdbRating: 7.9,
    runtime: 75,
    language: "English",
    trailer: "https://youtube.com/watch?v=jwD04NsnLLg",
    bigPoster: "http://i3.ytimg.com/vi/jwD04NsnLLg/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/jwD04NsnLLg/hqdefault.jpg",
  },
  {
    title: "And Then I Go",
    year: 2017,
    categories: ["Drama"],
    summary: "In the cruel world of junior high....",
    imdbId: "tt2018111",
    imdbRating: 7.6,
    runtime: 99,
    language: "English",
    trailer: "https://youtube.com/watch?v=8CdIiD6-iF0",
    bigPoster: "http://i3.ytimg.com/vi/8CdIiD6-iF0/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/8CdIiD6-iF0/hqdefault.jpg",
  },
  {
    title: "An Extremely Goo..",
    year: 2000,
    categories: ["Animation", "Comedy", "Family", "Sport"],
    summary: "It's a big time in Max's life. He....",
    imdbId: "tt0208185",
    imdbRating: 6.4,
    runtime: 79,
    language: "English",
    trailer: "https://youtube.com/watch?v=H8oSvldAGfg",
    bigPoster: "http://i3.ytimg.com/vi/H8oSvldAGfg/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg",
  },
  {
    title: "Peter Rabbit",
    year: 2018,
    categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
    summary: "Based on the books by Beatrix Pot....",
    imdbId: "tt5117670",
    imdbRating: 6.6,
    runtime: 95,
    language: "English",
    trailer: "https://youtube.com/watch?v=7Pa_Weidt08",
    bigPoster: "http://i3.ytimg.com/vi/7Pa_Weidt08/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/7Pa_Weidt08/hqdefault.jpg",
  },
  {
    title: "Love Songs",
    year: 2007,
    categories: ["Uncategorized"],
    summary: "Julie's boyfriend Ismaël lives wi....",
    imdbId: "tt0996605",
    imdbRating: 7.2,
    runtime: 91,
    language: "English",
    trailer: "https://youtube.com/watch?v=s54vpKAFmS0",
    bigPoster: "http://i3.ytimg.com/vi/s54vpKAFmS0/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/s54vpKAFmS0/hqdefault.jpg",
  },
  {
    title: "89",
    year: 2017,
    categories: ["Uncategorized"],
    summary: "89 tells the incredible story of....",
    imdbId: "tt7614404",
    imdbRating: 8.1,
    runtime: 91,
    language: "English",
    trailer: "https://youtube.com/watch?v=5hfAExhHTMM",
    bigPoster: "http://i3.ytimg.com/vi/5hfAExhHTMM/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/5hfAExhHTMM/hqdefault.jpg",
  },
  {
    title: "The Foster Boy",
    year: 2011,
    categories: ["Drama"],
    summary: "The illegitimate orphan child, 12....",
    imdbId: "tt2057931",
    imdbRating: 7.4,
    runtime: 107,
    language: "English",
    trailer: "https://youtube.com/watch?v=E9Qv_XVJ-js",
    bigPoster: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/E9Qv_XVJ-js/hqdefault.jpg",
  },
  {
    title: "Forever My Girl",
    year: 2018,
    categories: ["Drama", "Music", "Romance"],
    summary: "After being gone for a decade a co....",
    imdbId: "tt4103724",
    imdbRating: 6.4,
    runtime: 108,
    language: "English",
    trailer: "https://youtube.com/watch?v=3vqcMr1q5Uc",
    bigPoster: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/3vqcMr1q5Uc/hqdefault.jpg",
  },
  {
    title: "Tom Segura: Disg...",
    year: 2018,
    categories: ["Comedy", "Documentary"],
    summary: "Comedian Tom Segura rants about f....",
    imdbId: "tt7379330",
    imdbRating: 7.5,
    runtime: 0,
    language: "English",
    trailer: "https://youtube.com/watch?v=kYYINJM3lPA",
    bigPoster: "http://i3.ytimg.com/vi/kYYINJM3lPA/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/kYYINJM3lPA/hqdefault.jpg",
  },
  {
    title: "The Secret Rules...",
    year: 2015,
    categories: ["Documentary"],
    summary:
      "Professor Marcus du Sautoy demyst...",
    imdbId: "tt5818010",
    imdbRating: 7.5,
    runtime: 58,
    language: "English",
    trailer: "https://youtube.com/watch?v=hpyxmT6KSvw",
    bigPoster: "http://i3.ytimg.com/vi/hpyxmT6KSvw/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/hpyxmT6KSvw/hqdefault.jpg",
  },
  {
    title: "Secrets in the Fall",
    year: 2015,
    categories: ["Family"],
    summary:
      "Nothing is impossible for a group...",
    imdbId: "tt2522908",
    imdbRating: 7.3,
    runtime: 0,
    language: "English",
    trailer: "https://youtube.com/watch?v=eMVw1pHVMAw",
    bigPoster: "http://i3.ytimg.com/vi/eMVw1pHVMAw/maxresdefault.jpg",
    smallPoster: "http://i3.ytimg.com/vi/eMVw1pHVMAw/hqdefault.jpg",
  },
];
movies.forEach(function (item) {
  let newCards = document.createElement("div");
  console.log(item.title + " " + item.summary + " " + item.imdbRating);
  newCards.innerHTML = `
    <div
      class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" id="card"
    >
      <a href="#">
        <img
          class="rounded-t-lg overflow-hidden"
          src="${item.bigPoster}"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white"
          >
            ${item.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-white-700 dark:text-gray-400" id="kichkinaopacity">
            ${item.summary}
        </p>
        <a
          href="${item.trailer}"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Treiler ko'rish
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <p>${item.imdbRating}</p>
      </div>
    </div>`;
  card.append(newCards);
});
