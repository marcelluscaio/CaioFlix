//Carrega página
let listaFilmes = [["https://images-na.ssl-images-amazon.com/images/I/519NGMZN2PL.__AC_SX300_SY300_QL70_ML2_.jpg","O Fabuloso Destino de Amélie Poulain", "Jean Pierre-Jeunet"], ["https://m.media-amazon.com/images/I/51rZLBQujoL._AC_SY445_.jpg", "Bem-me-quer, mal-me-quer", "Laetitia Colombani"], ["https://images-na.ssl-images-amazon.com/images/I/91ZbQIZn1LL._RI_.jpg", "A Despedida", "Lulu Wang"],["https://static.wikia.nocookie.net/althistory/images/c/cf/Do_the_Right_Thing.jpg", "Faça a coisa certa", "Spike Lee"], ["https://m.media-amazon.com/images/M/MV5BMjM2NTVkYjctYTMxZi00OTVlLWEyNzMtODg4MDRkNjBhYjZhXkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_FMjpg_UX1000_.jpg", "Coraline", "Henry Selick"] ];

let classeFilmeX;

for(filme in listaFilmes){
   let listaHTML = document.querySelector(".filme-container");
   classeFilmeX = filme;
   listaHTML.innerHTML += `<div class="filme-celula filme${filme}"></div>`;
   for(informacao in listaFilmes[filme]){      
      let filmeCelula = document.querySelector(`.filme${filme}`);
      if (informacao==0){
         filmeCelula.innerHTML += `<img src="${listaFilmes[filme][informacao]}" class="filme-imagem" alt="Poster filme">`;
      } else if(informacao ==1){
         filmeCelula.innerHTML += `<p class="filme-nome">${listaFilmes[filme][informacao]}</p>`
      } else if(informacao ==2){
         filmeCelula.innerHTML += `<p class="filme-diretor">${listaFilmes[filme][informacao]}</p>`
         filmeCelula.innerHTML += `<input type="checkbox" class="checkbox input-filme${filme} escondido" value="filme${filme}">`
      }
   };
};	

let listaSeries = [["https://cdn.flickeringmyth.com/wp-content/uploads/2018/06/Better-Call-Saul-s4-poster.jpg","Better Call Saul", "2015"], ["https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg", "Breaking Bad", "2008"], ["https://m.media-amazon.com/images/M/MV5BMjkwZjcwMGQtNDAzOC00YjJiLThiYTgtNWU3ZjRiZmY2YzEzXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg", "Ruptura", "2022"],["https://m.media-amazon.com/images/M/MV5BYTM0NjZjYjItM2JiYS00NmU5LWJmMTMtZjQ0OWU3Mzk1ZWZjXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_FMjpg_UX1000_.jpg", "Sandman", "2022"], ["https://m.media-amazon.com/images/M/MV5BNjk2MjlmMjItM2EyMi00MzQwLTlmZGItNDkzODczOWMwYzM1XkEyXkFqcGdeQXVyMTAxMzk4OTU2._V1_FMjpg_UX1000_.jpg", "Irmão do Jorel", "2014"] ];

let classeSerieX;

for(serie in listaSeries){
   let listaHTML = document.querySelector(".serie-container");
   classeSerieX = serie;
   listaHTML.innerHTML += `<div class="filme-celula serie${serie}"></div>`;
   for(informacao in listaSeries[serie]){      
      let serieCelula = document.querySelector(`.serie${serie}`);
      if (informacao==0){
         serieCelula.innerHTML += `<img src="${listaSeries[serie][informacao]}" class="filme-imagem" alt="Poster serie">`;
      } else if(informacao ==1){
         serieCelula.innerHTML += `<p class="filme-nome">${listaSeries[serie][informacao]}</p>`
      } else if(informacao ==2){
         serieCelula.innerHTML += `<p class="filme-diretor">${listaSeries[serie][informacao]}</p>`
         serieCelula.innerHTML += `<input type="checkbox" class="checkbox input-serie${serie} escondido" value="serie${serie}">`
      }
   };
};	

let listaAlbuns = [["https://m.media-amazon.com/images/I/71cC2ehMnaL._AC_SL1500_.jpg","Nevermind", "Nirvana"], ["https://m.media-amazon.com/images/I/71rpXQtzxIL._AC_SL1500_.jpg", "Seventh son of a seventh son", "Iron Maiden"], ["https://lastfm.freetls.fastly.net/i/u/ar0/ce8efdd558283e2081d29129b5dc6ff9.jpg", "Nine lives", "Aerosmith"],["https://m.media-amazon.com/images/I/71e1DBAzgpL._AC_SL1425_.jpg", "Elephant", "White Stripes"], ["https://www.angrymetalguy.com/wp-content/uploads/2017/01/Pain-of-Salvation_In-the-Passing-Light-of-Day.jpg", "In the passing light of day", "Pain of Salvation"], ["https://m.media-amazon.com/images/I/81ZVwENsT-L._AC_SL1200_.jpg","Sgt. Pepper's lonely hearts club band","The Beatles"] ];

