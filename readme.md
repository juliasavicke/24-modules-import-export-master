# Modules

## praktines uzduotys pasikartojimui

1. Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.
2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
3. sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje (randomUserApi.avif). Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.
4. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
5. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis. T.y. "Petras" -> "sartep"
6. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
Pvz: fn(3) => "180 seconds".

## leteles pratimas

Duomenis pasiimsime iš: https://magnetic-melon-yam.glitch.me
jei nustotu veikti duomenys ju kopija yra db direktorijoje.

1. Naudojant tik JS, sukurkite lentelę ir į ją įrašykite duomenis (id, name, city, fav_color).
2. Naudojant JS metodus, padalinkite vardą į dvi dalis: vardą ir pavardę (lentelėje).
3. Pridėkite prie lentelės (tarp id ir name) nuotrauką.
4. Sukurkite checkbox virš lentelės su JS. Jį paspaudus, rodys tik tuos žmones, kurie yra VIP.
5. Sukurkite virš lentelės ir search laukelį (forma su input type search ir mygtukas). Suvedus duomenis, lentelėje turi prasifiltruoti pagal vardą arba pavardę (fullname .contains search string). Capitalizacija turėtų būti nesvarbi.