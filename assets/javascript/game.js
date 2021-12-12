$('document').ready(function () {
	var wins = 0;
	var losses = 0;
	var totalScore = 0;

	// Generate and show random number
	var randomNumber = ~~(Math.random() * 101) + 19;
	$('#random-number').text(randomNumber);

	// Assign random numbers to  crystals
	var crystal = ~~(Math.random() * 11) + 1;
	$('#crystal').val(crystal);
	console.log(crystal);
	var emerald = ~~(Math.random() * 11) + 1;
	$('#emerald').val(emerald);
	console.log(emerald);
	var sapphire = ~~(Math.random() * 11) + 1;
	$('#sapphire').val(sapphire);
	console.log(sapphire);
	var zircon = ~~(Math.random() * 11) + 1;
	$('#zircon').val(zircon);
	console.log(zircon);

	// Show wins and losses
	$('#result').text("Let's go!");
	$('#wins').text('Wins: ' + wins);
	$('#losses').text('Losses: ' + losses);

	function gameStart() {
		randomNumber = ~~(Math.random() * 101) + 19;
		$('#random-number').text(randomNumber);

		crystal = ~~(Math.random() * 11) + 1;
		$('#crystal').val(crystal);
		console.log(crystal);
		emerald = ~~(Math.random() * 11) + 1;
		$('#emerald').val(emerald);
		console.log(emerald);
		sapphire = ~~(Math.random() * 11) + 1;
		$('#sapphire').val(sapphire);
		console.log(sapphire);
		zircon = ~~(Math.random() * 11) + 1;
		$('#zircon').val(zircon);
		console.log(zircon);

		totalScore = 0;

		$('#scorecounter').text(totalScore);
	}

	// Click events

	$('#crystal').on('click', function () {
		totalScore += parseInt(crystal);
		$('#scorecounter').text(totalScore);
		if (totalScore === randomNumber) {
			$('#result').text('You won!');
			wins++;
			$('#wins').text('Wins: ' + wins);
			gameStart();
		} else if (totalScore > randomNumber) {
			$('#result').text('You lost');
			losses++;
			$('#losses').text('Losses: ' + losses);
			gameStart();
		}
	});

	$('#emerald').on('click', function () {
		totalScore += parseInt(emerald);
		$('#scorecounter').text(totalScore);

		if (totalScore === randomNumber) {
			$('#result').text('You won!');
			wins++;
			$('#wins').text('Wins: ' + wins);
			gameStart();
		} else if (totalScore > randomNumber) {
			$('#result').text('You lost');
			losses++;
			$('#losses').text('Losses: ' + losses);
			gameStart();
		}
	});

	$('#sapphire').on('click', function () {
		totalScore += parseInt(sapphire);
		$('#scorecounter').text(totalScore);

		if (totalScore === randomNumber) {
			$('#result').text('You won!');
			wins++;
			$('#wins').text('Wins: ' + wins);
			gameStart();
		} else if (totalScore > randomNumber) {
			$('#result').text('You lost');
			losses++;
			$('#losses').text('Losses: ' + losses);
			gameStart();
		}
	});

	$('#zircon').on('click', function () {
		totalScore += parseInt(zircon);
		$('#scorecounter').text(totalScore);

		if (totalScore === randomNumber) {
			$('#result').text('You won!');
			wins++;
			$('#wins').text('Wins: ' + wins);
			gameStart();
		} else if (totalScore > randomNumber) {
			$('#result').text('You lost');
			losses++;
			$('#losses').text('Losses: ' + losses);
			gameStart();
		}
	});
});
