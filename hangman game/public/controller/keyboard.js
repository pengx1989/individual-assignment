//Upon mouse-down, make the selectedLetter of keyboard-key.

$(".keyboard-key").on({
        mousedown: function() {
				$(this).css('opacity','0.3');
				$(this).prop('disabled', true);
				let userEnter = $(this).text().toLowerCase();
				letterChecker(computerGuessWord, userEnter);
        }
});

