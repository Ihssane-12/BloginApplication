let title = document.getElementById("title");
let destination = document.getElementById("destination");
let note = document.getElementById("note");
let category = document.getElementById("category");
let imageUrl = document.getElementById("image-url");
let btn = document.getElementById("button");
let cancelBtn = document.getElementById("cancel");
const articlesContainer = document.getElementById("articles");

// article li ghadi nmodifier
let articleToEdit = null;

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
                    ✏️ Modifier
                </button>
                <button class="delete w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                    🗑️ Supprimer
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
    `;
    

    articlesContainer.appendChild(article);

    const menuBtn = article.querySelector(".menu-btn");
    const menu = article.querySelector(".menu");
    const deleteBtn = article.querySelector(".delete");
    const editBtn = article.querySelector(".edit");

    // فتح / غلق menu
    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("hidden");
    });

    // supprimer
    deleteBtn.addEventListener("click", function () {
        article.remove();
    });

    // modifier
    editBtn.addEventListener("click", function () {
        articleToEdit = article;

        // highlight
        article.classList.add("ring-2", "ring-green-500");

        title.value = article.querySelector(".title").innerText;
        destination.value = article.querySelector(".destination").innerText;
        note.value = article.querySelector(".note").innerText;
        category.value = article.querySelector(".category").innerText;
        imageUrl.value = article.querySelector("img").src;

        btn.innerText = "Update";
        cancelBtn.classList.remove("hidden");

        menu.classList.add("hidden");
    });
}

// Save / Update
btn.onclick = function (e) {
    e.preventDefault();

    if (articleToEdit) {
        // UPDATE
        articleToEdit.querySelector(".title").innerText = title.value;
        articleToEdit.querySelector(".destination").innerText = destination.value;
        articleToEdit.querySelector(".note").innerText = note.value;
        articleToEdit.querySelector(".category").innerText = category.value;
        articleToEdit.querySelector("img").src = imageUrl.value;

        articleToEdit.classList.remove("ring-2", "ring-green-500");

        articleToEdit = null;
        btn.innerText = "Save";
        cancelBtn.classList.add("hidden");
    } else {
        // CREATE
        createArticle({
            title: title.value,
            destination: destination.value,
            note: note.value,
            category: category.value,
            imageUrl: imageUrl.value
        });
    }

    // reset form
    title.value = "";
    destination.value = "";
    note.value = "";
    category.value = "";
    imageUrl.value = "";
};

// Cancel
cancelBtn.onclick = function () {
    if (articleToEdit) {
        articleToEdit.classList.remove("ring-2", "ring-green-500");
    }

    articleToEdit = null;
    btn.innerText = "Save";
    cancelBtn.classList.add("hidden");

    title.value = "";
    destination.value = "";
    note.value = "";
    category.value = "";
    imageUrl.value = "";
};     