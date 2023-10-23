// Variaveis
const inputTarefa = document.getElementById("inputTarefa");
const btnEnviar = document.getElementById("btnEnviar");
const ul = document.querySelector("ul");
const totalTarefas = document.getElementById("totalTarefas");
const concluidas = document.getElementById("concluidas");

// Funções
function addLister() {
  const tarefa = inputTarefa.value;

  // Criando os Elementos
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox"; //Tipo do input (CheckBox)
  let span = document.createElement("span");
  let editar = document.createElement("button");
  let excluir = document.createElement("button");

  //Criando os Icons
  let iconEditar = document.createElement("i");
  iconEditar.className = "fa-solid fa-pencil";
  let iconExcluir = document.createElement("i");
  iconExcluir.className = "fa-solid fa-x";

  if (tarefa) {
    // Adicionando os Elementos
    span.textContent = tarefa;
    li.appendChild(checkbox);
    li.appendChild(span);
    editar.appendChild(iconEditar);
    li.appendChild(editar);
    excluir.appendChild(iconExcluir);
    li.appendChild(excluir);
    ul.appendChild(li);

    // Adicionar mais um em totais de tarefas
    totalTarefas.innerHTML = parseInt(totalTarefas.innerHTML) + 1;

    // Limpando o input
    document.getElementById("inputTarefa").value = "";
  }

  // Verifica se o checkBox está marcado
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.style.background = "green";
      li.style.textDecoration = "line-through";
      concluidas.innerHTML = parseInt(concluidas.innerHTML) + 1;
    } else {
      li.style.background = "#B64FC8";
      li.style.textDecoration = "";
      concluidas.innerHTML = parseInt(concluidas.innerHTML) - 1;
    }
  });

  // Excluindo tarefa
  excluir.addEventListener("click", function () {
    li.remove();
    totalTarefas.innerHTML = parseInt(totalTarefas.innerHTML) - 1;

    if (checkbox.checked) {
      concluidas.innerHTML = parseInt(concluidas.innerHTML) - 1;
    }
  });

  // Editar Tarefa
  editar.addEventListener("click", function () {
    // Obtenha o texto atual do span
    const textoAtual = span.textContent;

    // Preencha o campo de edição com o texto atual
    inputTarefa.value = textoAtual;

    // Removendo o li selecionado
    li.style.display = "none";

    // -1 tarefas concluidas
    totalTarefas.innerHTML = parseInt(totalTarefas.innerHTML) - 1;

    if (checkbox.checked) {
      concluidas.innerHTML = parseInt(concluidas.innerHTML) - 1;
    }
  });
}
// Eventos
    // Evento ao pressionar a tecla "Enter"
    inputTarefa.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        addLister();
    }
    });

    // Evento clicar no mouse para enviar
    btnEnviar.addEventListener("click", addLister);
