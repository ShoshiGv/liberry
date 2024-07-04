
let arrItems = [];
// let table2 = document.getElementById("table")
// let table1 = document.createElement("table")
// table2.appendChild(table1)
function getFetch() {
    fetch('http://127.0.0.1:5500/books.json', {})
        .then(response => {

            return response.json()
        })
        .then(response => { arrItems = response; creat_table(response) })
        .catch(err => console.log(err));
}

function creat_table(arrItems1 = arrItems) {

    let titles = ["name", "author", "UnitsInStock", "Audience", "code"]
    let books = []
    let table2 = document.getElementById("table")
    let table = document.createElement("table")
    const tr = document.createElement("tr")
    for (let i in titles) {
        const h = titles[i]
        const th = document.createElement("th")
        th.innerText = h;
        tr.appendChild(th)
        table2.appendChild(table)
    }
    table.appendChild(tr)
    for (let i in arrItems1) {
        const tr = document.createElement("tr")
        tr.dataset.id = arrItems1[i].code;
        for (let title in titles) {
            const txt = arrItems1[i][titles[title]];
            const td = document.createElement("td")
            td.innerText = txt;
            td.style.height = ("50px");
            td.style.width = ("100px");
            td.style.border = ("pink solid 2px");
            td.dataset.name = titles[title];

            tr.appendChild(td);
        }
        table.appendChild(tr)

    }
    table2.appendChild(table);
}

function enter() {
    let take = document.getElementById("take")
    let return1 = document.getElementById("return")
    let search = document.getElementById("search")
    let add = document.getElementById("add")
    let delete1 = document.getElementById("delete1")
    take.style.display = "block"
    return1.style.display = "block"
    search.style.display = "block"
    add.style.display = "block"
    delete1.style.display = "block"


}
function take_book() {
    const code = document.getElementById("insert").value;
    const bookIndex = arrItems.findIndex(item => item.code == code)
    arrItems[bookIndex].UnitsInStock = arrItems[bookIndex].UnitsInStock - 1;
    let table3 = document.getElementById("table")
    table3.innerText = ""
    creat_table()
}

function return_book() {
    const code = document.getElementById("insert").value;
    const bookIndex = arrItems.findIndex(item => item.code == code)
    arrItems[bookIndex].UnitsInStock = arrItems[bookIndex].UnitsInStock + 1;
    let table3 = document.getElementById("table")
    table3.innerText = ""
    creat_table()


}

function search() {
    const code = document.getElementById("code").value;
    const bookIndex = arrItems.findIndex(item => item.code == code)
    const books_found = [];
    books_found.push(arrItems[bookIndex])
    console.log(books_found)
    let table3 = document.getElementById("table")
    table3.innerText = ""
    creat_table(books_found)


}

const table = document.getElementById("table")
function delete_table(table) {
    table.deleteCaption();
}
function add_delete() {
    let name1 = document.getElementById("name")
    let author = document.getElementById("author")
    let UnitsInStock = document.getElementById("UnitsInStock")
    let Audience = document.getElementById("Audience")
    let code = document.getElementById("code")
    let ishur_add = document.getElementById("ishur_add")
    let ishur_delete = document.getElementById("ishur_delete")
    let ishur_search = document.getElementById("ishur_search")
    name1.style.display = "block"
    author.style.display = "block"
    UnitsInStock.style.display = "block"
    code.style.display = "block"
    Audience.style.display = "block"
    ishur_add.style.display = "block"
    ishur_delete.style.display = "block"
    ishur_search.style.display = "none"

}
function ishur_add1() {
    // const name1 = document.getElementById("name1").value;
    // const author = document.getElementById("author").value;
    // const Audience = document.getElementById("Audience").value;
    // const code = document.getElementById("code").value;
    let tbl = document.getElementById('table');
    let tr = document.createElement("tr");
    const inputs = document.getElementsByClassName("in");
    let newItem = {};
    for (const i of inputs) {
        if (i.value != "" ) {
            td = document.createElement("td")
            td.innerText = i.value;
            console.log(i.value);
            tr.appendChild(td);
            // newItem[i.dataset.name] = i.value;
            newItem[i.id] = i.value;

        }
        // else if(i.value = "undefined") {
        //     i++;

        // }
        else {
            alert("יש למלא את כל השדות")
            break;
        }

    }
    
    if (newItem.code != undefined ) {
        let table3 = document.getElementById("table")
        table3.innerText = ""
        arrItems.push(newItem);
        creat_table(arrItems)
    }

    // console.log(inputs)

    // table.appendChild(tr);
    // creat_table(tr)
    // creat_table(newItem)


}

// const name1 = document.getElementById("name1").value;
// const author = document.getElementById("author").value;
// const Audience = document.getElementById("Audience").value;
// const code = document.getElementById("code").value;
// let tbl = document.getElementById('table');
// let tr = document.createElement("tr");
// const inputs = document.getElementsByClassName("in");
// let newItem = {};
// for (const i of inputs) {
//     td = document.createElement("td")
//     td.innerText = i.value;
//     console.log(i.value);
//     tr.appendChild(td);
//     // newItem[i.dataset.name] = i.value;
//     newItem[i.id] = i.value;
// }
// // console.log(inputs)

// // table.appendChild(tr);
// // creat_table(tr)
// // creat_table(newItem)
// let table3 = document.getElementById("table")
//  table3.innerText = ""
// arrItems.pop(newItem);
// creat_table(arrItems)
function ishur_delete1() {


    // console.log(arrItems)
    // const code11 = document.getElementById("code").value;
    // const bookIndex11 = arrItems.findIndex(item => item.code == code11)
    // arrItems.pop(arrItems[3])
    // console.log(arrItems)
    // let table4 = document.getElementById("table")
    // table4.innerText = ""
    // creat_table(arrItems)


    // const code = document.getElementById("code").value;
    // const bookIndex = arrItems.findIndex(item => item.code != code)
    // const books_delete = [];
    // for (let i = 0; i < arrItems.length; i++) {
    //     if (i.code != code){
    //         books_delete[i] = books_delete.push(arrItems[bookIndex])
    //     }
    //     else{
    //         continue;
    //     }
    // }
    
    const code = document.getElementById("code").value;
    const bookIndex = arrItems.findIndex(item => item.code == code)
    // arrItems.pop(arrItems[bookIndex])
    var removedItems = arrItems.splice(bookIndex,1,"הוסר");
   
    
    let table4 = document.getElementById("table")
    table4.innerText = ""
    creat_table(arrItems.splice(removedItems))
    



    // const code1 = document.getElementById("code").value;
    // const bookIndex1 = arrItems.findIndex(item => item.code == code1)
    // const books_delete = [];
    // books_delete.push(arrItems[bookIndex1])
    // // console.log(books_found)
    // let table5 = document.getElementById("table")
    // table5.innerText = ""
    // books_delete = arrItems.pop(bookIndex1)
    // creat_table(books_delete)

}
function search_inputs() {
    let code = document.getElementById("code")
    let ishur_search = document.getElementById("ishur_search")
    code.style.display = "block"
    ishur_add.style.display = "none"
    ishur_delete.style.display = "none"
    ishur_search.style.display = "block"
}

getFetch()
creat_table()