let classeAlbumX;

for(album in listaAlbuns){
   let listaHTML = document.querySelector(".album-container");
   classeAlbumX = album;
   listaHTML.innerHTML += `<div class="filme-celula album${album}"></div>`;
   for(informacao in listaAlbuns[album]){      
      let albumCelula = document.querySelector(`.album${album}`);
      if (informacao==0){
         albumCelula.innerHTML += `<img src="${listaAlbuns[album][informacao]}" class="filme-imagem" alt="Poster filme">`;
      } else if(informacao ==1){
         albumCelula.innerHTML += `<p class="filme-nome">${listaAlbuns[album][informacao]}</p>`
      } else if(informacao ==2){
         albumCelula.innerHTML += `<p class="filme-diretor">${listaAlbuns[album][informacao]}</p>`
         albumCelula.innerHTML += `<input type="checkbox" class="checkbox input-album${album} escondido" value="album${album}">`
      }
   };
};	

//Seleciona lista
let seletorListas = document.querySelector("#tipo-lista");
let seletorListasBotao = document.querySelector("#confirmarLista");
let formTipoListas = document.querySelector("#form-tipo-lista");
let formAdicionaListas = document.querySelector("#form-adiciona-lista");
let legendaAdicionaListas = document.querySelector("#form-adiciona");
let labelNome = document.querySelector("#labelNomeFilme");
let labelDiretor = document.querySelector("#labelDiretorFilme");
let labelPoster = document.querySelector("#labelPosterFilme");
let formExcluiListas = document.querySelector("#form-exclui-lista");
let legendaExcluiListas = document.querySelector("#form-exclui");
let secaoFilmes = document.querySelector(".lista-de-filme");
let secaoSeries = document.querySelector(".lista-de-serie");
let secaoAlbuns = document.querySelector(".lista-de-album");
let valorSelecionado;

seletorListasBotao.addEventListener("click", selecionaLista);

function selecionaLista(e){
   e.preventDefault();
   valorSelecionado = document.querySelector("select").value;
   switch(valorSelecionado){
      case "filme":
         secaoSeries.classList.add("escondido");
         secaoAlbuns.classList.add("escondido");
         legendaAdicionaListas.innerHTML = 'Insira seu filme favorito';
         labelNome.innerHTML = 'Nome do filme:';
         labelDiretor.innerHTML = 'Diretor do filme:';
         labelPoster.innerHTML = 'Link para pôster do filme:';
         legendaExcluiListas.innerHTML = 'Exclua quantos filmes quiser';
         botaoAdicionar.innerHTML = "Adicionar filme";
         botaoExcluirFilme.innerHTML = "Excluir filme";

         break;
      case "serie":
         secaoFilmes.classList.add("escondido");
         secaoAlbuns.classList.add("escondido");
         legendaAdicionaListas.innerHTML = 'Insira sua série favorita';
         labelNome.innerHTML = 'Nome da série:';
         labelDiretor.innerHTML = 'Ano de lançamento:';
         labelPoster.innerHTML = 'Link para pôster da série:';
         legendaExcluiListas.innerHTML = 'Exclua quantas séries quiser';
         botaoAdicionar.innerHTML = "Adicionar série";
         botaoExcluirFilme.innerHTML = "Excluir série";
         break;
      case "album":
         secaoFilmes.classList.add("escondido");
         secaoSeries.classList.add("escondido");
         legendaAdicionaListas.innerHTML = 'Insira seu álbum favorito';
         labelNome.innerHTML = 'Nome do CD:';
         labelDiretor.innerHTML = 'Banda:';
         labelPoster.innerHTML = 'Link para capa do CD:';
         legendaExcluiListas.innerHTML = 'Exclua quantos álbuns quiser';
         botaoAdicionar.innerHTML = "Adicionar álbum";
         botaoExcluirFilme.innerHTML = "Excluir álbum";
         break;
   }
   
   formTipoListas.classList.add("escondido");
   formAdicionaListas.classList.remove("escondido");
   formExcluiListas.classList.remove("escondido");
}

