function getCourseNumber(cohort) {
	// https://stackoverflow.com/a/42089547
	function removeCharacterAtIndex(value, index) {
		return value.substring(0, index) + value.substring(index + 1);
	}

	// Отримання поточного року та місяця для визначення номеру курсу.
	var last_number_current_year = (new Date().getFullYear()) % 10;
  	var current_month = new Date().getMonth();

  	// Якщо в шифрі групи є «п» (заповнює прискоренник), то видаляємо цю букву.
	if (cohort[3] == 'п') {
		cohort = removeCharacterAtIndex(cohort, 3);
	}
	
	/* Якщо номер з шифру групи більше, ніж остання цифра поточного року,
	то рік потрібно збільшити на 10 */
  	if (Number(cohort[3]) > last_number_current_year){
    		last_number_current_year += 10;
  	}
	
	/* Номер курсу - це різниця останньої цифри року та першої цифри шифру групи */
  	var course_number = last_number_current_year - Number(cohort[3]);
	
	/* Якщо поточний місяць входить в діапазон липень-грудень, то номер
	курсу потрібно збільшити на 1 */
  	if (current_month >= 6){
    		course_number++;
  	}
  
	/* Якщо шифр групи відповідає магістратурі, то номер курсу перевести
	з бакалаврату на магістратуру (додати 4 до номеру курсу) */
	if (cohort.includes('мн') || cohort.includes('мп')) {
		course_number += 4;
	}

	return course_number;
}
