let elSelect = document.querySelector(".capital-choose")
let elCountryList = document.querySelector(".country-list")

const countries = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked: false,
        isBasket: false
    }
]

//select part
function createOptionToSelect(arr, list) {
    list.innerHTML = ''

    const defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = "Filter by Region";
    list.appendChild(defaultOption);

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All";
    list.appendChild(allOption);


    arr.forEach(item => {
        let elOption = document.createElement("option")
        elOption.value = item.capital.toLowerCase()
        elOption.textContent = item.capital
        list.appendChild(elOption)
    })
}

createOptionToSelect(countries, elSelect)
//select part


//render part
function renderCountry(arr, list) {
    list.innerHTML = ''
    arr.forEach(item => {
        let elItem = document.createElement("li")
        list.appendChild(elItem)
        elItem.outerHTML = `
            <li class="w-[264px] shadow-md rounded-md overflow-hidden">
                <img class="h-[160px] w-full object-cover" src="${item.flag}">
                <div class="p-[24px]">
                    <strong class="text-[#111517] text-[18px] font-extrabold">${item.name}</strong>
                    <p class="text-[#111517] text-[14px] mt-[16px]">${item.population}</p>
                    <p class="text-[#111517] text-[14px] mt-[8px]">${item.name}</p>
                    <p class="text-[#111517] text-[14px] mt-[8px]">${item.capital}</p>
                </div>
                <div class="flex justify-between px-5 pb-5">
                    <button class="w-[30%] py-[5px] border-[1px] border-solid rounded cursor-pointer">like</button>
                    <button class="w-[30%] py-[5px] border-[1px] border-solid rounded cursor-pointer">saved</button>
                    <button class="w-[30%] py-[5px] border-[1px] border-solid rounded cursor-pointer">edit</button>
                </div>
            </li>
        `
    });
}
renderCountry(countries, elCountryList)

//render part

//Select Change
elSelect.addEventListener("change", function (evt) {
    let changeValue = evt.target.value;
    if (changeValue == "all") {
        renderCountry(countries, elCountryList)
    } else {
        let fileteredList = countries.filter(item => item.capital.toLowerCase() == changeValue)
        renderCountry(fileteredList, elCountryList)
    }
})
