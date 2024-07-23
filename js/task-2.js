const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// const createGaleryCard = (picture) => {
//   const galleryListItem = document.createElement("li");
//   galleryListItem.classList.add("whatever-you-want-styles','js-whatever-you-want-styles");

//   const galleryListItemImg = document.createElement("img");
//   galleryListItemImg.src = picture.url;
//   galleryListItemImg.alt = picture.alt;
//   galleryListItemImg.width = 360;
//   galleryListItemImg.height = 300;
//   galleryListItem.append(galleryListItemImg);

//   return galleryListItem;
// };
// const galleryCardArr = images.map((imgData) => createGaleryCard(imgData));

// const galleryList = document.querySelector(".gallery");
// galleryList.append(...galleryCardArr);

const createGaleryCard = (picture) => {
  return `<li class="whatever-you-want-styles','js-whatever-you-want-styles">
           <img src="${picture.url}" alt="${picture.alt}" width="360" height="300">
        </li>`;
};
const galleryCardArr = images.map((imgData) => createGaleryCard(imgData)).join("");
const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryCardArr);
