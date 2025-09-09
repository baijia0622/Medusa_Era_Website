$(".Toolbar").hide();
$(".ToolbarButtonX").hide();
$(".aboutUs").hide();
$(".designConcept").hide();
$(".Information").hide();
$(".jellyBlock").hide();

$(".ToolbarButton").click(function() {
  $(".Toolbar").fadeIn(500);
  $(".ToolbarButtonX").fadeIn(500);
  $(".ToolbarButton").fadeOut(500);
});

$(".ToolbarButtonX").click(function() {
  $(".Toolbar").fadeOut(500);
  $(".aboutUs").fadeOut(500);
  $(".designConcept").fadeOut(500);
  $(".Information").fadeOut(500);
  $(".ToolbarButtonX").fadeOut(500);
  $(".ToolbarButton").fadeIn(500);
});

$(".BT4").click(function() {
  $(".aboutUs").fadeIn(500);
  $(".designConcept").fadeOut(500);
  $(".Information").fadeOut(500);
});

$(".aboutUsX").click(function() {
  $(".aboutUs").fadeOut(500);
});

$(".BT1").click(function() {
  $(".designConcept").fadeIn(500);
  $(".aboutUs").fadeOut(500);
  $(".Information").fadeOut(500);
});

$(".designConceptX").click(function() {
  $(".designConcept").fadeOut(500);
});

$(".BT3").click(function() {
  $(".Information").fadeIn(500);
  $(".aboutUs").fadeOut(500);
  $(".designConcept").fadeOut(500);
});

$(".InformationX").click(function() {
  $(".Information").fadeOut(500);
});


$(document).ready(function() {
  $('.button.BT2').click(function() {
    $(".aboutUs").fadeOut(500);
    $(".designConcept").fadeOut(500);
    $(".Information").fadeOut(500);
    $(".ToolbarButtonX").fadeOut(0);
    $(".Toolbar").fadeOut(500);
    $(".ToolbarButton").fadeIn(500);
    var menuPosition = $('.ClassificationBlock').offset().top;
    $('html, body').animate({
      scrollTop: menuPosition
    }, 1000); // 1000 毫秒為滾動動畫持續的時間
  });
});

$(".jellyBlockX").click(function() {
  $(".jellyBlock").fadeOut(500);
});


$(".showMe1").click(function() {
  $(".jelly1").fadeIn(500);
});

$(".showMe2").click(function() {
  $(".jelly2").fadeIn(500);
});

$(".showMe3").click(function() {
  $(".jelly3").fadeIn(500);
});

$(".showMe4").click(function() {
  $(".jelly4").fadeIn(500);
});

$(".showMe5").click(function() {
  $(".jelly5").fadeIn(500);
});

$(".showMe6").click(function() {
  $(".jelly6").fadeIn(500);
});

$(".showMe7").click(function() {
  $(".jelly7").fadeIn(500);
});

$(".showMe8").click(function() {
  $(".jelly8").fadeIn(500);
});

$(".showMe9").click(function() {
  $(".jelly9").fadeIn(500);
});

$(".showMe10").click(function() {
  $(".jelly10").fadeIn(500);
});

$(".showMe11").click(function() {
  $(".jelly11").fadeIn(500);
});

$(".showMe12").click(function() {
  $(".jelly12").fadeIn(500);
});

$(".showMe13").click(function() {
  $(".jelly13").fadeIn(500);
});

$(".showMe14").click(function() {
  $(".jelly14").fadeIn(500);
});

$(".showMe15").click(function() {
  $(".jelly15").fadeIn(500);
});
    
$(".showMe16").click(function() {
  $(".jelly16").fadeIn(500);
});

$(".showMe17").click(function() {
  $(".jelly17").fadeIn(500);
});

$(".showMe18").click(function() {
  $(".jelly18").fadeIn(500);
});

$(".showMe19").click(function() {
  $(".jelly19").fadeIn(500);
});

$(".showMe20").click(function() {
  $(".jelly20").fadeIn(500);
});

$(".showMe21").click(function() {
  $(".jelly21").fadeIn(500);
});

$(".showMe22").click(function() {
  $(".jelly22").fadeIn(500);
});

