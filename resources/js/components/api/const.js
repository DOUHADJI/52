import { getWithAxios, postWithAxios } from "./axios";

export const specialites =  [
    {
        nom : "Course de char"
    },

    {
        nom : "Lutte"
    },

    {
        nom : "Athlétisme"
    }
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

export const progressions =   [

    {
     nom  : "entrainement_physique_char",
     valeur_du_jour :  getRandomIntInclusive(2,4),
     specialite:  "Course de char",
     type_entrainement :  "physique",
     valeur_min :  2,
     valeur_max :  4,
     marge_adresse :  0.4,
     marge_force :  0.3,
     marge_equilibre : 0.1,
     marge_vitesse :  0.5,
     marge_strategie :  0.2,
    },

     {
         nom :  "entrainement_tactique_char",
         valeur_du_jour:  getRandomIntInclusive(3,6),
         specialite  :  "Course de char",
         type_entrainement :  "tactique",
         valeur_min :  3,
         valeur_max :  6,
         marge_adresse :  0.4,
         marge_force :  0.3,
        marge_equilibre : 0.1,
         marge_vitesse :  0.5,
         marge_strategie :  0.2,
     },

    {
         nom :  "entrainement_combiné_char",
         valeur_du_jour:  getRandomIntInclusive(2,7),
         specialite :  "Course de char",
         type_entrainement :  "combiné",
         valeur_min :  2,
         valeur_max :  7,
         marge_adresse :  0.4,
         marge_force :  0.3,
        marge_equilibre : 0.1,
         marge_vitesse :  0.5,
         marge_strategie :  0.2,
    },

     {
        nom :  "entrainement_physique_lutte",
         valeur_du_jour:  getRandomIntInclusive(3,6),
         specialite :  "lutte",
         type_entrainement :  "physique",
         valeur_min :  3,
         valeur_max :  6,
         marge_adresse :  0.4,
         marge_force :  0.3,
        marge_equilibre : 0.1,
         marge_vitesse :  0.5,
         marge_strategie :  0.2,
     },

     {
        nom :  "entrainement_tactique_lutte",
        valeur_du_jour:  getRandomIntInclusive(1,3),
        specialite :  "lutte",
        type_entrainement :  "tactique",
        valeur_min :  1,
        valeur_max :  3,
        marge_adresse :  0.4,
        marge_force :  0.3,
       marge_equilibre : 0.1,
        marge_vitesse :  0.5,
        marge_strategie :  0.2,
     },

     {
        nom :  "entrainement_combiné_lutte",
        valeur_du_jour:  getRandomIntInclusive(1,5),
        specialite :  "lutte",
        type_entrainement :  "combiné",
        valeur_min :  1,
        valeur_max :  5,
        marge_adresse :  0.4,
        marge_force :  0.3,
       marge_equilibre : 0.1,
        marge_vitesse :  0.5,
        marge_strategie :  0.2,
     },

    {
        nom :  "entrainement_physique_athletisme",
         valeur_du_jour:  getRandomIntInclusive(3,5),
         specialite :  "athletisme",
         type_entrainement :  "physique",
         valeur_min :  3,
         valeur_max :  5,
         marge_adresse :  0.4,
         marge_force :  0.3,
        marge_equilibre : 0.1,
         marge_vitesse :  0.5,
         marge_strategie :  0.2,
    },

    {
        nom :  "entrainement_tactique_athletisme",
        valeur_du_jour:  getRandomIntInclusive(2,3),
        specialite :  "athletisme",
        type_entrainement :  "tactique",
        valeur_min :  2,
        valeur_max :  3,
        marge_adresse :  0.4,
        marge_force :  0.3,
       marge_equilibre : 0.1,
        marge_vitesse :  0.5,
        marge_strategie :  0.2,
    },

     {
         nom :  "entrainement_combiné_athletisme",
         valeur_du_jour:  getRandomIntInclusive(3,9),
         specialite :  "athletisme",
         type_entrainement :  "combiné",
         valeur_min :  3,
         valeur_max :  9,
         marge_adresse :  0.4,
         marge_force :  0.3,
        marge_equilibre : 0.1,
         marge_vitesse :  0.5,
         marge_strategie :  0.2,
     }
 ];


