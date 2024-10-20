function tentukanGrade() {

    let nilai = prompt("Masukkan nilai Anda:");

    nilai = Number(nilai);

    let grade;

    if (nilai >= 90) {
        grade = "Grade A";
    } else if (nilai >= 80 && nilai < 90) {
        grade = "Grade B";
    } else if (nilai >= 70 && nilai < 80) {
        grade = "Grade C";
    } else if (nilai >= 60 && nilai < 70) {
        grade = "Grade D";
    } else if (nilai < 60) {
        grade = "Grade E";
    } else {
        grade = "Input nilai tidak valid";
    }
    
    document.body.innerHTML += `<p>${grade}</p>`;
}

tentukanGrade();