$(".showMe23").click(function() {
  $(".jelly23").fadeIn(500);
});

$(".showMe24").click(function() {
  $(".jelly24").fadeIn(500);
});

$(".showMe25").click(function() {
  $(".jelly25").fadeIn(500);
});

$(".showMe26").click(function() {
  $(".jelly26").fadeIn(500);
});

$(".showMe27").click(function() {
  $(".jelly27").fadeIn(500);
});

$(".showMe28").click(function() {
  $(".jelly28").fadeIn(500);
});

$(".showMe29").click(function() {
  $(".jelly29").fadeIn(500);
});

$(".showMe30").click(function() {
  $(".jelly30").fadeIn(500);
});

$(".showMe31").click(function() {
  $(".jelly31").fadeIn(500);
});

$(".showMe32").click(function() {
  $(".jelly32").fadeIn(500);
});

$(".showMe33").click(function() {
  $(".jelly33").fadeIn(500);
});

$(".showMe34").click(function() {
  $(".jelly34").fadeIn(500);
});

$(".showMe35").click(function() {
  $(".jelly35").fadeIn(500);
});

$(".showMe36").click(function() {
  $(".jelly36").fadeIn(500);
});

$(".block1").click(function() {
  $(".jelly1").fadeIn(500);
});

$(".block2").click(function() {
  $(".jelly2").fadeIn(500);
});

$(".block3").click(function() {
  $(".jelly3").fadeIn(500);
});

$(".block4").click(function() {
  $(".jelly4").fadeIn(500);
});

$(".block5").click(function() {
  $(".jelly5").fadeIn(500);
});

$(".block6").click(function() {
  $(".jelly6").fadeIn(500);
});

$(".block7").click(function() {
  $(".jelly7").fadeIn(500);
});

$(".block8").click(function() {
  $(".jelly8").fadeIn(500);
});

$(".block9").click(function() {
  $(".jelly9").fadeIn(500);
});

$(".block10").click(function() {
  $(".jelly10").fadeIn(500);
});

$(".block11").click(function() {
  $(".jelly11").fadeIn(500);
});

$(".block12").click(function() {
  $(".jelly12").fadeIn(500);
});

$(".block13").click(function() {
  $(".jelly13").fadeIn(500);
});

$(".block14").click(function() {
  $(".jelly14").fadeIn(500);
});

$(".block15").click(function() {
  $(".jelly15").fadeIn(500);
});

$(".block16").click(function() {
  $(".jelly16").fadeIn(500);
});

$(".block17").click(function() {
  $(".jelly17").fadeIn(500);
});

$(".block18").click(function() {
  $(".jelly18").fadeIn(500);
});

$(".block19").click(function() {
  $(".jelly19").fadeIn(500);
});

$(".block20").click(function() {
  $(".jelly20").fadeIn(500);
});

$(".block21").click(function() {
  $(".jelly21").fadeIn(500);
});

$(".block22").click(function() {
  $(".jelly22").fadeIn(500);
});

$(".block23").click(function() {
  $(".jelly23").fadeIn(500);
});

$(".block24").click(function() {
  $(".jelly24").fadeIn(500);
});

$(".block25").click(function() {
  $(".jelly25").fadeIn(500);
});

$(".block26").click(function() {
  $(".jelly26").fadeIn(500);
});

$(".block27").click(function() {
  $(".jelly27").fadeIn(500);
});

$(".block28").click(function() {
  $(".jelly28").fadeIn(500);
});

$(".block29").click(function() {
  $(".jelly29").fadeIn(500);
});

$(".block30").click(function() {
  $(".jelly30").fadeIn(500);
});

$(".block31").click(function() {
  $(".jelly31").fadeIn(500);
});

$(".block32").click(function() {
  $(".jelly32").fadeIn(500);
});

$(".block33").click(function() {
  $(".jelly33").fadeIn(500);
});

$(".block34").click(function() {
  $(".jelly34").fadeIn(500);
});

$(".block35").click(function() {
  $(".jelly35").fadeIn(500);
});

$(".block36").click(function() {
  $(".jelly36").fadeIn(500);
});