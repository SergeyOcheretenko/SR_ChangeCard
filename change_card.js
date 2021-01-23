function getCourseNumber(cohort) {
	// https://stackoverflow.com/a/42089547
	function removeCharacterAtIndex(value, index) {
		return value.substring(0, index) + value.substring(index + 1);
	}

	// Отримання поточного року та місяця для визначення номеру курсу.
	var last_number_current_year = (new Date().getFullYear()) % 10;
  	var current_month = new Date().getMonth();

  // Якщо в групі є «п» (заповнює прискоренник), то цю букву потрібно видалити.
	if (cohort[3] == "п") {
		cohort = removeCharacterAtIndex(cohort, 3);
	}

  	if (Number(cohort[3]) > last_number_current_year){
    	last_number_current_year += 10;
  	}
	/* Якщо  */
  	var course_number = last_number_current_year - Number(cohort[3]);

  	if (current_month >= 6){
    	course_number++;
  	}
  
	if (cohort.includes('мн') || cohort.includes('мп')) {
		// Якщо шифр групи відповідає магістратурі
		course_number += 4;
	}

	return course_number;
}
