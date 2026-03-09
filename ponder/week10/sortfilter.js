

// nums = [12, 20, 10, 3, 6]       
// console.log(nums.sort(compareFn));

// const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// let simpleSort = simpleList.sort();
// let lowerList = simpleList.map(function(item){
//     return item.toLowerCase();
// })
// let lowerSort = lowerList.sort();

// console.log(lowerSort);

// let searchTerm ='an';

// let filterFruit = lowerSort.filter(searchFruit)
// function searchFruit(item){
//     return item.includes(searchTerm);
// }

// console.log(filterFruit);


// const products = [
//   {
//     productName: "Wireless Mouse",
//     price: 29.99
//   },
//   {
//     productName: "Bluetooth Keyboard",
//     price: 49.99
//   },
//   {
//     productName: "Laptop Stand",
//     price: 39.99
//   }
// ];        

// function compareFn(a,b) {
//   if (a.productName < b.productName) {
//     return -1;
//   } else if (a.productName > b.productName) {
//     return 1;
//   }
//  return 0;
// }
// let productSort = products.sort(compareFn);

// console.log(productSort)



// const animals = [
//   {
//     name: "Lion",
//     traits: ["brave", "strong", "fierce", "wild"]
//   },
//   {
//     name: "Elephant",
//     traits: ["large", "gentle", "smart", "wild"]
//   },
//   {
//     name: "Fox",
//     traits: ["sly", "quick", "clever", "wild"]
//   },
//   {
//     name: "Dog",
//     traits: ["loyal", "friendly", "playful", "cuddly"]
//   },
//   {
//     name: "Cat",
//     traits: ["quiet", "independent", "curious", "cuddly"]
//   }
// ];
              
// let query = 'ox';
// let filterList = animals.filter(searchList);
// function searchList(item){
//     return item.name.toLowerCase().includes(query.toLowerCase());
// }
// console.log(filterList);

// let queryTrait = 'cuddly';
// let filteredTraits = animals.filter(searchTraits);

// function searchTraits(item){
//     return item.traits.find((trait)=> 
//         trait.toLowerCase().includes(queryTrait.toLowerCase())
//     )
// }

// console.log(filteredTraits);




const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 1,
    description:
      "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Canyon", "Tetons"],
    difficulty: 1,
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions:
      "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc:
      "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Caves", "Yellowstone", "Waterfall"],
    difficulty: 3,
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions:
      "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Rafting"],
    difficulty: 1,
    description:
      "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions:
      "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Volcanic", "View"],
    difficulty: 2,
    description:
      "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
    directions:
      "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
    trailhead: [43.78555, -111.98996]
  }
];
                
const searchInput = document.querySelector("#search");
const searchButton = document.querySelector("button");
const hikeContainer = document.querySelector("#hike-container");

function renderHikes(hikes){
    hikeContainer.innerHTML = "";
    hikes.forEach(hike => {
        const card = document.createElement("div");
        card.classList.add("hike-card");
        card.innerHTML = `
          <div class="hike-content">
        <h2>${hike.name}</h2>
        <div class="hike-tags">
          ${hike.tags.map(tag => `<button>${tag}</button>`).join("")}
        </div>
        <p>${hike.description}</p>
        <p><span class="rating" role="img" aria-label="${hike.difficulty} out of 5">🥾</span></p>
      </div>
        `;
        hikeContainer.appendChild(card);
    });
}

renderHikes(hikes);

function searchHikes() {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = hikes.filter(hike => {
    const nameMatch = hike.name.toLowerCase().includes(query);
    const tagMatch = hike.tags.some(tag =>
      tag.toLowerCase().includes(query)
    );
    return nameMatch || tagMatch;
  });

  renderHikes(filtered);
}

searchButton.addEventListener("click", searchHikes);