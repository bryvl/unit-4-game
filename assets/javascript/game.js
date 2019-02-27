aragorn = {
    healthPoints : 100,
    attackPower : 5,
    counterAttackPower : 15
};
gandalf = {
    healthPoints : 100,
    attackPower : 5,
    counterAttackPower : 15
};
witchKing = {
    healthPoints : 100,
    attackPower : 5,
    counterAttackPower : 15
};
saruman = {
    healthPoints : 100,
    attackPower : 5,
    counterAttackPower : 15
};

$('.character').on('click', function(){
    if($(this).val() === 'aragorn') {
        console.log('Clicked Aragorn!'); 
        $('#aragorn').detach().appendTo('#player');
        $('#gandalf, #witchKing, #saruman').addClass('enemy');
        $('#gandalf, #witchKing, #saruman').detach().appendTo('#defender');
    } else if($(this).val() === 'gandalf') {
        console.log('Clicked Gandalf!');
        $('#gandalf').detach().appendTo('#player');
        $('#aragorn, #witchKing, #saruman').addClass('enemy');
        $('#aragorn, #witchKing, #saruman').detach().appendTo('#defender');
    } else if($(this).val() === 'witchKing') {
        console.log('Clicked the Witch King!');
        $('#witchKing').detach().appendTo('#player');
        $('#aragorn, #gandalf, #saruman').addClass('enemy');
        $('#aragorn, #gandalf, #saruman').detach().appendTo('#defender');
    } else {
        console.log('Clicked Saruman!');
        $('#saruman').detach().appendTo('#player');
        $('#aragorn, #witchKing, #gandalf').addClass('enemy');
        $('#aragorn, #witchKing, #gandalf').detach().appendTo('#defender');
    }

})