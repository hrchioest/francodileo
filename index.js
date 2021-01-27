let clientId = "KLqjDPKbkXRTZ7Rez2diAJ3mD5w0_t6tGNi-jFmmVBc";
const URL = `https://api.unsplash.com/photos/?page=1&client_id=${clientId}`;

let photos = [];

const fetchPhotos = async (url = URL) => {
  try {
    const resolve = await fetch(url, { method: "GET" });
    const photos = await resolve.json();
    return photos;
  } catch (err) {
    console.error(err);
  }
};

const showMessage = () => {
  document.querySelector("#message").innerHTML = "No hay photos";
  document.querySelector("#search").disabled = true;
};

const deletePhoto = (id) => {
  document.getElementById(id).remove();
  photos = photos.filter((photo) => photo.id != id);
  photos.length === 0 ? showMessage() : null;
};

const createNode = ({ id, urls, alt_description }) => {
  const node = `
  <div class="col-md-4 col-12 container-card" id="${id}">
    <div clas="card mt-5 ml-3">
        <img class="photos" src="${urls.regular}" class="card-img-top"/>
        <div class="card-body">
            <h5 class="card-title">${alt_description} </h5>
            <button class="button-delete" onClick =deletePhoto("${id}") class="btn btn-block btn-dark">
              <img src="./img/trash-solid.svg" alt="trash"></button>
         </div>
       </div>
     </div>
  </div>
`;

  return node;
};

const iteratePhotos = (images) => {
  images.map((photo) => {
    const html = createNode(photo);
    document.getElementById("apiPhoto").insertAdjacentHTML("beforeend", html);
  });
};

const fetchSearchPhotos = async (search) => {
  const url = `https://api.unsplash.com/search/photos?query=${search}&client_id=${clientId}`;
  try {
    const resolve = await fetch(url);
    const { results: photos } = await resolve.json();
    return photos;
  } catch (err) {
    console.error(err);
  }
};

const searchPhotos = async () => {
  const search = document.getElementById("search").value;
  const results = await fetchSearchPhotos(search);
  document.getElementById("apiPhoto").innerHTML = "";
  iteratePhotos(results);
};

async function start() {
  photos = await fetchPhotos();
  iteratePhotos(photos);
  document.getElementById("find").addEventListener("click", searchPhotos);
}

window.onload = start();
