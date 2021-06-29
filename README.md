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

## Analiza zagadnienia i jego modelowanie  

Diagram związków encji:  
![alt text](https://github.com/david799/projektowanie_aplikacji_internetowych/blob/master/image_2021-06-29_171144.png) 

## Implementacja  
```
class InvoiceModel {
    tableName = 'INVOICE';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        return result[0];
    }

    create = async ({ 
            issue_place, issue_date, order_done_date, seller_name, seller_nip, seller_address1, seller_address2, 
            client_name, client_nip, client_address1, client_address2, invoice_number, payment_type, payment_deadline,
            account_number, to_pay, email 
        }) => {
        const sql = `INSERT INTO ${this.tableName}
        (issue_place, issue_date, order_done_date, seller_name, seller_nip, seller_address1, seller_address2, 
        client_name, client_nip, client_address1, client_address2, invoice_number, payment_type, payment_deadline,
        account_number, to_pay, email) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, 
            [issue_place, issue_date, order_done_date, seller_name, seller_nip, seller_address1, seller_address2, 
            client_name, client_nip, client_address1, client_address2, invoice_number, payment_type, payment_deadline,
            account_number, to_pay, email]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE id = ?`;

        const result = await query(sql, [...values, id]);

        return result;
    }

    delete = async (id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE id = ?`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}
```  
Powyżej zobaczyć możemy implementacje funkcji do zarządzania tworzenia, pobierania, edycji i usuwania faktur. Są to bardzo proste funkcje które wykonują jedynie zapytania SQL.
Analogiczne funkcje są stworzone dla reszty tabel.  

```
router.get('/', awaitHandlerFactory(invoiceController.getAllInvoices)); 
router.get('/id/:id', awaitHandlerFactory(invoiceController.getInvoiceById)); 
router.post('/', awaitHandlerFactory(invoiceController.createInvoice)); 
router.patch('/id/:id', awaitHandlerFactory(invoiceController.updateInvoice)); 
router.delete('/id/:id',  awaitHandlerFactory(invoiceController.deleteInvoice));
```
Powyżej zobaczyć możemy routing dla zapytań obsługujących tabele `INVOICE`  

## Podsumowanie  
Dzięki oprogramowaniu możemy tworzyć i przechowywać dane o fakturach wystawianych przez firmę.  
Oprogramowanie można by było wzbogacić o generowanie PDFów z fakturami znajdującymi się w bazie, jak i ich przesyłanie na maila podanego podczas tworzenia faktury.