//Adiciona filme
let nomeFilme = document.querySelector("#nomeFilme");
let diretorFilme = document.querySelector("#diretorFilme");
let posterFilme = document.querySelector("#posterFilme");
let botaoAdicionar = document.querySelector("#adicionarFilme");
botaoAdicionar.addEventListener("click", adicionarFilme);
let erro = false;

function adicionarFilme(e){
   e.preventDefault();
   validaDados();
   if(erro){
      erro=false;
      return;
   } else{
   insereDados();
   }   
}

function validaDados(){
   let valorNomeFilme = nomeFilme.value;
   let valorDiretorFilme = diretorFilme.value;
   let valorPosterFilme = posterFilme.value;
   let mensagemErro = document.querySelector(".mensagemErro");   
   let listaFilmesEspalhada = [];
   let tipoLista;   
   let tipoUsuario;

   let listaSelecionada;
   switch(valorSelecionado){
      case "filme":
         listaSelecionada = listaFilmes;
         tipoLista = "filmes"
         tipoUsuario = "pessoa cinéfila distraída";
         break;
      case "serie":
         listaSelecionada = listaSeries;
         tipoLista = "séries";
         tipoUsuario = "maratonista de série com a cabeça nas nuvens";
         break;
      case "album":
         listaSelecionada = listaAlbuns;
         tipoLista = "álbuns";
         tipoUsuario = "pessoa amante de música que anda meio desligada e já nem sente os pés no chão";
         break;         
   }   
   
   for(i=0;i<listaSelecionada.length;i++){
      for(j=0;j<listaSelecionada[i].length;j++){
         listaFilmesEspalhada.push(listaSelecionada[i][j]);
      }
   }

   if(listaFilmesEspalhada.includes(valorNomeFilme) && listaFilmesEspalhada.includes(valorDiretorFilme)){      
      mensagemErro.classList.remove("escondido");
      mensagemErro.innerHTML = `Confira a lista de ${tipoLista}. Parece que ${valorNomeFilme} de ${valorDiretorFilme} já existe!`;
      erro = true
   }
   
   if(!valorPosterFilme.endsWith("jpg") && !valorPosterFilme.endsWith("png")){
      mensagemErro.classList.remove("escondido");
      mensagemErro.innerHTML = "Verifica essa URL de novo. Ela parece estar com formato inválido";
      erro = true
   } 

   if(valorNomeFilme=="" || valorDiretorFilme ==""||valorPosterFilme==""){
      mensagemErro.classList.remove("escondido");
      mensagemErro.innerHTML = `Preencha todos os campos, ${tipoUsuario} =)`;
      erro = true
   }
}

function insereDados(){
   let valorNomeFilme = nomeFilme.value;
   let valorDiretorFilme = diretorFilme.value;
   let valorPosterFilme = posterFilme.value;
   let listaHTML = document.querySelector(`.${valorSelecionado}-container`);
   let posicaoLista;
   switch(valorSelecionado){
      case "filme":
         classeFilmeX++;
         posicaoLista = classeFilmeX;
         listaFilmes.push([valorPosterFilme, valorNomeFilme, valorDiretorFilme]);
         secaoSeries.classList.remove("escondido");
         secaoAlbuns.classList.remove("escondido");
         break;
      case "serie":
         classeSerieX++;
         posicaoLista = classeSerieX;
         listaSeries.push([valorPosterFilme, valorNomeFilme, valorDiretorFilme]);
         secaoFilmes.classList.remove("escondido");
         secaoAlbuns.classList.remove("escondido");
         break;
      case "album":
         classeAlbumX++;
         posicaoLista = classeAlbumX;
         listaAlbuns.push([valorPosterFilme, valorNomeFilme, valorDiretorFilme]);
         secaoFilmes.classList.remove("escondido");
         secaoSeries.classList.remove("escondido");
         break;
   };
   
   listaHTML.innerHTML += `<div class="filme-celula ${valorSelecionado}${posicaoLista} "><img src="${valorPosterFilme}" class="filme-imagem" alt="Poster filme"><p class="filme-nome">${valorNomeFilme}</p><p class="filme-diretor">${valorDiretorFilme}</p><input type="checkbox" class="checkbox input-${valorSelecionado}${posicaoLista} escondido" value="${valorSelecionado}${posicaoLista}"></div>`;
   
   let mensagemErro = document.querySelector(".mensagemErro");
   
   mensagemErro.classList.add("escondido");
   mensagemErro.innerHTML = "";
   nomeFilme.value = "";
   diretorFilme.value = "";
   posterFilme.value = "";

   formTipoListas.classList.remove("escondido");
   formAdicionaListas.classList.add("escondido");
   formExcluiListas.classList.add("escondido");   
}

