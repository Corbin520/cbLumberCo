var Config = {
    apiKey: "AIzaSyBMh6v1EQCofg7NqDRkL_-tJXpLGB0Kp_k",
        authDomain: "cblumberco.firebaseapp.com",
        databaseURL: "https://cblumberco.firebaseio.com",
        projectId: "cblumberco",
        storageBucket: "cblumberco.appspot.com",
        messagingSenderId: "75242589579",
        appId: "1:75242589579:web:522dd999a2000ad8fcb38e"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

  var database = firebase.database();


// On click event
$("#submitFrm-btn").on("click", function() {

    

    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var city = $("#city-input").val().trim();
    var state = $("#state-input").val().trim();
    var zipCode = $("#zip-input").val().trim();
    var product = $("#product-input").val().trim();
    var dimentions = $("#dimensions-input").val().trim();
    var prodDetail = $("#prodDet-input").val().trim()


// alert(name + city)


   database.ref().push({
    Name: name,
    Email: email,
    City: city,
    State: state,
    Zip: zipCode,
    Product: product,
    Dimentions: dimentions,
    ProdDetails: prodDetail,
  });
})



firebase.database().ref().on("child_added", function (snapshot) {
    var dbName = snapshot.val().Name;
    var dbEmail = snapshot.val().Email;
    var dbCity = snapshot.val().City;
    var dbState = snapshot.val().State;
    var dbZip = snapshot.val().Zip
    var dbProduct = snapshot.val().Product;
    var dbDimentions = snapshot.val().Dimentions;
    var dbProdDetails = snapshot.val().ProdDetails
});



