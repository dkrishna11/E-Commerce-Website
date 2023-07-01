const currentUser=JSON.parse(localStorage.getItem("current-Price"))
document.getElementById("rzp-button1").onclick = function (e) {

    var options = {
      key: "rzp_test_PV1oQ0oMtgXOsq", // Enter the Key ID generated from the Dashboard
      amount: currentUser * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Mesho. Payment",
      description: "This is your order",
      theme: {
        color: "#220080",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        "modal": {
            "ondismiss": function () {
              if (confirm("Are you sure, you want to close the form?")) {
                txt = "You pressed OK!";
                console.log("Checkout form closed by the user");
              } else {
                txt = "You pressed Cancel!";
                console.log("Complete the Payment")
              }
               }
       }
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    // clear mycart - localStorage
    e.preventDefault();
  };