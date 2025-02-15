function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
  
    // Define o nível do jogador com base nas vitórias
    let nivel;
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Exibe a mensagem com o saldo e o nível
    console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel);
  }
  
  // Exemplo de uso da função
  calcularRank(25, 10); // Saída: O Herói tem de saldo de 15 e está no nível de Prata