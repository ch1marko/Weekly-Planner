let cards = JSON.parse(mockData);
let priorityClick = 0;
const btn = document.getElementById('btn');

function buildCards() {
    for (card of cards){
        priorityClick += card.priority;
        document.getElementById("cardId").innerHTML += `
        <div class="card" style="width: 18rem; box-shadow: 2px 2px 2px 2px gray; ">
            <div class="card-header bg-white"><button type="button" class="btn btn-info btn-sm">Task</button>

              
            </div>
            <img src="${card.picture}" class="card-img-top img-thumbnail">
            <div class="card-body">
            <h5 class="card-title text-center">${card.title}</h5>
            <p class="card-text text-center">${card.description}</p>
            </div>
            <ul class="list-group list-group-flush">
            <div class="list-group-item"> 
                <i class="bi-exclamation-triangle-fill me-0"></i>
                <button class="btn" onClick="addPriority(${card.id})">
                Priority level: 
                </button> <button id="btn${card.id}" onClick="addPriority(${card.id})">${card.priority}</button>
                <br><i class="bi-calendar-date me-3"></i>${card.date}
            </div>
            </ul>
            <div class="card-body d-flex flex-row-reverse gap-1">
            <button type="button" class="btn btn-danger btn-sm"><i class="bi-trash m-1"></i>Danger</button>
            <button type="button" class="btn btn-success btn-sm"><i class="bi-check-circle m-1"></i>Success</button>
            </div>
        </div>
        `;
    }
}


buildCards();

function addPriority(numberCard){
    if (cards[numberCard].priority < 6) {

        
        let newPriority = cards[numberCard].priority++;
        document.getElementById("btn"+numberCard).innerHTML = newPriority;

        if (newPriority == 0 || newPriority == 1){
            document.getElementById("btn"+numberCard).className  = "btn btn-success";
        } else if (newPriority == 2 || newPriority == 3){
            document.getElementById("btn"+numberCard).className  = "btn btn-warning";
        }else {
            document.getElementById("btn"+numberCard).className  = "btn btn-danger";
        }

    }
    console.log(numberCard)
}