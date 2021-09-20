listPersons = [
    {id:1, name:"Valeria", edad:35},
    {id:2, name:"Carolina", edad:20},
    {id:3, name:"Santiago", edad:50},
    {id:4, name:"Carlos", edad:10},
    {id:5, name:"Alberto", edad:25},
]

listPersons.sort(function (a, b) {
    return (a.edad - b.edad)
});

console.log(listPersons);