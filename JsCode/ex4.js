var order_date = new Date().getTime();
var shipments = {
  standard: {
    leadTime: 7,
    fee: 2,
  },
  express: {
    leadTime: 3,
    fee: 4.5,
  },
};

function calculation(start_day, leadTime) {
  var result = start_day + leadTime * 86400000;
  return result;
}

var option_1 = calculation(order_date, shipments.standard["leadTime"]);
var option_2 = calculation(order_date, shipments.express["leadTime"]);

var delivery_1 = new Date(option_1);
var delivery_2 = new Date(option_2);
if (!Date.prototype.toISODate) {
  Date.prototype.toISODate = function () {
    return (
      this.getFullYear() +
      "-" +
      ("0" + (this.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + this.getDate()).slice(-2)
    );
  };
}

//**********************************************************************

document.getElementById("shipments").onchange = function () {
  var selectField = document.getElementById("shipments");
  var selectedOption = selectField.options.selectedIndex;
  var selectedValue = selectField.options[selectedOption].innerHTML;

  for (var index = 0; index < selectedOption; index++) {
    var order_date = new Date();

    var optionIndex = index;

    if (optionIndex == 0) {
      var shipment_standart = delivery_1;
      var fee_standart = parseFloat(shipments.standard["fee"]);

      document.getElementById("order_date").innerHTML =
        " " + order_date.toISODate();
      document.getElementById("delivery_date").innerHTML =
        " " + shipment_standart.toISODate();
      document.getElementById("delivery_fee").innerHTML = " " + fee_standart;
    } else {
      var shipment_express = delivery_2;
      var fee_express = parseFloat(shipments.express["fee"]);

      document.getElementById("order_date").innerHTML =
        " " + order_date.toISODate();
      document.getElementById("delivery_date").innerHTML =
        " " + shipment_express.toISODate();
      document.getElementById("delivery_fee").innerHTML = " " + fee_express;
    }
  }
};

// #2

var phones = {
  iphone_se_red: {
    name: "iPhone SE 64GB Red",
    price: "450",
    currency: "US$",
    imageUrl:
      "https://www.cdiscount.com/pdt2/4/3/8/1/300x300/ap0194252143438/rw/apple-iphone-xr-128go-product-red.jpg",
  },
  iphone_11_black: {
    name: "iPhone 11 128GB Black",
    price: "869",
    currency: "EUR",
    imageUrl: "https://assets.swappie.com/iphon11musta1-300x300.jpg",
  },
  iphone_8_plus_silver: {
    name: "iPhone 8 Plus 64GB Silver",
    price: "519",
    currency: "US$",
    imageUrl: "https://i.ebayimg.com/images/g/CQoAAOSwhf1gFFJf/s-l300.jpg",
  },
};
var iphoneSeRed = phones.iphone_se_red;
var iphone11Black = phones.iphone_11_black;
var iphone8Plus = phones.iphone_8_plus_silver;

var phone = document.getElementsByName("product");
for (var a = 0; a < phone.length; a++) {
  phone[a].onchange = function () {
    for (var b = 0; b < phone.length; b++) {
      if (phone[b].checked) {
        var value = phone[b].value;
      }
      if (value == "iphone_11_black") {
        document.getElementById("phone_image").src = iphone11Black["imageUrl"];
        document.getElementById("phone_name").innerHTML = iphone11Black["name"];
        document.getElementById("phone_price").innerHTML =
          iphone11Black["currency"] +
          " " +
          parseInt(iphone11Black["price"]).toFixed(2);
      }
      if (value == "iphone_8_plus_silver") {
        document.getElementById("phone_image").src = iphone8Plus["imageUrl"];
        document.getElementById("phone_name").innerHTML = iphone8Plus["name"];
        document.getElementById("phone_price").innerHTML =
          iphone8Plus["currency"] +
          " " +
          parseInt(iphone8Plus["price"]).toFixed(2);
      }
      if (value == "iphone_se_red") {
        document.getElementById("phone_image").src = iphoneSeRed["imageUrl"];
        document.getElementById("phone_name").innerHTML = iphoneSeRed["name"];
        document.getElementById("phone_price").innerHTML =
          iphoneSeRed["currency"] +
          " " +
          parseInt(iphoneSeRed["price"]).toFixed(2);
      }
    }
  };
}

//  #3

function Stopwatch(opts) {
  var time = 0;
  var interval;
  var offset;

  var elem = opts.elem;
  var delay = opts.delay;

  function update() {
    if (this.IsOn) {
      time += delta();
    }
    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }

  function delta() {
    var now = Date.now();
    var timePessed = now - offset;
    offset = now;
    return timePessed;
  }

  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    // var hours = Math.floor(time.getHours().toString() / 3600000).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    // if (hours.length < 2) {
    //   hours = "0" + hours;
    // }

    if (minutes.length < 2) {
      minutes = "0" + minutes;
    }
    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }
    if (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    return minutes + " : " + seconds + " . " + milliseconds;
  }

  //**********************************************************************
  this.IsOn = false;

  this.start = function () {
    if (!this.IsOn) {
      interval = setInterval(update.bind(this), delay);
      offset = Date.now();
      this.IsOn = true;
    }
  };

  this.stop = function () {
    if (this.IsOn) {
      clearInterval(interval);
      interval = null;
      this.IsOn = false;
    }
  };

  this.reset = function () {
    if (!this.IsOn) {
      time = 0;
      update();
    }
  };
}
//************************************************************************
var timer = document.getElementById("stopwatch");
var watch = new Stopwatch({
  elem: timer,
  delay: 10,
});

function start() {
  watch.start();
  document.getElementById("start_stop").textContent = "Stop";
}

function stop() {
  watch.stop();
  document.getElementById("start_stop").textContent = "Start";
}

document.getElementById("start_stop").onclick = function () {
  watch.IsOn ? stop() : start();
};

document.getElementById("reset").onclick = function () {
  watch.reset();
};
