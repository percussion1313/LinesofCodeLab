var friends = ['Sean', 'Paul', 'Erik', 'Scott', 'Ryan']

function song() {
    
    for (j = 0; j < friends.length; j++) {
        console.log(friends[j]+':');
        for (var i = 99; i >= 0; i--) {
            if (i > 2) {
                console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file.');
            }
            else if (i === 2) {
                console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i - 1) + ' line of code in the file.');
            }
            else {
                console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + ' no more lines of code in the file');
                break;
            }
        }
    }
}

console.log(song()) 


//SUCCESS