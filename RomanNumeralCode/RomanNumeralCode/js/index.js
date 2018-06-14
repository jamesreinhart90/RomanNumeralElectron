function getRomanNumeral() {
    romanNumeral = document.getElementById('romanNumeral').value;
    checkIfInRange(romanNumeral);
};

function checkIfInRange(romanNumeral) {
    if ((romanNumeral < 1) || (romanNumeral > 100)) {
        console.log('out of range');
        error = '<h4>This value is out of range, please enter a value between 1 and 100.</h4>';
    } else {
        error = ''
        findRomanNumeral(romanNumeral);
    }
    document.getElementById('errors').innerHTML = error;
};

function findRomanNumeral(romanNumeral) {
    vCount = 0;
    xCount = 0;
    lCount = 0;
    cCount = 0;
    aMod = (romanNumeral % 5);
    output = '';

    while (romanNumeral >= 5) {
        romanNumeral = romanNumeral - 5;
        vCount++;
    }
    while (vCount >= 2) {
        vCount = vCount - 2;
        xCount++;
    }
    while (xCount >= 5) {
        xCount = xCount - 5;
        lCount++;
    }
    while (lCount >= 2) {
        lCount = lCount - 2
        cCount++;
    }

    console.log(aMod + ' ' + vCount + ' ' + xCount + ' ' + lCount + ' ' + cCount);

    while (cCount >= 1) {
        output = output+ 'C';
        cCount--;
    }

    while (lCount >= 1) {
        if (lCount == 1 && xCount == 4) {
            output = output + 'XC';
            lCount--;
            xCount = xCount - 4;
        } else {
            output = output + 'L';
            lCount--;
        }
    }

    while (xCount >= 1) {
        if (xCount == 4) {
            output = output + 'XL';
            xCount = xCount - 4;
        } else {
            output = output + 'X';
            xCount--;
        }
    }

    while (vCount >= 1) {
        if (vCount == 1 && aMod == 4) {
            output = output + 'IX';
            aMod = aMod - 4;
            vCount--;
        } else {
            output = output + 'V';
            vCount--;
        }
    }

    while (aMod >= 1) {
        if (aMod == 4) {
            output = output + 'IV';
            aMod = aMod - 4;
        } else {
            aMod--;
            output = output+ 'I';
        }        
    }

    document.getElementById('output').innerHTML = output;
}