function grade(value) {
    if(value > 89) {
        return console.log('A');
    }
    else if(value > 79 && value < 90) {
        return console.log('B');
    }
    else if(value > 69 && value < 80) {
        return console.log('C');
    }
    else if(value > 59 && value < 70) {
        return console.log('D');
    }
    else if(value < 60) {
        return console.log('E');
    }
}

grade(10);
grade(80);
grade(90);