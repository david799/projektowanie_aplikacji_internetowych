## Identyfikacja zagadnienia biznesowego  
Aplikacja ma na celu usprawnić proces fakturowania i księgowania w firmie. Za jej pomocą wystawimy i zapiszemy w bazie danych każdą fakturę. 
Możemy zapisać wszystkie produkty które oferuje nasza firma, jak również wszystkich stałych odbiorców, dzięki czemu proces wystawienia faktury znacznie się skraca.
Dzięki opcji zapisywania faktur, również proces archiwizowania faktur znacznie się upraszcza, ponieważ mamy je wszystkie w jednym miejscu.

## Wymagania systemowe i funkcjonalne  
Aplikacja do uruchomienia potrzebuje serwera na którym jest możliwe uruchomienie Node.js w wersji 14+.  
Biblioteki które wykorzystuje Node.js to:  
"bcryptjs": "^2.4.3",  
"cors": "^2.8.5",  
"dotenv": "^8.2.0",  
"express": "^4.17.1",  
"express-validator": "^6.10.1",  
"jsonwebtoken": "^8.5.1",  
"mysql2": "^2.2.5"  
Silnik bazy danych z którą działa aplikacja to MySql w wersji 8+. Dane wprowadzane są do bazy danych poprzez przetworzenie danych wysyłanych w zapytaniach RESTowych.


c. Analiza zagadnienia i jego modelowanie
[ max. 1 str. A4 ]
Należy określić modele aplikacji wynikające przeprowadzonej analizy funkcjonalnej i
biznesowej:
- metody obiektowe: diagramy klas, diagramy interakcji obiektów,
- definicje: klas, pól danych złożonych i elementarnych oraz metod
- metody strukturalne: diagramy związków encji (dla baz danych), diagram,
przepływów danych, diagramy przejść,
- definicje: encji, atrybutów, procesów , przepływów danych, danych złożonych i
elementarnych.
d. Implementacja
[ max. 2 str. A4 ]
Przedstawić fizyczne aspekty implementacji tj. najistotniejsze elementy i fragmenty
kodu kluczowych funkcjonalności, opisu ich działania z punktu widzenia
implementacji wykorzystanych narzędzi i bibliotek dodatkowych.
e. Podsumowanie
[ max. 0.5 str. A4 ]
Należy opisać osiągnięty cel, napotkane trudności oraz perspektywę rozwoju jeśli
taka istnieje.
