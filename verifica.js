function verificarHorario() {
    // Obter a data e hora atual
    var agora = new Date();
  
    // Definir o horário desejado para executar a ação (por exemplo, 10 horas da manhã)
    var horarioDesejado = new Date();
    horarioDesejado.setHours(14, 4, 0); // Define as horas para 10:00:00
  
    // Verifica se o horário atual é igual ao horário desejado
    if (agora.getHours() === horarioDesejado.getHours() &&
        agora.getMinutes() === horarioDesejado.getMinutes() &&
        agora.getSeconds() === horarioDesejado.getSeconds()) {
      // Executa a ação desejada
      console.log("Hora de executar a ação!");
      document.getElementById('btnPeriodoOk').click();
    }
  }
  
  // Chama a função verificarHorario a cada segundo para verificar se é o horário desejado para executar a ação
  setInterval(verificarHorario, 1000);
  
