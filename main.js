function createGame(player1, hour, player2){
    return`
<li>
    <img src="./images/icon=${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./images/icon=${player2}.svg" alt="Bandeira do ${player2}" />
</li>
    `
}

let delay = -0.4;

function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div>
    `
}

document.querySelector("#cards").innerHTML =
createCard("20/11", "domingo", 
createGame("qatar", "13:00", "ecuador")) +
createCard("24/11", "quinta",
createGame("brazil", "16:00", "serbia")) +
createCard("28/11", "segunda",
createGame("south korea", "10:00", "ghana") +
createGame("brazil", "13:00", "switzerland")) +
createCard("2/12", "sexta",
createGame("south korea", "12:00", "portugal") +
createGame("cameroon", "16:00", "brazil"))
