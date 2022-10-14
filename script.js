save_btn = document.querySelector(".save-btn");

save_btn.onclick = function() {
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Axtariwlar yuklendi"
        this.style = "background: #f1f5f4; color: #333; pointer-events: none";
    }, 2000);
}




let cars = [
    {
        marka : 'BMW',
        creator : 'Germany',
        madeYear : '1916'
    },
    {
        marka : 'Renault',
        creator : 'France',
        madeYear : '1899'
    },
    {
        marka : 'Changan',
        creator : 'China',
        madeYear : '1959'
    },
    {
        marka : 'Lada',
        creator : 'Russia',
        madeYear : '1973'
    },
    {
        marka : 'Naz-Lifan',
        creator : 'Azerbaijan',
        madeYear : '2006'
    },
];

let tb = document.getElementById('tb');
ekran(cars);



function Search() {
    let text = document.querySelector("#text");
    let tap = cars.filter(item => {
        return item.marka.toLocaleLowerCase().includes(text.value.toLocaleLowerCase());
    })
    let data = "";
    tap.forEach(function (item,index) {
        data += `<li class = "list-group-item" ${item.cars} </li>`
    });

    document.querySelector('#list').innerHTML = data;

    ekran(tap)

};
    

function ekran(arr) {
    let data = "";
    arr.forEach(function (item,index) {
        data += `<tr>
        <th scope="row"> ${index+=1} </th>
        <td> ${item.marka} </td>
        <td> ${item.creator} </td>
        <td> ${item.madeYear} </td>
        </tr>`;
    });

    tb.innerHTML = data;

};
