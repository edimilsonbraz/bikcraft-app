if(window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 5000 // tempo de transição dos slides
    });
    
    new SimpleSlide({
        slide: 'portfolio', // nome do atributo data-slide="principal"
        time: 5000, // tempo de transição dos slides
        nav:true
    });

}

if(window.SimpleAnime) {
    
    new SimpleAnime();
}

if(window.SimpleForm) {
new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });

}


//Efeito Accordion
const accordionList = document.querySelectorAll('.js-accordion h3')

accordionList[0].nextElementSibling.classList.add('actived')
function activeAccordion(event) {

   this.classList.toggle('actived')
   this.nextElementSibling.classList.toggle('actived')
}

accordionList.forEach( (item) => {
    item.addEventListener('click', activeAccordion)
})