let currentPriceId;
let c = 1;



$(document).ready(function(){
  createItem("../images/candeeiro.jpg", "Candeeiro", "Candeeiro muito luminoso.", 12.50, "10/08/2021", 0);
  createItem("../images/fatima.jfif", "Nossa Senhora de Fátima", "Estátua de Nossa Senhora de Fátima.", 2.50,"22/08/2021", 0);
  createItem("../images/monitor.jpg", "Monitor", "Monitor em muito bom estado.", 80,"13/08/2021", 0);
  createItem("../images/gato.jpg", "Gatinho Persa", "Gatinho Persa muito bem educado e fofo.", 500, "07/08/2021",0);
  createItem("../images/sofa.jpg", "Sofá", "Sofá em pele muito confortável e em ótimo estado.", 200,"31/08/2021", 1);
  createItem("../images/guitarra1.jpeg", "Guitarra Clássica", "Guitarra Clássica em muito bom estado.", 120,"09/08/2021", 1);

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
    createItem(image, $('#name').val(), $('#description').val(), $('#price').val(), $('#date').val(), 1);
  });

  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      let hash = this.hash;

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

});

function createItem(imagem, nome, descricao, preco, date, newItem) {
  const priceId = "preco" + c;
  const buttonId = "licitar" + c;
  let li;
  if (newItem === 1){
      li = `<li class="list-group-item clearfix">
              <img class="img-responsive img-rounded" src="${imagem}" alt=""/>
              <h3 class="list-group-item-heading">
                ${nome}
                <span class="label label-danger pull-right">NEW !</span>
              </h3>
              <h5>${descricao}</h5>
              <h6 class="dataFecho">Data de fecho: ${date}</h6>
              <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
                <a class="btn btn-default b" id="${buttonId}" data-toggle="modal" data-target="#bidModal">Licitar</a>
                <a class="btn btn-primary" id="${priceId}">${preco}€</a>
              </div>
            </li>`;
  } else {
      li = `<li class="list-group-item clearfix">
          <img class="img-responsive img-rounded" src="${imagem}" alt=""/>
          <h3 class="list-group-item-heading">
            ${nome}
            <span class="label label-danger pull-right"></span>
          </h3>
          <h5>${descricao}</h5>
          <h6 class="dataFecho">Data de fecho: ${date}</h6>
          <div class="btn-toolbar pull-right" role="toolbar" aria-label="">
            <a class="btn btn-default b" id="${buttonId}" data-toggle="modal" data-target="#bidModal">Licitar</a>
            <a class="btn btn-primary" id="${priceId}">${preco}€</a>
          </div>
        </li>`;
  }

  document.getElementById("listaItens").innerHTML = li + document.getElementById("listaItens").innerHTML;


  $("#"+buttonId).on("click", function() {
      console.log(priceId, buttonId);
      currentPriceId = priceId;
  });
  c++;
}

$('.b').on("click", function() {
    console.log("Shit");
});
