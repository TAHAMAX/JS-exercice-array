
//#Exercice 1 Créer un tableau mois et l'initialiser avec les valeurs suivantes :
      var array = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet" ,"aout", "septembre" ,"octobre", "novembre", "decembre"];
//##Exercice 2 Avec le tableau de l'exercice 1, afficher la valeur de la troisième ligne de ce tableau.
	alert("la valeur de la troisieme ligne de ce tableau = "+array[2]);
//##Exercice 3 Avec le tableau de l'exercice 1, afficher la valeur de l'index 5.
	alert("la valeur de l'index 5 = "+array[5]);
//##Exercice 4 Avec le tableau de l'exercice 1, afficher "novembre".
	var no1="novembre";
	for (var i = 0;i<=12; i++)
	 {
		if (array[i]==no1) 
		{
		alert(array[i]);
		break;
		}
	}
//##Exercice 5 Avec le tableau de l'exercice 1, modifier le mois de aout pour lui ajouter l'accent manquant.
	var no1="aout";
	for (var i = 0; i <= 12; i++)
	 {
		if (array[i]==no1) 
		{
		array[i]=prompt("modifier le mois de aout pour ajouter l'accent manquant");
		alert("modifier =  "+array[i]);
		break;
		}
	}
//##Exercice 6 Avec le tableau de l'exercice 1, afficher toutes les valeurs de ce tableau.
	
	alert(array);
	
//##Exercice 7 Récuperer le fichier array/app.js;
	var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
    //alert(array);

//##Exercice 8 Rajouter "Courgette" au tableau array;
	 console.log(array.push(prompt("Rajouter ' Courgette ' au tableau array")));
	   //alert(array);
	   var x = "Pomme";
       console.log(array[4].push(x));
       //alert(array);
//##Exercice 9 Rajouter "Citron" au tableau d'index 4;
	array.splice(4, 0, "Citron");
	//  alert(array);
//##Exercice 10 Retirer "Cerise";
var no3="Cerise";
	for (var i = 0;i<=12; i++)
	 {
		if (array[i]==no3) 
		{
		array.splice(i, 1);
		alert(array);
		break;
		}
	}
	
//##Exercice 11 Rajouter "Poire" en index 2 du tableau array;
array.splice(2, 0, "Poire");
alert(array);


