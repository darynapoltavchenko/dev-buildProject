const floorArray = [{
    id: 0,
    addres: "вул. Незалежності 7",
    floor: "1",
    flatQuantity: "16",
    flatsFree: "7",
    flatsSale: "3",
    flatsBook: "1",
    flatsSold: "7",
    floorNumber: 1,
},
{
    id: 1,
    addres: "вул. Незалежності 7",
    floor: "2",
    flatQuantity: "16",
    flatsFree: "4",
    flatsSale: "7",
    flatsBook: "2",
    flatsSold: "2",
    floorNumber: 2,
},
{
    id: 2,
    addres: "вул. Незалежності 7",
    floor: "3",
    flatQuantity: "16",
    flatsFree: "8",
    flatsSale: "1",
    flatsBook: "2",
    flatsSold: "9",
    floorNumber: 3,
},
{
    id: 3,
    addres: "вул. Незалежності 7",
    floor: "4",
    flatQuantity: "16",
    flatsFree: "3",
    flatsSale: "0",
    flatsBook: "6",
    flatsSold: "8",
    floorNumber: 4,
},
{
    id: 4,
    addres: "вул. Незалежності 7",
    floor: "5",
    flatQuantity: "6",
    flatsFree: "1",
    flatsSale: "0",
    flatsBook: "0",
    flatsSold: "5",
    floorNumber: 5,
}]



window.addEventListener('load', () => {
    const installFloor = () => {
        const floors = document.querySelectorAll('.floor')
        const floorInfo = document.querySelector('.build-item')

        const removeActiveClass = () => {
            flats.forEach(active => {
                active.classList.remove('active')
            })
        }

        const initialValue = [{
            id: 4,
            addres: "вул. Незалежності 7",
            floor: "5",
            flatQuantity: "6",
            flatsFree: "1",
            flatsSale: "0",
            flatsBook: "0",
            flatsSold: "5"
        }]




        floors.forEach(floor => {
            floor.addEventListener('click', () => {
                removeActiveClass()
                floor.classList.add('active')

                let thisFloor = floor.getAttribute('data-number')

                let floorNumber = floorArray.filter(item => item.floorNumber === Number(thisFloor))

                console.log(initialValue, floorNumber)

                renderInfo(floorNumber)
            })
        })
    }

    document.querySelector('.floor-plan') ? installFloor() : null
}
)




