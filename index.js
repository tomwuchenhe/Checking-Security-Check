var a = "" //todo

for (var i = 0; i < a.relations.length; i++){
    console.log("relation " + i + " for " + a.relations[i].lastName + " " + a.relations[i].firstName + " are")
    for (var j = 0; j < a.relations[i].history.length; j++) { 
        if (a.relations[i].history[j].key == 17) {
            alert("In security check")
        }
        console.log(a.relations[i].history[j].key) 
    }
}
