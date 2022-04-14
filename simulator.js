function simulate() {
  var value = document.getElementById("value").valueAsNumber;

  var inputTermYear = document.getElementById("termyear");
  var termYears = inputTermYear.valueAsNumber;
  var termMonths = termYears * 12;

  var inputTermMonths = document.getElementById("termmonth");
  inputTermMonths.valueAsNumber = termMonths;

  var inputInterestYear = document.getElementById("interestyear");
  var interestYear = inputInterestYear.valueAsNumber;
  var interestMonth = (1 + interestYear) ** (1 / 12) - 1;

  var amortizacao = value / termMonths;
  document.getElementById("interestmonth").valueAsNumber = interestMonth;

  var totalInterest = 0;
  var tbody = document.querySelector("tbody");
  for (var i = 0; i < termMonths; i++) {
    //calculos
    var balanceDue = value - amortizacao * i;
    var interestInstallment = balanceDue * interestMonth;
    totalInterest = totalInterest + interestInstallment;

    //show in the screen
    if (i < 5) {
      var tr = tbody.children[i];
      var td1 = tr.children[1];
      td1.textContent = amortizacao.toFixed(2);

      var td2 = tr.children[2];
      td2.textContent = interestInstallment.toFixed(2);

      var td3 = tr.children[3];
      td3.textContent = (interestInstallment + amortizacao).toFixed(2);
    }
  }

  document.getElementById("totalinterest").valueAsNumber =
    totalInterest.toFixed(2);
  console.log(typeof termYears);
}

simulate();
