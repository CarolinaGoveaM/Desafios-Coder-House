class Music{
    constructor(titulo, genero, duracion, cantante){
        this.title = titulo.toUpperCase();
        this.genre = genero.toLowerCase();
        this.duration = parseFloat(duracion);
        this.singer = cantante;
    }
    tocar(){
        console.log(`La canción se llama ${this.title}, la canta ${this.singer}, es del genero ${this.genre}, tiene una duración de ${this.duration} minutos y suena así...`);
    }
}

let musicOne = new Music("Thunder", "Synth Pop", 3.25, "Imagine Drangons");
musicOne.tocar();

let musicTwo = new Music("Complicated", "Pop Rock", 4.03, "Avril Lavigne");
musicTwo.tocar();

let musicThree = new Music("Levitating", "Pop", 3.41, "Dua Lipa");
musicThree.tocar();