/* 
Bibblan


1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.

2. Skapa en array av objekt med flera stycken böcker

3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.
*/

let booksArr = [{
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    numPages: 304
}, {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    numPages: 479
}, {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    numPages: 309
}, {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    numPages: 224
}]

function findBook(arr, title) {

    let result = null

    for (let book of arr) {
        if (book.title == title) {
            result = book;
        }
    }
    return result
}

// console.log(findBook(booksArr, 'The Hobbit'))


/* 
Letter Frequency

Räkna tecken i en sträng och organisera detta i ett objekt. 
Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. 
Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.

letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }
*/



function letterFrequency(str) {
    
    let finalObj = {};
        
    for (let i = 0; i < str.length; i++) {
        if (finalObj.hasOwnProperty(str[i])) {
            finalObj[str[i]] += 1
        } else {
            finalObj[str[i]] = 1
        }
    }

    // console.log(finalObj);
    return finalObj;
}

letterFrequency("kalle") // => {"k": 1. "a": 1, "l": 2, "e": 1}
letterFrequency("aaaa") // => {"a": 4}
letterFrequency("ni talar bra latin") // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }


/* 
    USER REGISTER

    För samtliga uppgifter nedan, ladda ner och utgå från users.js genom att lägga till <script src="users.js"> innan er script-tag. 
    Då har du en global variabel users som innehåller alla användare.
*/

/* 
    filterByCountry
    Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista innehållande endast användare med den landskoden.
*/

function filterByCountry(arr, code) {

    if (arr && code.length === 2 && typeof code === 'string') {
        let cc = code.toUpperCase()
        let returnList = []

        for (let user of arr) {
            if (user.nat === cc) {
                returnList.push(user)
            }
        }

        return returnList
        
    } else {
        return 'Invalid input'
    }
}


/* 
    filterByGender
    Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och returnerar en ny lista innehållande endast kvinnliga eller manliga användare.
*/

function findAllTitles() {
    let list = []
    for (let user of users) {
        if (list.indexOf(user.name.title) === -1) {
            list.push(user.name.title)
        }
    }
    return list
}

// console.log(findAllTitles())

function isMale(title) {
    if (title == 'Mr' || title == 'Monsieur') {
        return true
    } else {
        return false
    }
}

function filterByGender(arr, gender) {
    if (arr && (gender === 'Male' || gender === 'Female')) {
        let maleList = []
        let femaleList = []

        for (let user of users) {
            if (isMale(user.name.title)) {
                maleList.push(user)
            } else {
                femaleList.push(user)
            }
        }

        if (gender === 'Male') {
            return maleList
        } else {
            return femaleList
        }
    } else {
        return 'Invalid input'
    }
}


// console.log(filterByGender(users, 'Female'))



/*
    listEmails
    Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser
*/

function listEmails(arr) {
    let emailList = []

    for (let user of arr) {
        if (user.email) {
            emailList.push(user.email)
        } else {
            emailList.push("Couldn't find an email address for this user")
        }
    }
    return emailList
}


// console.log(listEmails(users))


/* 
Utmaning! - Reformat Emails

Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. 
Just nu följer deras e-mail formatet förnamn.efternamn@example.com men chefen vill att de ska följa formatet efternamn.förnamn@evilcorp.countrydomain.

Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.

Land	Nat	Domän
Frankrike	FR	.fr
Schweiz	CH	.ch
Tyskland	DE	.de
Norge	NO	.no
USA	US	.us
Turkiet	TR	.tr
Findland	FI	.fi
Storbritannien	GB	.uk
Nederländerna	NL	.nl
Nya Zeeland	NZ	.nz
Australien	AU	.au
Estland	ES	.ee
Irland	IE	.ie
Danmark	DK	.dk
Iran	IR	.ir
Brasilien	BR	.br
Kanada	CA	.ca

*/

function convertCountryDomain(code) {

    if (code !== 'GB' || code !== 'ES') { // Check for exceptions
        return code.toLowerCase()       // Run the common solution
    } else {                           
        switch (code) {                  // Handle exceptions
            case 'GB':
                return 'uk'
            case 'ES':
                return 'ee'
        }
    }
}


function reformatEmails(arr) {
    if (arr) {                  // Check for argument
        let newEmailsList = []  // Initializing return array

        for (let user of arr) { // Iterate thru every user

            let newEmail = `${user.name.last}.${user.name.first}@vilecorp.${convertCountryDomain(user.nat)}` // Concatenating the new email-address.

            if (newEmail.indexOf(' ') !== -1) { // Check for and remove whitespace.
                let fixedNewEmail = ''
                for (let char of newEmail) {
                    if (char !== ' ') {         // Allow character if it is NOT a whitespace.
                        fixedNewEmail += char
                    }
                }
                newEmail = fixedNewEmail // Update newEmail-variable with whitespace-free alternative.
            }
            newEmailsList.push(newEmail)  // Push new email-address to the final array.
        }

        return newEmailsList
    }
}

console.log(reformatEmails(users))