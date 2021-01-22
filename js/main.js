const enquete = [
    {
        title : "Le bar à chat",
        largeur : 4,
        longueur : 4,
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
            "A1","B4","C3","D2","E4","F3","G2","H1","I3","J2","K4","L1","M1","N2","O3","P4"
        ]
    },

    {
        title : "La main dans le sac",
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

$('#salut').append('<h1>' + enquete[0].title + "</h1>")
$('#salut')

for (let index = 0; index < enquete[0].indices.length; index++) {
    $('#salut').append('<p>' + (index+1) +'. '+enquete[0].indices[index] + "</p><br>")   
}

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

$('.petitCarre').click(function() {
    $(this).removeClass('petitCarre'),
    $(this).addClass('petitCarreNon')
    $('.petitCarreNon').click(function() {
        $(this).removeClass('petitCarreNon'),
        $(this).addClass('petitCarreOui')
        $('.petitCarreOui').click(function() {
            $(this).removeClass('petitCarreOui'),
            $(this).addClass('petitCarre')
        })
    })   
})