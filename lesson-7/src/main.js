const element2 = document.querySelector('.test')

const allPoints = {
  allProducts: 'https://fakestoreapi.com/products',
}

fetch(allPoints.allProducts)
  .then(data => data.json())
  .then(res => renderData(res))

const renderData = response => {
  response.map(item => getElement(item))
}

const getElement = ({ title, description, image, price, rating }) => {
  let layout = `
  <div class="flex flex-col items-center w-96 cursor-pointer">
            <img
              src=${image}
              width="150"
              height="150"
            />
            <h3 class="text-lg text-center font-semibold my-3">
              ${title}
            </h3>
            <p class="text-xs text-center text-slate-600 mb-2">
              ${description}
            </p>
            <div class="flex items-center gap-3">
              <span class="text-lg">$${price}</span>
              <p class="flex items-center gap-1">
                <img
                  src="./src/img/star-ratings.svg"
                  width="20"
                  alt="Rating"
                />
                <span>${rating.rate}</span>
              </p>
            </div>
          </div>
  `

  element2.innerHTML += layout
}