// للتنقل بين المشاريع
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// متجر صغير
let total = 0;
function addToCart(price) {
    total += price;
    document.getElementById('cartTotal').innerText = total;
}

// حساب السعرات
function calculateCalories() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let age = document.getElementById('age').value;
    let activity = document.getElementById('activity').value;

    let bmr = 10 * weight + 6.25 * height - 5 * age + 5; // للرجال
    let calories = bmr * activity;

    document.getElementById('result').innerText = Math.round(calories);
}