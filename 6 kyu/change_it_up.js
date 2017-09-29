function changer(str) {
    return str.replace(/[a-z]/gi, function (char) { 
        char = String.fromCharCode(char.toLowerCase().charCodeAt(0) + 1);
        if (char == '{' || char == '[') char = 'a'; 
        if (/[aeiuo]/.test(char)) char = char.toUpperCase();
        return char;
    })
};

changer('Catz30')


//Imporved Solution

function changer(str) { 
  return str.toLowerCase()          
            .replace(/[a-z]/g, s => s === 'z' ? 'a' : String.fromCharCode(s.charCodeAt(0)+1))
            .replace(/[auioe]/g, s => s.toUpperCase());          
}

changer('Catz30')
