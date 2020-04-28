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
            <div class="waves-effect waves-light btn modal-trigger box" data-id=${el.id}><span>${i+1}</span></div>
        `
    })
    $HTML += `</div>`

    gitBasics.innerHTML+=$HTML;
})


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instanceModal = M.Modal.init(elems);

    var singleModalElem = document.querySelector('#modal1');
    var instanceSingle = M.Modal.getInstance(singleModalElem);
    
    document.querySelectorAll('.box').forEach((el) => {
        el.addEventListener('click', ()=> {
            dataBox = data.filter((el1)=>{
                return el1.boxes.find((el2)=> {
                    el2.id === el.dataset.id;
                })
            })
           
            
            console.log(dataBox);
            
            //instanceSingle.open();
        })
    })

})

    

