let cards = JSON.parse(mockData);

function buildCards() {
    for (card of cards){
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
            <div class="list-group-item">An item <br><i class="bi-calendar-date me-3"></i>${card.date}</div>
            </ul>
            <div class="card-body d-flex flex-row-reverse gap-1">
            <button type="button" class="btn btn-danger btn-sm"><i class="bi-trash m-1"></i>Danger</button>
            <button type="button" class="btn btn-success btn-sm"><i class="bi-check-circle m-1"></i>Success</button>
            </div>
        </div>
        `
    }
}

buildCards();