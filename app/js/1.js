$(document).ready(function() {
	$('#form').submit(function() { 
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "../php/send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});