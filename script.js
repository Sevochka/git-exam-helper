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
            <div class="waves-effect waves-light btn modal-trigger box" data-id=${i}><span>${i+1}</span></div>
        `
    })
    $HTML += `</div>`

    gitBasics.innerHTML+=$HTML;
})


new Promise((resolve, reject) => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instanceModal = M.Modal.init(elems);
    })
    console.log(1123);
    
}).then((data)=> {
    console.log('qqq');
    
})

