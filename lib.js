

/**
 * Funzione che controlla se la stringa "str" può rappresentare un intero non negativo (un numero naturale)
 */
function isNormalInteger(str) {
    return /^\d+$/.test(str);
}

/**
 * Funzione che aggiunge l'elemento specificato nel form alla tabella contenente gli elementi del "magazzino".
 * Questa funzione viene richiamata direttamente alla pressione del pulsante "Insert" all'interno del form.
 */
function addItem() {
	
	//Recupero la tabella dalla pagina
	var table = document.getElementById("storedItem");
	
	//Recupero la prima riga, contenente i nomi di ogni oggetto
	var items = table.rows[0];
	
	//Recupero la seconda riga, contenente le quantità di ogni oggetto
	var amounts = table.rows[1];

	//Recupero i valori inseriti dall'utente nel form
	var item = document.getElementById("item").value;
	var amount = document.getElementById("amount").value;
	
	//Controllo che la quantità inserità sia valida, ovvero che sia un intero non negativo.
	if(!isNormalInteger(amount)){
		alert("Error!\nPlease, insert a not-negative integer.");
		return;
	}
	
	
	//Controllo se esiste già un oggetto in magazzino con lo stesso nome di quello inserito dall'utente
	//in tal caso, la variabile "idx" conterrà l'indice della colonna corrispondente, altrimenti manterrà il valore "-1"
	
	var idx = -1;

	for(var j = 0; j < items.cells.length; j++){   
	   if(items.cells[j].innerHTML == item){
		   idx = j;
	   }
	}

	//Se l'oggetto esiste già andiamo a cercare la cella contenente la sua quantità, altrimenti ne creiamo una nuova.
	//In ogni caso la variabile "a_cell" rappresenterà alla fine la cella che deve contenere la quantità richiesta.
	var a_cell;
	
	if(idx < 0){
		
		//In tal caso bisogna creare una nuova colonna, inserendo una cella in entrambe le righe
		
		//Creo e riempio la cella per il nome dell'oggetto
		var i_cell = items.insertCell(-1);
		i_cell.innerHTML = item;

		//Creo la cella per la quantità dell'oggetto e la inizializzo a "0"
		a_cell = amounts.insertCell(-1);
		a_cell.innerHTML = '0';
		
	}else{
		//In tal caso la colonna esiste già, quindi recupero soltanto la cella giusta.
		a_cell = amounts.cells[idx];
	}

	//Infine, aggiungo la quantità indicata dall'utente al contenuto della cella.
	a_cell.innerHTML = parseInt(a_cell.innerHTML) + parseInt(amount);
}

/**
 * Funzione che fa nascondere il form e svuota i suoi campi.
 * Questa funzione viene chiamata alla pressione del pulsante "Insert",
 * dopo aver inserito l'oggetto grazie alla funzione "addItem()".
 * 
 */
function hide(){
	var form = document.getElementById("form");
	form.style.display = 'none';
	
	//svuota il contenuto del campo identificato da "item"
	var item = document.getElementById("item");
	item.value = "";
	
	//svuota il contenuto del campo identificato da "amount"
	var amount = document.getElementById("amount");
	amount.value = "";
}


/**
 * Funzione che fa apparire il form per l'inserimento del nuovo oggetto.
 * Questa funzione viene chiamata alla pressione del pulsante "Aggiungi Item".
 */
function show(){
	var form = document.getElementById("form");
	form.style.display = 'block';
}

