# Réservation de salles

Application de réservation de salles de réunion développée avec **Angular 22** dans le cadre de la formation Concepteur Développeur d'Applications (CDA).

## Fonctionnalités

- Liste des salles disponibles
- Consultation des détails d'une salle
- Affichage des équipements, de la capacité et de l'accessibilité
- Réservation d'une salle sur un créneau horaire
- Vérification des disponibilités

## Technologies

- Angular 22 / TypeScript
- HTML / CSS
- Angular Router
- Angular Signals et Signal Forms
- JSON Server (API REST simulée)

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/AnnickCang/cda-location-salles.git
cd cda-location-salles
```

### 2. Lancer l'API

```bash
cd api-mock
npm install
npm run salles
```

API : `http://localhost:3000`

### 3. Lancer Angular

Dans un second terminal, depuis la racine du projet :

```bash
cd location
npm install
npm start
```

Application : `http://localhost:4200`

## Routes API

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/rooms` | Liste des salles |
| GET | `/api/rooms/:id` | Détails d'une salle |
| GET | `/api/bookings` | Liste des réservations |
| POST | `/api/bookings` | Créer une réservation |

---

Projet pédagogique réalisé en équipe – Formation CDA.
