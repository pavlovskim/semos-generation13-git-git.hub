// Split array method

//sintaksa e:   str.split(separator, limit)
// seperator gi razdeluva elementite, dokolku nema separator celata niza stanuva eden edinstven  element vo nizata.
// Primer za split() method
  
function func() { 
    var str = 'Matej raboti vo javascript'
    var array = str.split("raboti"); 
    document.write(array); 
} 
  
func();  // Output e : Matej , vo , javascript
