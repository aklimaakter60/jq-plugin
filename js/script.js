//typer plugin
$(document).ready(function() {
$('.text-animate').funnyText({
speed: 200,
borderColor:'#0dcaf0',
activeColor:'#0dcaf0',
color:'#fff',
fontSize:'50px'
});
});

//3d hover effect plugin

$(".project").hover3d({
  selector: ".project__card",
  shine: true,
});
//tooltips
$(document).ready(function() {
    new $.Zebra_Tooltips($('.zebra_tips1'));
});

//datatable
$(document).ready( function () {
    $('.table').DataTable();
} );