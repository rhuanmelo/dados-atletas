class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        
    }
    calculaCategoria(){
        if (this.obtemIdadeAtleta() >= 9 && this.obtemIdadeAtleta() <= 11){
            return "Infantil";
        }
        if (this.obtemIdadeAtleta() >= 12 && this.obtemIdadeAtleta() <= 13){
            return "Juvenil";
        }
        if (this.obtemIdadeAtleta() >= 14 && this.obtemIdadeAtleta() <= 15){
            return "Intermediário";
        }
        if (this.obtemIdadeAtleta() >= 16 && this.obtemIdadeAtleta() <= 30){
            return "Adulto";
        }
        if (this.obtemIdadeAtleta() > 30){
            return "Sem categoria";
        }
    }
    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida(){
        let notasSort = this.notas.sort();
        let notasSlice = notasSort.slice(1, 4);
        var somaNotas = 0;
        notasSlice.forEach(function(nota){
            somaNotas = somaNotas + nota;
        });
        let mediaValida = somaNotas / notasSlice.length;
        return mediaValida;
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemAlturaAtleta(){
        return this.altura;
    }

    obtemNotasAtleta(){
        return this.notas;
    }
    obtemCategoria(){
        return this.calculaCategoria()
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}



const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

    console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
    console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
    console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
    console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
    console.log(`Notas: ${atleta.obtemNotasAtleta()}`);
    console.log(`Categoria: ${atleta.obtemCategoria()}`);
    console.log(`IMC: ${atleta.obtemIMC()}`);
    console.log(`Média válida: ${atleta.obtemMediaValida()}`);