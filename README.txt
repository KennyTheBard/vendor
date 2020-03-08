Echipa: Ratonii cu Caciula
Membri: Ion Daniela, Sandulescu Dragos, Teculescu Octavian

    Pentru acest proiect, noi am ales sa dezvoltam un mock-up demonstrativ
al conceptelor si arhitecturii pe care o propunem pentru cerinta data. Am
decis ca cea mai sigura cale de a administra acest tip de vanzare astfel
incat sa se extraga date cat mai indetaliate despre tranzactiile ce au loc
este de a aborda problema dintr-o perspectiva client-server, unde clientul
este programul ce ruleaza pe tonomatul din cerinta. In acest mod, logica
tonomatului poate fi implementata printr-un automat de stari care va fi
complet responsabil de gestionarea intrarilor (alegerea optiunilor, 
achitarea platii, etc) si iesirilor (afisarea de mesaje, servirea produselor,
eliberarea restului), iar toate responsabilitatile ce tin de validare,
realizare de plati bancare si mentinerea datelor tranzactiilor revin
serverului.
    Ambele implementari au fost facute folosind Node.js deoarece scopul
nu a fost sa intram in detalii de implementare, optimizare si reprezentare
a datelor in moduri cat mai bune, ci sa demonstram functionalitatea pur
conceptuala.

Clientul:
    Clientul este implementat ca un state machine ce emuleaza interactiunea
utilizatorului cu tonomatul (prin linie de comanda). Acesta cere sa se aleaga
un produs (care sa existe si sa fie disponibil pe stocul tonomatului), apoi
sa se aleaga metoda de plata si in functie de aceasta va cere introducerea de
bancnote (urmand sa elibereze produsul si apoi restul). In cazul platii cu cardul,
acesta vor prelua detaliile cardului (criptarea si/sau utilizarea protocoalelor
specifice acestui domeniu tin din nou de implementare, pentru aceasta demonstratie
presupunem ca reteaua este complet sigura) si se vor transmite catre server,
urmand ca acesta sa confirme acceparea platii (inregistrand-o totodata in baza
sa de date) si in functie de aceasta sa cera din nou plata sau sa elibereze
produsul.

Serverul:
    Serverul foloseste o baza de date (in acest caz folosim un fisier care pastreaza
in memorie datele) pentru a inregistra tranzactiile, memorand la ce tonomat au fost
facute, cat s-a platit, metoda de plata si desigur, produsul. Suma platita poate fi
considerata redundanta intr-o anumita masura, stiindu-se ca produsele sunt memorate 
cu tot cu pretul lor, insa aceasta redundanta permite mai multa flexibilitate in
modificarea proturilor, fara a produce inconsistente in baza de date. In aceasta
demonstratie, serverul serveste ca un mecanism minimalist care permite observarea
interactiunii dintre el si client la un nivel modest. Validari mai amanuntite, atat
la nivelul cererilor RESTful cat si la nivelul confirmarii datelor. De asemenea,
serverul poate fi extins pentru a suporta mult mai multe functionalitati in acest fel,
precum oferte temporare pe diferite produse, realizarea cererii la server pentru a
se reaproviziona un anumit tonomat, expunerea unor endpoint-uri pentru a se integra
cu un sistem de gestionare si interogare (pentru a putea verficiat usor de operatori
umani daca totul functioneaza in parametrii normali), etc.