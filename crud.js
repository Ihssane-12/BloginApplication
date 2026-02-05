let title = document.getElementById("title");
let destination = document.getElementById("destination");
let note = document.getElementById("note");
let category = document.getElementById("category");
let imageUrl = document.getElementById("image-url");
let btn = document.getElementById("button");
let cancelBtn = document.getElementById("cancel");
const articlesContainer = document.getElementById("articles");


function createArticle(data) {
    const article = document.createElement("article");

    article.className =
        "bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 group relative";

    article.innerHTML = `
        <!-- menu 3 dots -->
        <div class="absolute top-3 right-3 z-50">
            <button type="button"
                class="menu-btn bg-white/80 px-2 rounded-full text-xl">
                ⋮
            </button>

            <div class="menu hidden absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                <button class="edit w-full text-left px-4 py-2 hover:bg-gray-100">
                     Modifier
                </button>
                <button class="delete w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                     Supprimer
                </button>
            </div>
        </div>

        <div class="overflow-hidden">
            <img src="${data.imageUrl}"
                alt="${data.title}"
                class="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-500">
        </div>

        <div class="p-5">
            <h3 class="title font-bold text-lg text-gray-900 group-hover:text-green-600 transition">
                ${data.title}
            </h3>
            <p class="destination text-sm text-gray-500 mt-1">
                ${data.destination} · 
                <span class="note font-medium">${data.note}</span>
            </p>
            <span class="category inline-block mt-2 text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                ${data.category}
            </span>
     
            </div>
    `
}
    





   