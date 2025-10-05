SIGNALS
a signal is a container of values, angular is notified when I change values contained into the signal, I can also change them with set method
Computed requires a function inside its function

i decoratori @ possono essere applicati anche alle proprietà di una classe

agli Input bisogna sempre assegnare un tipo.
è possibile usare i segnali anche per  gli input, importare input, non Input,
avatar = input();
input<string>(); -> eventualmente puo essere ricevuta una stringa
non abbiamo piu bisogno di !, perche con required non abbiamo bisogno di un initial value
gli inputsignals sono readonly, non è possibile usare il metodo set();

perchè usare inputsignals? beh non ci sono motivi, anche perche la maggior parte delle business ancora non le usa, meglio usare gli input
