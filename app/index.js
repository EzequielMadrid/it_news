const searcher = document.getElementById("searcher");
const cloud = document.getElementById("news-cloud");
const displayedTitles = [];

function clearSearcher() {
  searcher.value = "";
  searcher.focus();
}

function searchNews() {
  const newsMatch = searcher.value.toLowerCase();

  let filteredNews = randomNews.filter((x) =>
    x.title.toLowerCase().includes(newsMatch)
  );
  //console.log(filteredNews);

  if (filteredNews.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "It not found!",
    });
    return;
  }

  if (!newsMatch.trim()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Type something!",
    });
    return;
  }

  let allNewsDisplayed = true; // avoiding repeat news

  filteredNews.forEach((x) => {
    if (!displayedTitles.includes(x.title)) {
      displayedTitles.push(x.title);
      allNewsDisplayed = false;
      const box = document.createElement("article");
      box.className = "p-4 border-b-4 border-gray-600";
      box.innerHTML = `
        <img src="${x.img}" alt="news" class="w-96 h-48 object-cover mx-auto mb-2 sm:float-right rounded-xl border-4 border-green-900"/>
        <h2 class="text-2xl underline font-bold">${x.title}</h2>
        <p class="font-mono">${x.content}</p>
    `;
      cloud.appendChild(box);
    }
  });

  if (allNewsDisplayed) {
    Swal.fire({
      icon: "question",
      title: "Ey!",
      text: "It has already been founded!",
    });
  }
  searcher.value = "";
}