//exclui filme
let botaoExcluirFilme = document.querySelector("#excluirFilme");
let botaoConfirma = document.querySelector("#confirmarFilme");

botaoExcluirFilme.addEventListener("click", selecionaFilme);
botaoConfirma.addEventListener("click", excluiFilme);


function selecionaFilme(e){
   e.preventDefault();
   let checkboxes = document.querySelectorAll(`.lista-de-${valorSelecionado} .checkbox`);    
   checkboxes.forEach((e)=>{e.classList.remove("escondido")});
   botaoConfirma.classList.remove("escondido");

   botaoExcluirFilme.disabled=true;
   nomeFilme.disabled = true;
   diretorFilme.disabled = true;
   posterFilme.disabled = true;
   botaoAdicionar.disabled = true;

   let mensagemErro = document.querySelector(".mensagemErro");   
   mensagemErro.classList.add("escondido");
   mensagemErro.innerHTML = ``;
   
   let mensagemErroDois = document.querySelector(".mensagemErroDois");   
   mensagemErroDois.classList.remove("escondido");  

   let tipoLista;
   switch(valorSelecionado){
      case "filme":
         tipoLista = "filmes"
         break;
      case "serie":
         tipoLista = "séries";
         break;
      case "album":
         tipoLista = "álbuns";
         break;         
   }   

   mensagemErroDois.innerHTML = `Selecione quais ${tipoLista} você deseja excluir e aperte o botão "confirma". Se não quiser excluir, somente aperte "confirma".`;

   nomeFilme.value = "";
   diretorFilme.value = "";
   posterFilme.value = "";
}

function excluiFilme(e){
   e.preventDefault();
   let indicesExcluir=[];
   let filmesSelecionados=[]; 
   let listaSelecionada;

   switch(valorSelecionado){
      case "filme":
         listaSelecionada = listaFilmes;
         break;
      case "serie":
         listaSelecionada = listaSeries;
         break;
      case "album":
         listaSelecionada = listaAlbuns;
         break;         
   }  

   for(i=0;i<listaSelecionada.length;i++){
      let filme = document.querySelector(`.input-${valorSelecionado}${i}`);            
      if(filme.checked){
         filmesSelecionados.push(filme.value);
         indicesExcluir.push(i);
      } else{
         filme.parentNode.classList.remove(`${valorSelecionado}${i}`);
         filme.value = "";
         filme.classList.remove(`input-${valorSelecionado}${i}`);
      }      
   }   

   if(filmesSelecionados.length!=0){
      for(i=0;i<filmesSelecionados.length;i++){      
         let filmeRemover = document.querySelector(`.${filmesSelecionados[i]}`);
         filmeRemover.remove();
      }

      for(i=(indicesExcluir.length-1);i>=0;i--){
         switch(valorSelecionado){
            case "filme":
               listaFilmes.splice(indicesExcluir[i],1);
               classeFilmeX--;
               break;
            case "serie":
               listaSeries.splice(indicesExcluir[i],1);
               classeSerieX--;
               break;
            case "album":
               listaAlbuns.splice(indicesExcluir[i],1);
               classeAlbumX--;
               break;
         };         
      }
   } 

   let filmeNaoExcluido = document.querySelectorAll(`.${valorSelecionado}-container .filme-celula`);
   let checkbox = document.querySelectorAll(`.${valorSelecionado}-container .checkbox`);

   for(i=0;i<filmeNaoExcluido.length;i++){
      filmeNaoExcluido[i].classList.add(`${valorSelecionado}${i}`);
      checkbox[i].classList.add(`input-${valorSelecionado}${i}`);
      checkbox[i].value  = `${valorSelecionado}${i}`
   }   

   botaoExcluirFilme.disabled=false;
   nomeFilme.disabled = false;
   diretorFilme.disabled = false;
   posterFilme.disabled = false;
   botaoAdicionar.disabled = false;

   let mensagemErro = document.querySelector(".mensagemErroDois");
   mensagemErro.classList.add("escondido");
   mensagemErro.innerHTML = ``;

   botaoConfirma.classList.add("escondido"); 
   let checkboxes = document.querySelectorAll(`.lista-de-${valorSelecionado} .checkbox`);    
   checkboxes.forEach((e)=>{e.classList.add("escondido")});  

   secaoFilmes.classList.remove("escondido");
   secaoSeries.classList.remove("escondido");
   secaoAlbuns.classList.remove("escondido");

   formTipoListas.classList.remove("escondido");
   formAdicionaListas.classList.add("escondido");
   formExcluiListas.classList.add("escondido"); 
}