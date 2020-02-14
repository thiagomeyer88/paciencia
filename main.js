
const espacos = document.querySelectorAll('.espaco');
const figuraBaralho = document.querySelector('#baralho');
const cartaAberta = document.querySelector('#carta-aberta');
const espacoSeq1 = document.getElementById('sequencia1');
const espacoSeq2 = document.getElementById('sequencia2');
const espacoSeq3 = document.getElementById('sequencia3');
const espacoSeq4 = document.getElementById('sequencia4');
const espacoSeq5 = document.getElementById('sequencia5');
const espacoSeq6 = document.getElementById('sequencia6');
const espacoSeq7 = document.getElementById('sequencia7');
const espacoNaipe1 = document.getElementById('naipe1');
const espacoNaipe2 = document.getElementById('naipe2');
const espacoNaipe3 = document.getElementById('naipe3');
const espacoNaipe4 = document.getElementById('naipe4');
let cartaSegurada;
let vetorSaida;
let vetorEntrada;
let localSaida;

for(const espaco of espacos){
    espaco.addEventListener('dragover', dragOver);
    espaco.addEventListener('drop', dragDrop);
}

function dragStart(){
    cartaSegurada = this;
    vetorSaida  = deOndeArrastou(cartaSegurada.src);
    localSaida = cartaSegurada.parentElement;
    console.log(localSaida);
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(e){
    if(this == espacoSeq1 || this == espacoSeq2 || this == espacoSeq3 || this == espacoSeq4 || this == espacoSeq5 || this == espacoSeq6 || this == espacoSeq7){
        cartaSegurada.style.top = `${0 + (this.childElementCount * 30)}px`;
    }
    else{
        cartaSegurada.style.top = 0;
    }
    if(this == espacoSeq1){
        vetorEntrada = seq1;
    }
    else if(this == espacoSeq2){
        vetorEntrada = seq2;
    }
    else if(this == espacoSeq3){
        vetorEntrada = seq3;
    }
    else if(this == espacoSeq4){
        vetorEntrada = seq4;
    }
    else if(this == espacoSeq5){
        vetorEntrada = seq5;
    }
    else if(this == espacoSeq6){
        vetorEntrada = seq6;
    }
    else if(this == espacoSeq7){
        vetorEntrada = seq7;
    }
    else if(this == espacoNaipe1){
        vetorEntrada = naipe1;
    }
    else if(this == espacoNaipe2){
        vetorEntrada = naipe2;
    }
    else if(this == espacoNaipe3){
        vetorEntrada = naipe3;
    }
    else{
        vetorEntrada = naipe4;
    }
    this.append(cartaSegurada);
    e.preventDefault();
    
    vetorEntrada.push(vetorSaida.pop());

    if(localSaida == espacoSeq1 || localSaida == espacoSeq2 || localSaida == espacoSeq3 || localSaida == espacoSeq4 || localSaida == espacoSeq5 || localSaida == espacoSeq6 || localSaida == espacoSeq7){
        let quantosFilhos = localSaida.childElementCount;
        if(quantosFilhos > 0){
            localSaida.removeChild(localSaida.childNodes[quantosFilhos - 1]); 
            novaCarta(`imagens/${vetorSaida[vetorSaida.length-1].imagem}`,localSaida,30*(quantosFilhos - 1),true);
        }   
    }    
}

function carta(valor, naipe, imagem){
    this.valor = valor;
    this.naipe = naipe;
    this.imagem = imagem;
}

let baralho  = [];
let cartasAvulsas = [];
let seq1 = [];
let seq2 = [];
let seq3 = [];
let seq4 = [];
let seq5 = [];
let seq6 = [];
let seq7 = [];
let naipe1  = [];
let naipe2 = [];
let naipe3 = [];
let naipe4 = [];

baralho.push(new carta('1','copas','ascopas.png'));
baralho.push(new carta('2','copas','2copas.png'));
baralho.push(new carta('3','copas','3copas.png'));
baralho.push(new carta('4','copas','4copas.png'));
baralho.push(new carta('5','copas','5copas.png'));
baralho.push(new carta('6','copas','6copas.png'));
baralho.push(new carta('7','copas','7copas.png'));
baralho.push(new carta('8','copas','8copas.png'));
baralho.push(new carta('9','copas','9copas.png'));
baralho.push(new carta('10','copas','10copas.png'));
baralho.push(new carta('11','copas','valetecopas.png'));
baralho.push(new carta('12','copas','damacopas.png'));
baralho.push(new carta('13','copas','reicopas.png'));

baralho.push(new carta('1','ouros','asouros.png'));
baralho.push(new carta('2','ouros','2ouros.png'));
baralho.push(new carta('3','ouros','3ouros.png'));
baralho.push(new carta('4','ouros','4ouros.png'));
baralho.push(new carta('5','ouros','5ouros.png'));
baralho.push(new carta('6','ouros','6ouros.png'));
baralho.push(new carta('7','ouros','7ouros.png'));
baralho.push(new carta('8','ouros','8ouros.png'));
baralho.push(new carta('9','ouros','9ouros.png'));
baralho.push(new carta('10','ouros','10ouros.png'));
baralho.push(new carta('11','ouros','valeteouros.png'));
baralho.push(new carta('12','ouros','damaouros.png'));
baralho.push(new carta('13','ouros','reiouros.png'));

baralho.push(new carta('1','paus','aspaus.png'));
baralho.push(new carta('2','paus','2paus.png'));
baralho.push(new carta('3','paus','3paus.png'));
baralho.push( new carta('4','paus','4paus.png'));
baralho.push( new carta('5','paus','5paus.png'));
baralho.push(new carta('6','paus','6paus.png'));
baralho.push(new carta('7','paus','7paus.png'));
baralho.push( new carta('8','paus','8paus.png'));
baralho.push( new carta('9','paus','9paus.png'));
baralho.push( new carta('10','paus','10paus.png'));
baralho.push( new carta('11','paus','valetepaus.png'));
baralho.push( new carta('12','paus','damapaus.png'));
baralho.push( new carta('13','paus','reipaus.png'));

baralho.push(new carta('1','espadas','asespadas.png'));
baralho.push(new carta('2','espadas','2espadas.png'));
baralho.push(new carta('3','espadas','3espadas.png'));
baralho.push( new carta('4','espadas','4espadas.png'));
baralho.push( new carta('5','espadas','5espadas.png'));
baralho.push(new carta('6','espadas','6espadas.png'));
baralho.push(new carta('7','espadas','7espadas.png'));
baralho.push( new carta('8','espadas','8espadas.png'));
baralho.push( new carta('9','espadas','9espadas.png'));
baralho.push( new carta('10','espadas','10espadas.png'));
baralho.push( new carta('11','espadas','valeteespadas.png'));
baralho.push( new carta('12','espadas','damaespadas.png'));
baralho.push( new carta('13','espadas','reiespadas.png'));

function embaralhar(baralho) {
    let qtdCartas = baralho.length, aux, novaCarta;
  
    while (qtdCartas) {
        novaCarta = Math.floor(Math.random() * qtdCartas--);
        aux = baralho[qtdCartas];
        baralho[qtdCartas] = baralho[novaCarta];
        baralho[novaCarta] = aux;
    }
  
}

function distribuir(baralho){
    for(let i = 0; i < 7; i++){
        let cartaDist;
        if(i == 0){
            cartaDist = baralho.pop();
            seq1.push(cartaDist);
            novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq1,30*i,true);
        }
        if(i <= 1){
            cartaDist = baralho.pop();
            seq2.push(cartaDist);
            if(i==1){
                novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq2,30*i,true);
            }
            else{
                novaCarta(`imagens/fundobaralho.jpg`,espacoSeq2,30*i,false);
            }
            
        }
        if(i <= 2){
            cartaDist = baralho.pop();
            seq3.push(cartaDist);
            if(i==2){
                novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq3,30*i,true);
            }
            else{
                novaCarta(`imagens/fundobaralho.jpg`,espacoSeq3,30*i,false);
            }
        }
        if(i <= 3){
            cartaDist = baralho.pop();
            seq4.push(cartaDist);
            if(i==3){
                novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq4,30*i,true);
            }
            else{
                novaCarta(`imagens/fundobaralho.jpg`,espacoSeq4,30*i,false);
            }
        }
        if(i <= 4){
            cartaDist = baralho.pop();
            seq5.push(cartaDist);
            if(i==4){
                novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq5,30*i,true);
            }
            else{
                novaCarta(`imagens/fundobaralho.jpg`,espacoSeq5,30*i,false);
            }
        }
        if(i <= 5){
            cartaDist = baralho.pop();
            seq6.push(cartaDist);
            if(i==5){
                novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq6,30*i,true);
            }
            else{
                novaCarta(`imagens/fundobaralho.jpg`,espacoSeq6,30*i,false);
            }
        }
        if(i <= 6){
            cartaDist = baralho.pop();
            seq7.push(cartaDist);
            if(i==6){
                novaCarta(`imagens/${cartaDist.imagem}`,espacoSeq7,30*i,true);
            }
            else{
                novaCarta(`imagens/fundobaralho.jpg`,espacoSeq7,30*i,false);
            }
        }
    }
    
}

