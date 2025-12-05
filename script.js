// Données du CV
const cvData = {
    experiences: [
        {
            titre: "Stagiaire Développeur Web",
            entreprise: "TechStart Morocco",
            dates: "Juillet 2024 - Septembre 2024",
            description: [
                "Développement de sites web responsives avec HTML5 et CSS3",
                "Intégration de designs avec Bootstrap",
                "Création de fonctionnalités interactives en JavaScript",
                "Collaboration avec l'équipe de développement"
            ]
        },
        {
            titre: "Assistant Développeur Web",
            entreprise: "Digital Agency Marrakech",
            dates: "Mars 2024 - Juin 2024",
            description: [
                "Création de pages web statiques avec HTML5 et CSS3",
                "Mise en place de designs responsives avec Bootstrap",
                "Support sur les projets frontend",
                "Apprentissage des meilleures pratiques de développement"
            ]
        },
        {
            titre: "Projet Universitaire - Site E-Commerce",
            entreprise: "FSSM - Faculté des Sciences Semlalia",
            dates: "2025",
            description: [
                "Développement d'un site e-commerce avec HTML5, CSS3 et JavaScript",
                "Design responsive utilisant Bootstrap",
                "Gestion du projet avec GitHub",
                "Présentation et soutenance du projet devant les professeurs"
            ]
        }
    ],
    formations: [
        {
            titre: "Licence Informatique",
            etablissement: "FSSM - Faculté des Sciences Semlalia",
            dates: "2021 - 2024",
            specialite: "Développement Web"
        },
        {
            titre: "Cours en Ligne - Web Development",
            etablissement: "Faculté des Sciences Semlalia",
            dates: "2024",
            specialite: "HTML5, CSS3, JavaScript, Bootstrap"
        },
        {
            titre: "Baccalauréat Scientifique",
            etablissement: "Lycée Mohammed VI, Marrakech",
            dates: "2024",
            specialite: "Sciences de technologie electriques"
        }
    ],
    competences: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap"
    ],
    projets: [
        {
            titre: "Portfolio Personnel",
            description: "Site portfolio showcase de mes projets et compétences",
            technologies: ["HTML5", "CSS3", "Bootstrap"],
            icone: "fas fa-briefcase"
        },
        {
            titre: "Application To-Do List",
            description: "Gestionnaire de tâches interactif avec sauvegarde locale",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            icone: "fas fa-tasks"
        },
        {
            titre: "Site Vitrine Restaurant",
            description: "Site web responsif pour un restaurant local à Fès",
            technologies: ["HTML5", "CSS3", "Bootstrap"],
            icone: "fas fa-utensils"
        },
        {
            titre: "Calculatrice Web",
            description: "Calculatrice interactive avec interface moderne",
            technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
            icone: "fas fa-calculator"
        }
    ],
    langues: [
        { nom: "العربية (Arabe)", niveau: 100 },
        { nom: "Français", niveau: 85 },
        { nom: "Anglais", niveau: 80 }
    ],
    certifications: [
        "Certificat HTML5 & CSS3 ",
        "JavaScript Basics ",
        "Responsive Web Design",
        "Bootstrap Framework"
    ]
};

// Fonction pour générer la liste d'expériences
function loadExperiences() {
    const container = document.getElementById('experienceList');
    container.innerHTML = cvData.experiences.map(exp => `
        <div class="experience-item">
            <h5>${exp.titre}</h5>
            <p class="date"><i class="fas fa-calendar-alt"></i> ${exp.dates}</p>
            <p class="company"><i class="fas fa-building"></i> ${exp.entreprise}</p>
            <ul>
                ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Fonction pour générer la liste de formation
function loadFormations() {
    const container = document.getElementById('formationList');
    container.innerHTML = cvData.formations.map(form => `
        <div class="formation-item">
            <h5>${form.titre}</h5>
            <p class="date"><i class="fas fa-calendar-alt"></i> ${form.dates}</p>
            <p class="school"><i class="fas fa-school"></i> ${form.etablissement}</p>
            <p><strong>Spécialité:</strong> ${form.specialite}</p>
        </div>
    `).join('');
}

// Fonction pour générer les compétences
function loadSkills() {
    const container = document.getElementById('skillsList');
    container.innerHTML = cvData.competences.map(skill => `
        <span class="skill-badge">${skill}</span>
    `).join('');
}

// Fonction pour générer les projets
function loadProjects() {
    const container = document.getElementById('projectsList');
    container.innerHTML = cvData.projets.map(projet => `
        <div class="col-md-6">
            <div class="project-card">
                <div class="project-image">
                    <i class="${projet.icone}"></i>
                </div>
                <div class="project-body">
                    <h5>${projet.titre}</h5>
                    <p>${projet.description}</p>
                    <div class="project-tags">
                        ${projet.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Fonction pour générer les langues
function loadLanguages() {
    const container = document.getElementById('languesList');
    container.innerHTML = cvData.langues.map(langue => `
        <div class="language-item">
            <p>${langue.nom}</p>
            <div class="progress">
                <div class="progress-bar" style="width: ${langue.niveau}%"></div>
            </div>
        </div>
    `).join('');
}

// Fonction pour générer les certifications
function loadCertifications() {
    const container = document.getElementById('certificationsList');
    container.innerHTML = cvData.certifications.map(cert => `
        <div class="cert-item">
            <i class="fas fa-check-circle text-success"></i>
            <strong>${cert}</strong>
        </div>
    `).join('');
}

// Initialiser le CV au chargement
document.addEventListener('DOMContentLoaded', function() {
    loadExperiences();
    loadFormations();
    loadSkills();
    loadProjects();
    loadLanguages();
    loadCertifications();

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.experience-item, .formation-item, .project-card').forEach(el => {
    observer.observe(el);
});