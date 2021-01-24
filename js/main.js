const enquete = [
    {
        title : "Le bar à chat",
        largeur : 4,
        largeurPetitCarre : 4,
        indices : [
            "Tornado adore se mettre en boule au niveau du dos des clients. Il n'est pas le chat préféré de l'ami qui a commandé un café.",
            "Alan a reçu la visite d'un chat de plus que Lucie, et deux de moins que l'ami(e) qui a un faible pour Pitou",
            "Le chapardeur est l'animal préféré de la personne qui a commandé un chocolat chaud. Elle a été approchée par un chat de plus que celle qui a craqué pour le félin s'installant sur les genoux des clients",
            "L'ami qui a pris un thé a fondu pour Chataîgne",
            "Matt n'a pas commandé de café",
        ],
        elements : [
            {
                name : 'Boisson',
                list : ['Café', 'Chocolat', 'Limonade', 'Thé']
            },
            {
                name : 'Félins',
                list : ['3', '4', '5', '6']
            },
            {
                name : 'Chat',
                list : ['Châtaigne', 'Pitou', 'Quizzy', 'Tornado']
            },
            {
                name : 'Paticularité',
                list : ['Caresses', 'Chapardeur', 'Dos', 'Genoux']
            },
            {
                name : 'Amis',
                list : ['Alan', 'Isabelle', 'Lucie', 'Matt']
            }
        ],
        goodAns : [
            "1","6","11","16","18","24","25","31","35","38","44","45","49","54","59","64"
        ]
    },

    {
        title : "La main dans le sac",
        largeur : 3,
        largeurPetitCarre : 5,
        indices : [
            "Le pop-corn sucré a été commandé en même temps que les biscuits, mais pas par Océane.",
            "Le paquet d'Alexis contenait cent grammes de plus que celui de Mathilde, et cinquante de moins que celui au beurre.",
            "Le pop-corn enrobé de chocolat n'a pas été acheté par Alexis ni par celui/celle qui a pris des barres chocolatés.",
            "Eva a commandé de l'eau avec son pop-corn salé ou sucré. Son paquet contenait cinquante grammes de moins que celui de l'ami(e) qui a commandé un soda.",
            "Océane a commandé 200g de pop-corn",
        ],
        elements : [
            {
                name : 'Copain',
                list : ['Alexis', 'Eva', 'Mathilde', 'Océane', 'Théo']
            },
            {
                name : 'Pop-corn',
                list : ['Beurre', 'Caramel', 'Chocolat', 'Salé', "Sucré"]
            },
            {
                name : 'Quantité',
                list : ['200g', '250g', '300g', '350g', '400g']
            },
            {
                name : 'Achat',
                list : ['Biscuit', 'Bonbons', 'Chocolat', 'Eau', 'Soda']
            },
        ],
        goodAns : [
            "A5","B1","C4","D2","E3","F4","G3","H2","I1","J5","K3","L4","M5","N2","O1"
        ]
    },
]

