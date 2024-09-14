const careerWebBtn = document.getElementById('careerWeb');
const careerElecBtn = document.getElementById('careerElec');
const careerWeb = document.getElementById('techWeb');
const careerElec = document.getElementById('techEEE');

careerElecBtn.addEventListener('click', () => {
    careerWebBtn.classList.remove('active');
    careerElecBtn.classList.add('active');
    careerWeb.style.display = 'none';
    careerElec.style.display = 'block';
});

careerWebBtn.addEventListener('click', () => {
    careerElecBtn.classList.remove('active');
    careerWebBtn.classList.add('active');
    careerElec.style.display = 'none';
    careerWeb.style.display = 'block';
});
