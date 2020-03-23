// Maak in vanilla javascript (dus geen library's) een array van 500 getallen waarbij de eerste helft bestaat uit 
// willekeurige getallen tussen 10 en 300 
// en de andere helft uit willekeurige getallen tussen 500 en 700.

//`Uit het array van ${aantalGetallen} getallen is het getal ${grootsteGetal} het grootst.
// Dit getal zit in index ${indexGrootsteGetal} in het array.`

// Let er op dat je de 'tick' gebruikt (karakter naast de z-toets op je toetsenbord) als aanhalingsteken, de zogenaamde template literal. 
// Zo kun je de variabelen aantalGetallen, 
// grootsteGetal en indexGrootsteGetal mooi in 1 regel samen met de tekst plaatsen.


    let aantalGetallen= [];
        for (let i=10, t=250; i<t; i++) {
        aantalGetallen.push(Math.round(Math.random() * 300))
        }
        console.log(aantalGetallen);

    function grootsteGetal(aantalGetallen) {
            return Math.max.apply(Math, aantalGetallen);
          }
          document.write("Het grootste getal uit de array is "+ grootsteGetal(aantalGetallen));
// let grootsteGetal =
// let indexGrootsteGetal =


