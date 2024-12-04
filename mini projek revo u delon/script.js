// Fungsi untuk menghitung BMI
console.log("Script JavaScript berjalan");
function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

// Menangani submit form BMI
document.getElementById('formBMI').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai input
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Validasi input
    if (!gender || isNaN(height) || isNaN(weight)) {
        alert('Harap isi semua kolom dengan benar!');
        return;
    }

    // Hitung BMI
    const bmi = calculateBMI(weight, height);

    // Tentukan kategori BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Kurus';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Berat Badan Berlebih';
    } else {
        category = 'Obesitas';
    }

    // Tampilkan hasil
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `
        <p>Jenis Kelamin: ${gender === 'male' ? 'Laki-Laki' : 'Wanita'}</p>
        <p>BMI Anda: ${bmi}</p>
        <p>Kategori: ${category}</p>
    `;
});

