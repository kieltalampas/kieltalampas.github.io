// Switches the content column between the main view (Experience/Projects/Skills)
// and the full-page Internship detail view.
const viewMain = document.getElementById('view-main');
const viewInternship = document.getElementById('view-internship');
const seeInternshipDetails = document.getElementById('seeInternshipDetails');
const internshipBack = document.getElementById('internshipBack');

function showInternshipView() {
    viewMain.classList.remove('active');
    viewInternship.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainView() {
    viewInternship.classList.remove('active');
    viewMain.classList.add('active');
}

seeInternshipDetails.addEventListener('click', showInternshipView);
internshipBack.addEventListener('click', showMainView);

// Sidebar nav links (Experience/Projects/Skills) should return to the main
// view before scrolling, in case the Internship view is currently showing.
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (viewInternship.classList.contains('active')) showMainView();
    });
});
