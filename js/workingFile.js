let languageBtn = document.querySelector("#languageBtn");

languageBtn.addEventListener("click", ()=>{

    if(languageBtn.dataset.language === "en"){
        languageBtn.dataset.language = "pl";

        languageBtn.classList.toggle("flagEn");

        document.querySelector("h1").innerHTML = "OPTICAL COMMUNICATION ENGINEERING";

        document.querySelector("#pSectionOne").innerHTML = "Almost 20 years of experience in optical transmission - DWDM/OTN/SDH networks managing, commissioning, provisioning, new on-site installations, tuning, roll-outs, technical support and troubleshooting.";

        document.querySelector("#pSectionTwo").innerHTML = 'I am not afraid of confronting problems and have skills of solving them thanks to my professional competence. I am responsible and can apply technical knowledge in "real-world" production environments. I have ability to work as part of a team and perform job functions to standards especially under pressure of tense situations.';

        document.querySelector("#pSectionThree").innerHTML = "Specialities: maintenance, managing and troubleshooting in existing DWDM/OTN/SDH core networks. Development, commissioning, roll-out and re-building DWDM/OTN/SDH networks and equipment.";
    }else{
        languageBtn.dataset.language = "en";

        languageBtn.classList.toggle("flagEn");

        document.querySelector("h1").innerHTML = "INŻYNIERIA ŁĄCZNOŚCI OPTYCZNEJ";

        document.querySelector("#pSectionOne").innerHTML = "Prawie 20 lat doświadczenia w transmisji optycznej - zarządzanie sieciami DWDM / OTN / SDH, uruchamianie, udostępnianie, nowe instalacje na miejscu, tuning, roll-out, wsparcie techniczne i rozwiązywanie problemów.";

        document.querySelector("#pSectionTwo").innerHTML = 'Nie boję się stawiać czoła problemom, a dzięki kompetencjom zawodowym posiadam umiejętności ich rozwiązywania. Jestem odpowiedzialny i potrafię stosować wiedzę techniczną w „rzeczywistych” środowiskach produkcyjnych. Potrafię pracować w zespole i wykonywać zadania zgodnie ze standardami, szczególnie pod presją napiętych sytuacji.';

        document.querySelector("#pSectionThree").innerHTML = "Specjalizacje: konserwacja, zarządzanie i rozwiązywanie problemów w istniejących sieciach rdzeniowych DWDM / OTN / SDH. Rozwój, uruchomienie, uruchomienie i przebudowa sieci i urządzeń DWDM / OTN / SDH.";
    }    
})

