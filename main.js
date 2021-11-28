const elCardBox = document.querySelector("#card-box");

const partOfMovies = movies.slice(0, 20);

elCardBox.innerHTML = null

for (var item of partOfMovies) {
    let newLi = document.createElement("li");
    let newDivForImg = document.createElement("div");
    let newImg = document.createElement("img");
    let newDivForBody = document.createElement("div");
    let newH5 = document.createElement("h5");
    let newPYear = document.createElement("p");
    let newPRating = document.createElement("p");
    let newDivforButton = document.createElement("div");
    let newA = document.createElement("a");
    let newButtonInfo = document.createElement("button");
    let newbuttonBookmark = document.createElement("button");


    newImg.setAttribute("src", `http://i3.ytimg.com/vi/${item.ytid}/maxresdefault.jpg`)
    newImg.setAttribute("width", 361);
    newImg.setAttribute("height", 270);
    newImg.classList.add("forImg")
    newDivForImg.appendChild(newImg)
    newLi.appendChild(newDivForImg)


    newH5.textContent = item.Title;
    newDivForBody.appendChild(newH5)
    newH5.classList.add("card-title")

    newPYear.textContent = item.movie_year;
    newDivForBody.appendChild(newPYear)
    newPYear.classList.add("card-text")

    newPRating.textContent = item.imdb_rating;
    newDivForBody.appendChild(newPRating)
    newPRating.classList.add("card-text")


    newA.textContent = "Watch trailer"
    newDivforButton.appendChild(newA)
    newA.classList.add("btn")
    newA.classList.add("btn-outline-primary")
    newA.setAttribute("href", `http://i3.ytimg.com/vi/${item.ytid}/maxresdefault.jpg`)

    newButtonInfo.textContent = "More Info"
    newDivforButton.appendChild(newButtonInfo)
    newButtonInfo.classList.add("btn")
    newButtonInfo.classList.add("btn-outline-info")
    newButtonInfo.classList.add("ms-2")

    newbuttonBookmark.textContent = "Bookmark"
    newDivforButton.appendChild(newbuttonBookmark)
    newbuttonBookmark.classList.add("btn")
    newbuttonBookmark.classList.add("btn-outline-success")
    newbuttonBookmark.classList.add("ms-2")

    newDivForBody.appendChild(newDivforButton)
    newDivForBody.classList.add("p-3")

    newLi.appendChild(newDivForBody)
    newLi.classList.add("card__li")
    newLi.classList.add("border")
    newLi.classList.add("border-3")
    newLi.classList.add("pb-3")
    newLi.classList.add("mb-4")

    elCardBox.appendChild(newLi)
}