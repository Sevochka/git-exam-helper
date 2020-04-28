//Material UI tabs initialize
let tabs = document.querySelectorAll(".tabs");
var instance = M.Tabs.init(tabs);

//Main part
let gitBasics = document.querySelector("#git-basics");
data.forEach((el, i) => {
    let $HTML = `
    <div class="git-title">
        <h6 class="heading-centered white-colored">${el.title}</h6>
        <hr>
        <p class="white-colored">${el.description}</p>
    </div>
    <div class="mine-row">
        <p id=${"info"+i}></p>
    `;

    el.boxes.forEach((el, i) => {
        $HTML += `
            <div class="waves-effect waves-light btn modal-trigger box" href="#modal1" data-id=${el.id}><span>${i+1}</span></div>
        `
    })
    $HTML += `</div>`

    gitBasics.innerHTML+=$HTML;
})

let gitRemote = document.querySelector("#git-remote");
data2.forEach((el, i) => {
    let $HTML = `
    <div class="git-title">
        <h6 class="heading-centered white-colored">${el.title}</h6>
        <hr>
        <p class="white-colored">${el.description}</p>
    </div>
    <div class="mine-row">
        <p id=${"info"+i}></p>
    `;

    el.boxes.forEach((el, i) => {
        $HTML += `
            <div class="waves-effect waves-light btn modal-trigger box" href="#modal1" data-id=${el.id}><span>${i+1}</span></div>
        `
    })
    $HTML += `</div>`

    gitRemote.innerHTML+=$HTML;
})

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instanceModal = M.Modal.init(elems);

    var singleModalElem = document.querySelector('#modal1');
    var instanceSingle = M.Modal.getInstance(singleModalElem);
    
    console.log(instanceSingle.el.innerHTML);
    
    document.querySelectorAll('.box').forEach((el) => {
        let boxElement = getById(el.dataset.id, 'basics');

        if (!boxElement) {
            boxElement = getById(el.dataset.id, '');
        }
        el.addEventListener('click', ()=> {
            instanceSingle.el.innerHTML = `
            <div class="modal-content box-fn">
                <img src="img/${boxElement.img}">
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
            `
            instanceSingle.open();
        })
    });

    document.querySelector('#info').addEventListener('click', ()=>{
        instanceSingle.el.innerHTML = `
            <div class="modal-content">
                <p><b>Внимание!</b> Будьте осторожны с решением, где применяется rebase. 
                В данном примере <span>--solution- ordering С3,С5,С6</span> 
                <b>вводить не нужно!</b>. Вводить только то, что подчеркнуто <span class='red'>красным.</span>
                От вас требуется выбрать правильный порядок в открывшейся консоли.
                </p>
                <img class="img-warning" src="img/10.png">
                <hr>
                <img class="img-warning" src="img/10_1.png">
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
            `
            instanceSingle.open();
    })
})

    

