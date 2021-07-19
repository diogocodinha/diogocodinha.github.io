let currentPriceId;

$(document).ready(function(){
  let image;
  $('#image').on("change", function() {

      if (this.files && this.files[0]) {

      var FR= new FileReader();

      FR.addEventListener("load", function(e) {
        image = e.target.result;
      });

      FR.readAsDataURL( this.files[0] );
  }
  });

  $("#bidButton").on("click", function() {
      $("#"+currentPriceId).text($('#modalPrice').val()+"€");
  })

  $("#sellButton").on('click', function() {
    createItem(image, $('#name').val(), $('#description').val(), $('#price').val());
  });
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

let c = 7;

function createItem(imagem, nome, descricao, preco) {
  const priceId = "preco" + c;
  const buttonId = "licitar" + c;
  const li = `<li class="list-group-item clearfix">
              <img class="img-responsive img-rounded" src="${imagem}" alt=""/>
              <h3 class="list-group-item-heading">
                ${nome}
                <span class="label label-danger pull-right">NEW !</span>
              </h3>
              <p class="list-group-item-text lead">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.
                <br />
                <a href="#"><small>Details&#8230;</small></a>
              </p>
              <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
                <a class="btn btn-default" id="${buttonId}" data-toggle="modal" data-target="#bidModal">Licitar</a>
                <a class="btn btn-primary" id="${priceId}">${preco}€</a>
              </div>
            </li>`;
  document.getElementById("listaItens").innerHTML = li + document.getElementById("listaItens").innerHTML;

  $("#"+buttonId).on("click", function() {
      console.log(priceId, buttonId);
      currentPriceId = priceId;
  });
  c++;
}
