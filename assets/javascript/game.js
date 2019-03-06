$(document).ready(function(){


    var characters = {
        aragorn: {
            name: 'aragorn',
            healthPoints : 100,
            attackPower : 5,
            counterAttackPower : 15,
            id: $('#aragorn')
        },
        gandalf : {
            name: 'gandalf',
            healthPoints : 100,
            attackPower : 5,
            counterAttackPower : 15,
            id: $('#gandalf')
        },
        witchKing : {
            name: 'witchKing',
            healthPoints : 100,
            attackPower : 5,
            counterAttackPower : 15,
            id: $('#witchKing')
        },
        saruman : {
            name: 'saruman',
            healthPoints : 100,
            attackPower : 5,
            counterAttackPower : 15,
            id: $('#saruman')
        }
    }

    var enemy;
    var player;
    //flag to be used in attack
    var characterChosen = false;
    var enemyChosen = false;


    $('#aragornHealth').text(characters.aragorn.healthPoints);
    $('#gandalfHealth').text(characters.gandalf.healthPoints);
    $('#witchHealth').text(characters.witchKing.healthPoints);
    $('#sarumanHealth').text(characters.saruman.healthPoints);
    
    
    
    // for (key in characters) {
    //     if(!characters.hasOwnProperty(key)) continue;
    //     var character = characters[key];
    //     for (var property in character) {
    //         if(!characters.hasOwnProperty(key)) continue;
    //         console.log(character[property]);
    //         $().text(character[healthPoints]);
            
    //     }
        
    // }
    
    console.log('Aragorn id is: ' + characters.aragorn.name);
    
    
    
    //click character card and separate them
    $('.character').on('click', function(){
        characterChosen = true;
        if($(this).val() === 'aragorn') {
            console.log('Clicked Aragorn!'); 
            $('#aragorn').remove().appendTo('#player');
            $('#gandalf, #witchKing, #saruman').addClass('enemy');
            $('#gandalf, #witchKing, #saruman').remove().appendTo('#availableEnemies');
            $('.character').on('click', function(){
                if($(this).val() === 'gandalf') {
                    $('#gandalf').remove().appendTo('#defender').addClass('enemyChosen');
                } else if($(this).val() === 'witchKing') {
                    $('#witchKing').remove().appendTo('#defender').addClass('enemyChosen');
                } else if($(this).val() === 'saruman'){
                    $('#saruman').remove().appendTo('#defender').addClass('enemyChosen');
                }
                $('.character').off('click');
            })
        } else if($(this).val() === 'gandalf') {
            console.log('Clicked Gandalf!');
            $('#gandalf').detach().appendTo('#player');
            $('#aragorn, #witchKing, #saruman').addClass('enemy');
            $('#aragorn, #witchKing, #saruman').remove().appendTo('#availableEnemies');
            $('.character').on('click', function(){
                if($(this).val() === 'aragorn') {
                    $('#aragorn').remove().appendTo('#defender').addClass('enemyChosen');
                } else if($(this).val() === 'witchKing') {
                    $('#witchKing').remove().appendTo('#defender').addClass('enemyChosen');
                } else {
                    $('#saruman').remove().appendTo('#defender').addClass('enemyChosen');
                }
                $('.character').off('click');
            })
        } else if($(this).val() === 'witchKing') {
            console.log('Clicked the Witch King!');
            $('#witchKing').detach().appendTo('#player');
            $('#aragorn, #gandalf, #saruman').addClass('enemy');
            $('#aragorn, #gandalf, #saruman').remove().appendTo('#availableEnemies');
            $('.character').on('click', function(){
                if($(this).val() === 'aragorn') {
                    $('#aragorn').remove().appendTo('#defender').addClass('enemyChosen');
                } else if($(this).val() === 'gandalf') {
                    $('#gandalf').remove().appendTo('#defender').addClass('enemyChosen');
                } else {
                    $('#saruman').remove().appendTo('#defender').addClass('enemyChosen');
                }
                $('.character').off('click');
            })
        } else {
            console.log('Clicked Saruman!');
            $('#saruman').detach().appendTo('#player');
            $('#aragorn, #witchKing, #gandalf').addClass('enemy');
            $('#aragorn, #witchKing, #gandalf').remove().appendTo('#availableEnemies');
            $('.character').on('click', function(){
                
                if($(this).val() === 'aragorn') {
                    $('#aragorn').remove().appendTo('#defender').addClass('enemyChosen');;
                } else if($(this).val() === 'gandalf') {
                    $('#gandalf').remove().appendTo('#defender').addClass('enemyChosen');;
                } else {
                    $('#witchKing').remove().appendTo('#defender').addClass('enemyChosen');;
                }
                $('.character').off('click');
                console.log($('#defender').text().length);
            })
        }
    })
    
    console.log($('#defender').text().length);
    
    if($('#defender').text().length >= 78) {
        enemyChosen = true;
        console.log('Enemy chosen!');
    }
    
    //attack
    $('#attackBtn').on('click', function() {
        if(characterChosen === false) {
            alert('Please choose a character!');
            return false;
        } 
        if(enemyChosen === false) {
            alert("Please choose an enemy to fight!");
            return false;
        } else {
    
        }
    
        
    
    


    })
})
