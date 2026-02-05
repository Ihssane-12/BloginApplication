let title = document.getElementById("title");
let destination = document.getElementById("destination");
let note = document.getElementById("note");
let category = document.getElementById("category");
let imageUrl = document.getElementById("image-url");
let btn = document.getElementById("button");
let cancelBtn = document.getElementById("cancel");
const articlesContainer = document.getElementById("articles");

let articleToEdit = null;

// === COMMIT: add dynamic article creation function ===
// git commit -m "add dynamic article creation function"

function createArticle(data) {
    const article = document.createElement("article");

    article.className =
        "bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 group relative";

    article.innerHTML = `
        <div class="absolute top-3 right-3 z-50">
            <button type="button" class="menu-btn bg-white/80 px-2 rounded-full text-xl">⋮</button>

            <div class="menu hidden absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                <button class="edit w-full text-left px-4 py-2 hover:bg-gray-100">✏️ Modifier</button>
                <button class="delete w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">🗑️ Supprimer</button>
            </div>
        </div>

        <div class="overflow-hidden">
            <img src="${data.imageUrl}" alt="${data.title}"
                class="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition duration-500">
        </div>

        <div class="p-5">
            <h3 class="title font-bold text-lg">${data.title}</h3>
            <p class="destination text-sm text-gray-500">
                ${data.destination} · <span class="note">${data.note}</span>
            </p>
            <span class="category text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                ${data.category}
            </span>
        </div>
    `;

    articlesContainer.appendChild(article);
        // === COMMIT: add actions menu toggle to articles ===
    // git commit -m "add actions menu toggle to articles"

    const menuBtn = article.querySelector(".menu-btn");
    const menu = article.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
    // === COMMIT: implement article delete functionality ===
    // git commit -m "implement article delete functionality"

    const deleteBtn = article.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        article.remove();
    });
        // === COMMIT: enable article editing mode with form prefill ===
    // git commit -m "enable article editing mode with form prefill"

    const editBtn = article.querySelector(".edit");
    editBtn.addEventListener("click", () => {
        articleToEdit = article;

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
// === COMMIT: handle create and update article actions ===
// git commit -m "handle create and update article actions"

btn.onclick = function (e) {
    e.preventDefault();

    if (articleToEdit) {
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
        createArticle({
            title: title.value,
            destination: destination.value,
            note: note.value,
            category: category.value,
            imageUrl: imageUrl.value
        });
    }

    title.value = "";
    destination.value = "";
    note.value = "";
    category.value = "";
    imageUrl.value = "";
};
// === COMMIT: add cancel edit and form reset behavior ===
// git commit -m "add cancel edit and form reset behavior"

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


