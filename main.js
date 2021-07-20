window.addEventListener("DOMContentLoaded", function () {

    localStorage.setItem('productNameVar', "Poliborda42");

    var produtos = {
        Poliborda42: {
            titulo: "Poliborda 42",
            descricao: "4 - Cabeçotes para acabamento da face da pedra. <br> 1 - Cabeçote para acabamento do bizote superior. <br> 1 - Cabeçote para acabamento do bizote inferior. <br> 1 - Cabeçote de corte de meia esquadria.",
        },
        Poliborda153: {
            titulo: "Poliborda 153",
            descricao: "1 - Cabeçote para acabamento da virada do peitoril. <br> 5 - Cabeçotes para acabamento da face da pedra. <br> 2 - Cabeçotes para acabamento do bizote superior. <br> 1 - Cabeçote para acabamento do bizote inferior. <br> 1 - Cabeçote para corte de meia esquadria.",
        },
        Poliborda264: {
            titulo: "Poliborda 264",
            descricao: "2 - Cabeçotes para acabamento da virada do peitoril. <br> 6 - Cabeçotes para acabamento da face da pedra. <br> 2 - Cabeçotes para acabamento do bizote superior. <br> 2 - Cabeçotes para acabamento do bizote inferior. <br> 1 - Cabeçote de corte de pingadeira, rebaixo de 1x1cm e até 4 frisos no degrau de escada. <br> 1 - Cabeçote de corte de meia esquadria.",
        },
        Serra: {
            titulo: "Serra ponte de duplo corte meia esquadria",
            descricao: "Serra ponte de corte de meia esquadria (com duplo corte). <br> O que ela faz: Corta a meia esquadria da banca e da saia ao mesmo tempo.",
        },
        Duplo: {
            titulo: "Duplo corte em meia esquadria de esteira",
            descricao: "Serra ponte de corte de meia esquadria (com duplo corte). <br> O que ela faz: Corta a meia esquadria da banca e da saia ao mesmo tempo.",
        },
    };

    $('.botoes div').click(function(){
        localStorage.setItem('productNameVar', $(this).attr('id'));
        changeProduct();
    })

    $('.swiper-slide img').click(function(){
        console.log("clicou: " + $(this).attr("data-name"));
        localStorage.setItem('productNameVar', $(this).attr("data-name"));
        location.href = "#produtos";
        changeProduct();
    })
    
    $('.social #facebook').click(function(){
        window.open('https://www.facebook.com/Mundial-M%C3%A1quinas-Ltda-101511688686121', '_blank');
    })

    $('.social #instagram').click(function(){
        window.open('https://www.instagram.com/mundialmaquinasltda/', '_blank');
    })

    $('.social #email').click(function(){
        location.href = "mailto:"+"vendasmundialmaquinas@outlook.com"+'?cc='+""+'&subject='+"Tenho interesse no(s) seu(s) produto(s)!"+'&body='+"";
    })

    $('.whatsapp').click(function(){
        window.open('https://api.whatsapp.com/send?phone=5528999811580&text=Olá, tenho interesse no(s) seu(s) produto(s)!', '_blank');
    })

    function changeProduct(){
        var productName = localStorage.getItem('productNameVar');
        console.log("Nome2: " + productName);

        if(productName=='Poliborda42'){
            $('.produtos .info').children("h1").text(produtos.Poliborda42.titulo);
            $('.produtos .info').children("p").html(produtos.Poliborda42.descricao);
        }
        else if(productName=='Poliborda153'){
            $('.produtos .info').children("h1").text(produtos.Poliborda153.titulo);
            $('.produtos .info').children("p").html(produtos.Poliborda153.descricao);
        } else if(productName=='Poliborda264'){
            $('.produtos .info').children("h1").text(produtos.Poliborda264.titulo);
            $('.produtos .info').children("p").html(produtos.Poliborda264.descricao);
        } else if(productName=='Serra'){
            $('.produtos .info').children("h1").text(produtos.Serra.titulo);
            $('.produtos .info').children("p").html(produtos.Serra.descricao);
        } else if(productName=='Duplo'){
            $('.produtos .info').children("h1").text(produtos.Duplo.titulo);
            $('.produtos .info').children("p").html(produtos.Duplo.descricao);
        }

        $('#'+productName).addClass('product-active').siblings().removeClass('product-active');

        //check if image exist
        var url = "Images/Index/Produtos/"+productName+"/";
        
        $('.produtos .info').children("img").eq(0).attr('src',url+'imagem1.webp');
        
        $('.produtos .info').children("img").eq(1).attr('src','Images/Index/Produtos/'+productName+'/informacoes.webp');
        
        var urlImage1 = url + "imagem1-small.webp";
        $.get(urlImage1)
            .done(function() { 
            console.log("imagem existe 1");
            $('.produtos .imagens').children("img").eq(0).attr('src', urlImage1);
            $('.small1').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.small1').css("display", "none");
        })
        
        var urlImage2 = url + "imagem2-small.webp";
        $.get(urlImage2)
            .done(function() { 
            console.log("imagem existe 2");
            $('.produtos .imagens').children("img").eq(1).attr('src', urlImage2);
            $('.small2').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.small2').css("display", "none");
        })
        
        var urlImage3 = url + "imagem3-small.webp";
        $.get(urlImage3)
            .done(function() { 
            console.log("imagem existe 3");
            $('.produtos .imagens').children("img").eq(2).attr('src', urlImage3);
            $('.small3').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.small3').css("display", "none");
        })
        
        var urlImage4 = url + "imagem4-small.webp";
        $.get(urlImage4)
            .done(function() { 
            console.log("imagem existe 4");
            $('.produtos .imagens').children("img").eq(3).attr('src', urlImage4);
            $('.small4').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.small4').css("display", "none");
        })
        
        var urlImage5 = url + "imagem5-small.webp";
        $.get(urlImage5)
            .done(function() { 
            console.log("imagem existe 5");
            $('.produtos .imagens').children("img").eq(4).attr('src', urlImage5);
            $('.small5').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.small5').css("display", "none");
        })
        
        var urlVideo1 = url + "video1-small.webp";
        $.get(urlVideo1)
            .done(function() { 
            console.log("video 1 existe");
            $('.produtos .imagens').children("img").eq(5).attr('src', urlVideo1);
            $('.video1').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.video1').css("display", "none");
        })
        
        var urlVideo2 = url + "video2-small.webp";
        $.get(urlVideo2)
            .done(function() { 
            console.log("video 2 existe");
            $('.produtos .imagens').children("img").eq(6).attr('src', urlVideo2);
            $('.video2').css("display", "block");
        }).fail(function() { 
            console.log("image dont exist"); 
            $('.video2').css("display", "none");
        })
    }

    $('.imagens img').click(function(){
        var productName = localStorage.getItem('productNameVar');

        console.log("atributo: " + $(this).attr('id'));

        if($(this).attr('id') != "video1" && $(this).attr('id') != "video2"){
            $('.info').children("img").eq(0).attr('src','Images/Index/Produtos/'+productName+'/'+$(this).attr('id')+'.webp');
        }
        else{
            $('.video').children("video").attr("src", 'Images/Index/Produtos/'+productName+'/'+$(this).attr('id')+'.mp4');
            $('.video').addClass('active');
        }
    })

    $('.playvideo').click(function(){
        var urlVideo = "Video/" + $(this).attr('id')+".mp4";
        $('.video-page .video').children("video").attr("src", urlVideo);
        $('.video-page .video').addClass('active'); 
    });

    $('.video .close').click(function(){
        var video = document.querySelector('.mainvideo');
        video.pause();
        video.currentTime = 0;
        $('.video').removeClass('active');
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        paginationClickable: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    $('.enviar-form').click(function(){
        getFormInfos();
    });

    function getFormInfos(){
        var emailMessage = "";

        var nome = document.querySelector('#form-nome').value;
        var email = document.querySelector('#form-email').value;
        var telefone = document.querySelector('#form-telefone').value;
        var setor = document.querySelector('#form-setor').value;
        var mensagem = document.querySelector('#form-mensagem').value;

        emailMessage += "Nome: " + nome + ". <br>";
        emailMessage += "Email: " + email + ". <br>";
        emailMessage += "Telefone: " + telefone + ". <br>";
        emailMessage += "Setor: " + setor + ". <br>";
        emailMessage += "Mensagem: " + mensagem + ". <br>";
        if(nome === "" || email === ""){
            document.getElementsByName('form-nome')[0].placeholder='Por favor, insira seu NOME!';
            $('#form-nome').addClass('placeholder-error');
            document.getElementsByName('form-email')[0].placeholder='Por favor, insira seu EMAIL!';
            $('#form-email').addClass('placeholder-error');
        }
        else{
            sendEmail(nome, email, emailMessage);
        }
    }

    function sendEmail(name, email, message){
        Email.send({
            Host: "smtp.gmail.com",
            Username: 'ldbmaildealer@gmail.com',
            Password: "jzkocqnlqfdoeuhr",
            To: 'vendasmundialmaquinas@outlook.com',
            From: 'ldbmaildealer@gmail.com',
            Subject: `${name} tem interesse no seu produto`,
            Body: `${message}`,
        }).then(function(message){
            alert("Seu email foi enviado com sucesso");
            window.location.reload(false); 
        }); 
    } 
});