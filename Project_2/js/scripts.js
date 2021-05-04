var products = {
  white: {
    plain: {
      unit_price: 5.12,
      photo: "v-white.jpg",
    },
    printed: {
      unit_price: 8.95,
      photo: "v-white-personalized.jpg",
    },
  },

  colored: {
    plain: {
      unit_price: 6.04,
      photo: "v-color.jpg",
    },
    printed: {
      unit_price: 9.47,
      photo: "v-color-personalized.png",
    },
  },
};

// Search params

var search_params = {
  quantity: "",
  color: "",
  quality: "",
  style: "",
};

// Additional pricing rules:

// 1. The prices above are for Basic quality (q150).
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities:
// 1: above 1.000 units - 20% discount
// 2: above 500 units - 12% discount
// 3: above 100 units - 5% discount

// Solution:
// var load = products.colored.printed.photo;
// $("#photo-product").attr("src", "img/" + load);
//
// function discounts(disc) {
//   if (search_params.quantity > 100 && search_params.quantity < 500) {
//     var sum = (disc - (disc / 100) * 5).toFixed(2);
//     $("#x").css({
//       color: "red",
//       "font-size": "16px",
//     });
//     $("#x").delay(3500).show().text(" -5% was applied to your order");
//     $("#x").animate({ opacity: "toggle", right: "toggle" }, 5000);
//     return numberWithCommas(sum);
//   } else if (search_params.quantity > 500 && search_params.quantity < 1000) {
//     var sum2 = (disc - (disc / 100) * 12).toFixed(2);
//     $("#x").css({
//       color: "red",
//       "font-size": "16px",
//     });
//     $("#x").delay(3500).show().text(" -12% was applied to your order");
//     $("#x").animate({ opacity: "toggle", right: "toggle" }, 5000);
//     return numberWithCommas(sum2);
//   } else if (search_params.quantity > 1000) {
//     var sum2 = (disc - (disc / 100) * 20).toFixed(2);
//     $("#x").css({
//       color: "red",
//       "font-size": "16px",
//     });
//     $("#x").delay(3500).show().text(" -20% was applied to your order");
//     $("#x").animate({ opacity: "toggle", right: "toggle" }, 5000);
//     return numberWithCommas(sum2);
//   } else {
//     return disc;
//   }
// }
//
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
//
$(function () {
  //   //***************************QUANTITY***************************************************
  //   var quantity = $("#quantity").val();
  //   // console.log(quantity);
  //
  //   $("#quantity").change(function () {
  //     $(".refresh-loader").css("display", "block");
  //     quantity = $("#quantity").val();
  //     search_params.quantity = quantity;
  //
  //     setTimeout(function () {
  //       $(".refresh-loader").css("display", "none");
  //       $("#result-quantity").text(quantity);
  //       var price = products[search_params.color][search_params.style].unit_price;
  //
  //       //*************************************12*******************************************
  //       if (search_params.quality == "q190") {
  //         // var priceQuality =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var price_12 = (price / 100) * 12 + price;
  //         var totalQ = (price_12 * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(totalQ));
  //         $("#total-price").text(" " + discounts(totalQ));
  //       } else {
  //         // var price =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var total = (price * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(total));
  //         $("#total-price").text(" " + discounts(total));
  //       }
  //
  //       // var total = price * search_params.quantity;
  //       // $("#total-price").text(" " + total.toLocaleString("en-EN"));
  //     }, 2000);
  //   });
  //   //************************************COLOR********************************************
  //   $(".color-option").click(function () {
  //     $(".color-option").toggleClass("selected");
  //     $(".refresh-loader").css("display", "block");
  //     var id = $(this).attr("id");
  //     var colorValue = $(this).text();
  //     console.log(id);
  //     search_params.color = id;
  //
  //     setTimeout(function () {
  //       $(".refresh-loader").css("display", "none");
  //       $("#result-color").text(colorValue);
  //       var color = products[id][search_params.style].photo;
  //       var photoColor = $("#photo-product").attr("src", "img/" + color);
  //       var price = products[id][search_params.style].unit_price;
  //
  //       //************************************12%*******************************************
  //       if (search_params.quality == "q190") {
  //         // var priceQuality =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var price_12 = (price / 100) * 12 + price;
  //         var totalC = (price_12 * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(totalC));
  //         $("#total-price").text(" " + discounts(totalC));
  //       } else {
  //         // var price =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var total = (price * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(total));
  //         $("#total-price").text(" " + discounts(total));
  //       }
  //       //**********************************************************************************
  //
  //       if (total == 0) {
  //         $("#total-price").text("");
  //       }
  //
  //       // } else {
  //       //   $("#total-price").text(" " + t.toLocaleString("en-EN"));
  //       // }
  //       // var total = $("#total-price").text(total.toLocaleString("en-EN"));
  //
  //       // console.log(color);
  //     }, 2000);
  //   });
  //   //******************************STYLE***************************************************
  //   $("#style").change(function () {
  //     $(".refresh-loader").css("display", "block");
  //     var value = $("#style").val();
  //     var styleValue = $("#style option:selected").text();
  //     console.log(value);
  //     search_params.style = value;
  //
  //     setTimeout(function () {
  //       $(".refresh-loader").css("display", "none");
  //       $("#result-style").text(styleValue);
  //       var style = products[search_params.color][search_params.style].photo;
  //       var photoStyle = $("#photo-product").attr("src", "img/" + style);
  //       var price = products[search_params.color][search_params.style].unit_price;
  //
  //       if (search_params.quality == "q190") {
  //         // var priceQuality =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var price_12 = (price / 100) * 12 + price;
  //         var totalS = (price_12 * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(totalS));
  //         $("#total-price").text(" " + discounts(totalS));
  //       } else {
  //         // var price =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var total = (price * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(total));
  //         $("#total-price").text(" " + discounts(total));
  //         // console.log(price);
  //         // var t = price * search_params.quantity;
  //       }
  //       if (total == 0) {
  //         $("#total-price").text("");
  //       }
  //       // else {
  //       //   $("#total-price").text(" " + t.toLocaleString("en-EN"));
  //       // }
  //
  //       // var total = $("#total-price").text(total.toLocaleString("en-EN"));
  //     }, 2000);
  //   });
  //
  //   //****************************QUALITY***************************************************
  //
  //   $(".quality-option").click(function () {
  //     $(".quality-option").toggleClass("selected");
  //     $(".refresh-loader").css("display", "block");
  //     var quality = $(this).attr("id");
  //
  //     var qualityValue = $(this).text();
  //     console.log(quality);
  //     search_params.quality = quality;
  //
  //     // var priceQuality =
  //     //   products[search_params.color][search_params.style].unit_price;
  //
  //     setTimeout(function () {
  //       $(".refresh-loader").css("display", "none");
  //       $("#result-quality").text(qualityValue);
  //
  //       var priceQuality =
  //         products[search_params.color][search_params.style].unit_price;
  //
  //       if (search_params.quality == "q190") {
  //         var price_12 = (priceQuality / 100) * 12 + priceQuality;
  //         var totalQL = (price_12 * search_params.quantity).toFixed(2);
  //         // console.log(total);
  //         $("#total-price").text(" " + numberWithCommas(totalQL));
  //         $("#total-price").text(" " + discounts(totalQL));
  //       } else {
  //         // var price =
  //         //   products[search_params.color][search_params.style].unit_price;
  //         var total = (priceQuality * search_params.quantity).toFixed(2);
  //         $("#total-price").text(" " + numberWithCommas(total));
  //         $("#total-price").text(" " + discounts(total));
  //
  //         // console.log(price);
  //       }
  //
  //       // $("#result-quality").text(qualityValue);
  //     }, 2000);
  //   });
  // });

  function update_params() {
    search_params.quantity = parseInt($("#quantity").val());
    search_params.color = $("#color .option-button.selected").attr("id");
    search_params.quality = $("#quality .option-button.selected").attr("id");
    search_params.style = $("#style").val();
    console.log(search_params);

    update_order_details();
  }

  function update_order_details() {
    $(".refresh-loader").show();

    var styleSelector = "#style option[value=" + search_params.style + "]";
    $("#result-style").html($(styleSelector).text());

    var qualityId = "#" + search_params.quality;
    $("#result-quality").html($(qualityId).text());

    var colorId = "#" + search_params.color;
    $("#result-color").html($(colorId).text());

    $("#result-quantity").html(search_params.quantity);

    var orderTotal = calculate_total();
    $("#total-price").text(orderTotal);

    var photoUrl =
      "img/" + products[search_params.color][search_params.style].photo;
    $("#photo-product").attr("src", photoUrl);

    window.setTimeout(function () {
      $(".refresh-loader").hide();
    }, 500);
  }

  function calculate_total() {
    var unitPrice =
      products[search_params.color][search_params.style].unit_price;

    if (search_params.quality == "q190") {
      unitPrice *= 1.12;
    }

    var total = unitPrice * search_params.quantity;

    if (search_params.quantity >= 1000) {
      total *= 0.8;
    } else if (search_params.quantity >= 500) {
      total *= 0.88;
    } else if (search_params.quantity >= 100) {
      total *= 0.95;
    }

    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  update_params();

  $("#quantity").change(function () {
    search_params.quantity = parseInt($("#quantity").val());
    update_order_details();
  });

  $("#style").change(function () {
    search_params.style = $("#style").val();
    update_order_details();
  });

  $(".option-button").click(function () {
    var clickParam = $(this).parent().attr("id");
    var childSelector = "#" + clickParam + " .option-button";
    $(childSelector).removeClass("selected");
    $(this).addClass("selected");
    var selectedChild = "#" + clickParam + " .option-button.selected";
    search_params[clickParam] = $(selectedChild).attr("id");
    update_order_details();
  });
});
