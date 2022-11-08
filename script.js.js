function createGame(player1, nomepais1, hour, player2, nomepais2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>

    <ul>
      <li>
        <h3>${nomepais1}</h3> 
        <h3>${nomepais2}</h3>
      </li>
    </ul>

  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
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
  createCard("20/11", "domingo", createGame("catar", 'Catar', "13:00", "equador", 'Equador')) +
  createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "Inglaterra", "10:00", "irã", "Irã") +
    createGame("senegal", "Senegal", "13:00", "holanda", "Holanda") +
    createGame("estados-unidos", "EUA", "16:00", "gales", "Gales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "Argentina", "07:00", "arábia-saudita", "Arábia-Saudita") +
    createGame("dinamarca", "Dinamarca", "10:00", "tunísia", "Tunísia") +
    createGame("méxico", "México", "13:00", "polônia", "Polônia") +
    createGame("frança", "França", "16:00", "austrália", "Austrália")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "Marrocos", "07:00", "croácia", "Croácia") +
    createGame("alemanha", "Alemanha", "10:00", "japão", "Japão") +
    createGame("espanha", "Espanha", "13:00", "costa-rica", "Costa-Rica") +
    createGame("bélgica", "Bélgica", "16:00", "canadá", "Canadá")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "Suíça", "07:00", "camarões", "Camarões") +
    createGame("uruguai", "Uruguai", "10:00", "coréia-do-sul", "Coréia-Do-Sul") +
    createGame("portugal", "Portugal", "13:00", "gana", "Gana") +
    createGame("brasil", "Brasil", "16:00", "sérvia", "Sérvia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("gales", "Gales", "07:00", "irã", "Irã") +
    createGame("catar", "Catar", "10:00", "senegal", "Senegal") +
    createGame("holanda", "Holanda", "13:00", "equador", "Equador") +
    createGame("inglaterra", "Inglaterra", "16:00", "estados-unidos", "EUA")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "Tunísia", "07:00", "austrália", "Tunísia") +
    createGame("polônia", "Polônia", "10:00", "arábia-saudita", "Arábia-Saudita") +
    createGame("frança", "França", "13:00", "dinamarca", "Dinamarca") +
    createGame("argentina", "Argentina", "16:00", "méxico", "México")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japão", "Japão", "07:00", "costa-rica", "Costa-Rica") +
    createGame("bélgica", "Bélgica", "10:00", "marrocos", "Marrocos") +
    createGame("croácia", "Croácia", "13:00", "canadá", "Canadá") +
    createGame("espanha", "Espanha", "16:00", "alemanha", "Alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("camarões", "Camarões", "07:00", "sérvia", "Sérvia") +
    createGame("coréia-do-sul", "Coréia-Do-Sul", "10:00", "gana", "Gana") +
    createGame("brasil", "Brasil", "13:00", "suiça", "Suíça") +
    createGame("portugal", "Portugal", "16:00", "uruguai", "Uruguai")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("equador", "Equador", "12:00", "senegal", "Senegal") +
    createGame("holanda", "Holanda", "12:00", "catar", "Catar") +
    createGame("irã", "Irã", "16:00", "estados-unidos", "EUA") +
    createGame("gales", "Gales", "16:00", "inglaterra", "Inglaterra")
  ) +
  createCard(
    "30/11",
    "quinta",
    createGame("tunísia", "Tunísia", "12:00", "frança", "França") +
    createGame("austrália", "Austrália", "12:00", "dinamarca", "Dinamarca") +
    createGame("polônia", "Polônia", "16:00", "argentina", "Argentina") +
    createGame("arábia-saudita", "Arábia-Saudita", "16:00", "méxico", "México")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croácia", "Croácia", "12:00", "bélgica", "Bélgica") +
    createGame("canadá", "Canadá", "12:00", "marrocos", "Marrocos") +
    createGame("japão", "Japão", "16:00", "espanha", "Espanha") +
    createGame("costa-rica", "Costa-Rica", "16:00", "alemanha", "Alemanha")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("coréia-do-sul", "Coréia-Do-Sul", "07:00", "portugal", "Portugal") +
    createGame("gana", "Gana", "10:00", "uruguai", "Uruguai") +
    createGame("sérvia", "Sérvia", "13:00", "suiça", "Suíça") +
    createGame("camarões", "Camarões", "16:00", "brasil", "Brasil")
  )