function enquete1() {
    // AFFICHAGE DU TITRE
    $('#salut').append('<h1>' + enquete[0].title + "</h1>")

    // AFFICHAGE DES INDICES 
    for (let index = 0; index < enquete[0].indices.length; index++) {
        $('#salut').append('<p>' + (index+1) +'. '+enquete[0].indices[index] + "</p><br>")   
    }

    // AFFICHAGE DES OPTIONS
    for (let index = 0; index < enquete[0].elements[0].list.length; index++) {
        $('#ligne1').append('<p class="rotate">' + enquete[0].elements[0].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[1].list.length; index++) {
        $('#ligne2').append('<p class="rotate">' + enquete[0].elements[1].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[2].list.length; index++) {
        $('#ligne3').append('<p class="rotate">' + enquete[0].elements[2].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[3].list.length; index++) {
        $('#ligne4').append('<p class="rotate">' + enquete[0].elements[3].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[4].list.length; index++) {
        $('#ligne5').append('<p>' + enquete[0].elements[4].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[3].list.length; index++) {
        $('#ligne6').append('<p>' + enquete[0].elements[3].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[2].list.length; index++) {
        $('#ligne7').append('<p>' + enquete[0].elements[2].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[0].elements[1].list.length; index++) {
        $('#ligne8').append('<p>' + enquete[0].elements[1].list[index] + '</p>')
    }
}

function enquete2() {
    // AFFICHAGE DU TITRE
    $('#salut').append('<h1>' + enquete[1].title + "</h1>")

    // AFFICHAGE DES INDICES
    for (let index = 0; index < enquete[1].indices.length; index++) {
        $('#salut').append('<p>' + (index+1) +'. '+enquete[1].indices[index] + "</p><br>")   
    }

    // AFFICHAGE DES OPTIONS
    for (let index = 0; index < enquete[1].elements[1].list.length; index++) {
        $('#ligne1').append('<p class="rotate">' + enquete[1].elements[1].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[1].elements[2].list.length; index++) {
        $('#ligne2').append('<p class="rotate">' + enquete[1].elements[2].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[1].elements[3].list.length; index++) {
        $('#ligne3').append('<p class="rotate">' + enquete[1].elements[3].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[1].elements[0].list.length; index++) {
        $('#ligne5').append('<p>' + enquete[1].elements[0].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[1].elements[3].list.length; index++) {
        $('#ligne6').append('<p>' + enquete[1].elements[3].list[index] + '</p>')
    }

    for (let index = 0; index < enquete[1].elements[2].list.length; index++) {
        $('#ligne7').append('<p>' + enquete[1].elements[2].list[index] + '</p>')
    }
}

// CACHER
$('#finDuJeu').hide()

// SELECTION DE L'ENQUETE
var numeroEnquete = 0
var depart = 0
var pseudo = ""

// FONCTION DE LA CREATION D'UNE ENQUETE
function NouveauCarre(numeroEnquete) {
    let numero = numeroEnquete
    let largeur = enquete[numero].largeur
    for (let index = 0; index < largeur; index++) {
        let ligne = document.getElementById('ligneHaut2')
        let newTab = document.createElement('div')
        ligne.append(newTab)
        newTab.className = 'ligne'
    }
    for (let index = 0; index < (largeur-1); index++) {
        let ligne = document.getElementById('ligneHaut3')
        let newTab = document.createElement('div')
        ligne.append(newTab)
        newTab.className = 'ligne'
    }
    for (let index = 0; index < (largeur-2); index++) {
        let ligne = document.getElementById('ligneHaut4')
        let newTab = document.createElement('div')
        ligne.append(newTab)
        newTab.className = 'ligne'
    }
    for (let index = 0; index < (largeur-3); index++) {
        let ligne = document.getElementById('ligneHaut5')
        let newTab = document.createElement('div')
        ligne.append(newTab)
        newTab.className = 'ligne'
    }

    if(numeroEnquete === 0) {
        enquete1()
    } else {
        enquete2()
    }
}

// CHANGEMENT DE COULEURS DES PETITS CARREE
setInterval(function(){
    $('.petitCarre').click(function(){
        $(this).removeClass('petitCarre'),
        $(this).addClass('petitCarreNon'),
        $(this).html('N')
    })

    $('.petitCarreNon').click(function(){
        $(this).removeClass('petitCarreNon'),
        $(this).addClass('petitCarreOui'),
        $(this).html('O')
    })

    $('.petitCarreOui').click(function(){
        $(this).removeClass('petitCarreOui'),
        $(this).addClass('petitCarre'),
        $(this).html('')
    })
},100)

setInterval(function(){
    $('.petitCarre5').click(function(){
        $(this).removeClass('petitCarre5'),
        $(this).addClass('petitCarreNon5'),
        $(this).html('N')
    })

    $('.petitCarreNon5').click(function(){
        $(this).removeClass('petitCarreNon5'),
        $(this).addClass('petitCarreOui5'),
        $(this).html('O')
    })

    $('.petitCarreOui5').click(function(){
        $(this).removeClass('petitCarreOui5'),
        $(this).addClass('petitCarre5'),
        $(this).html('')
    })
},100)

// LANCEMENT DU JEU

// CLIQUE SUR L'ENQUETE NUMERO 1
$('#1').click(function(){
    numeroEnquete = 0;
    pseudo = $('#pseudo').val()
    $('#timer').append(pseudo)
    $('#overlay').hide(),
    $('#choisir').hide()
    // ACTIVATION DE LA FONCTION DE CREATION D'ENQUETE
    NouveauCarre(numeroEnquete)
    // RAJOUT DES PETITES CASES DANS LES GRANDES CASES
    setTimeout(function(){
        let id = 1
        $('.ligne').each(function() {
            for (let index = 0; index < (enquete[numeroEnquete].largeurPetitCarre*enquete[numeroEnquete].largeurPetitCarre); index++) {
                let carre = $(this)
                let newDiv = document.createElement('div')
                carre.append(newDiv)
                newDiv.className = "petitCarre " + id
                id++
            }
        })
    }, 10)
    // LE TIMER
    let leTemps = setInterval(function(){
        depart++
        $('#temps').html(depart)
    }, 1000)
    $('#verif').click(function(){
        clearInterval(leTemps)
    })
    // VERIFICATION QUE TOUTES LES CASES SONT REMPLIES
    setInterval(function(){
        let i = 1
        $('#ligneHaut2 div div').each(function(){
            if($(this).attr('class') === (i + " petitCarreNon") || $(this).attr('class') === (i + " petitCarreOui")){
                i++
                if(i > 64){
                    $('#verif').attr("disabled", false);
                } else {
                    $('#verif').attr("disabled", true);
                }
            }
        })
    }, 100)
})

// CLIQUE SUR L'ENQUETE NUMERO 2
$('#2').click(function(){
    numeroEnquete = 1;
    pseudo = $('#pseudo').val()
    $('#timer').append(pseudo)
    $('#overlay').hide(),
    $('#choisir').hide()
    // ACTIVATION DE LA FONCTION DE CREATION D'ENQUETE
    NouveauCarre(numeroEnquete)
    // RAJOUT DES PETITES CASES DANS LES GRANDES CASES
    setTimeout(function(){
        let id = 1
        $('.ligne').each(function() {
            for (let index = 0; index < (enquete[numeroEnquete].largeurPetitCarre*enquete[numeroEnquete].largeurPetitCarre); index++) {
                let carre = $(this)
                let newDiv = document.createElement('div')
                carre.append(newDiv)
                newDiv.className = "petitCarre5 " + id
                id++
            }
        })
    }, 10)
    // LE TIMER
    let leTemps = setInterval(function(){
        depart++
        $('#temps').html(depart)
    }, 1000)
    $('#verif').click(function(){
        clearInterval(leTemps)
    })
    // VERIFICATION QUE TOUTES LES CASES SONT REMPLIES
    setInterval(function(){
        let i = 1
        $('#ligneHaut2 div div').each(function(){
            if($(this).attr('class') === (i + " petitCarreNon5") || $(this).attr('class') === (i + " petitCarreOui5")){
                i++
                if(i > 75){
                    $('#verif').attr("disabled", false);
                } else {
                    $('#verif').attr("disabled", true);
                }
            }
        })
    }, 100)
})

// CLIQUE SUR LE BOUTON FIN DU JEU
$('#verif').click(function(){
    enquete[numeroEnquete].goodAns.forEach(function(element){
        if($('#ligneHaut2 div div').attr('class') === (element + ' petitCarreOui')) {
            console.log('bravo')
        } else {
            depart += 30
        }
    });
    $('#overlay').show(),
    $('#finDuJeu').show(),
    $('#textFin').html(pseudo + " | Votre score : " + depart)
})