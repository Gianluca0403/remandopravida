document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('feedback-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    try {
      const resposta = await fetch('http://localhost:3000/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, feedback })
      });

      const result = await resposta.json();
      alert(result.mensagem);
      this.reset();
    } catch (erro) {
      alert("Erro ao enviar feedback");
      console.error(erro);
    }
  });
});