function novaCarta(src,posicao, top,draggable){
    let novaCartaAberta = document.createElement('img');
    novaCartaAberta.style.position  ='absolute';
    novaCartaAberta.style.top = `${top}px`;
    novaCartaAberta.src = src;
    novaCartaAberta.draggable = draggable;
    novaCartaAberta.addEventListener('dragstart',dragStart);
    posicao.appendChild(novaCartaAberta);
}

function deOndeArrastou(src){
    let dividir = src.split('/');
    for(let i in cartasAvulsas){
        if(cartasAvulsas[i].imagem == dividir[dividir.length-1]){
            return cartasAvulsas;
        }
    }
    for(let i in seq1){
        if(seq1[i].imagem == dividir[dividir.length-1]){
            return seq1;
        }
    }
    for(let i in seq2){
        if(seq2[i].imagem == dividir[dividir.length-1]){
            return seq2;
        }
    }
    for(let i in seq3){
        if(seq3[i].imagem == dividir[dividir.length-1]){
            return seq3;
        }
    }
    for(let i in seq4){
        if(seq4[i].imagem == dividir[dividir.length-1]){
            return seq4;
        }
    }
    for(let i in seq5){
        if(seq5[i].imagem == dividir[dividir.length-1]){
            return seq5;
        }
    }
    for(let i in seq6){
        if(seq6[i].imagem == dividir[dividir.length-1]){
            return seq6;
        }
    }
    for(let i in seq7){
        if(seq7[i].imagem == dividir[dividir.length-1]){
            return seq7;
        }
    }
    for(let i in naipe1){
        if(naipe1[i].imagem == dividir[dividir.length-1]){
            return naipe1;
        }
    }
    for(let i in naipe2){
        if(naipe2[i].imagem == dividir[dividir.length-1]){
            return naipe2;
        }
    }
    for(let i in naipe3){
        if(naipe3[i].imagem == dividir[dividir.length-1]){
            return naipe3;
        }
    }
    for(let i in naipe4){
        if(naipe4[i].imagem == dividir[dividir.length-1]){
            return naipe4;
        }
    }
}

embaralhar(baralho);
distribuir(baralho);

figuraBaralho.addEventListener('click',function(){
    novaCarta(`imagens/${baralho[0].imagem}`,cartaAberta, 0,true);
    cartasAvulsas.push(baralho.shift());
});









