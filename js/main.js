//Here are the primary Buttons 
let doneCheckBox = document.querySelector('.done')
let addButton = document.querySelector('.add')
let delButton = document.querySelector('.delete')

let itemContainer = document.querySelector('.itemContainer')

addButton.addEventListener("click", addItems)

const items = [];

let text = ""

function addItems(){
    let inputItem = document.getElementById('userInput')
    items.push(inputItem.value)

    console.log(items)
    addBlock(items[items.length -1])
}

function addBlock(val){
    const node = document.createTextNode("" + val);

    let item = document.createElement('div')
    let itemName = document.createElement('div')
    let action = document.createElement('div')
    let done = document.createElement('div')
    let del = document.createElement('div')
    let h4 = document.createElement('h4')
    let inputCheck = document.createElement('input')
    let i = document.createElement('i')

    itemContainer.appendChild(item) 
    item.classList.add('item')

    item.appendChild(itemName)
    itemName.classList.add('itemName')

    h4.appendChild(node)
    itemName.appendChild(h4)
    
    item.appendChild(action)
    action.classList.add('action')

    action.appendChild(done)
    action.appendChild(del)

    done.classList.add('done')
    del.classList.add('delete')

    inputCheck.setAttribute("id", val)
    inputCheck.setAttribute("type", "checkbox")
    inputCheck.setAttribute("name", "done")

    done.appendChild(inputCheck)

    del.appendChild(i)
    i.classList.add('fas')
    i.classList.add('fa-trash')

    if(inputCheck.checked){
        h4.classList.add('strikeThrough')
    }

}

document.body.onclick = function(e,f) {
    var clickedEl = window.event ? event.srcElement : e.target;
    while (clickedEl != null) {
        clickedEl = clickedEl.parentNode;
        let x = clickedEl.parentNode;
        let y = x.parentNode;

        let a = clickedEl.childNodes
        let c = y.childNodes;
        if (clickedEl.className
            && (" " + clickedEl.className + " ").indexOf(" done ") != -1) {
                if(a[0].checked){
                    c[0].classList.add('strikeThrough')
                } else {
                    c[0].classList.remove('strikeThrough')
                }
            return;
        }

        if (clickedEl.className
            && (" " + clickedEl.className + " ").indexOf(" delete ") != -1) {
                y.remove();
            return;
        }
    }
}