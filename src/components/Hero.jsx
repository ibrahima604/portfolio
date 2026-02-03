"use client";

import React from "react";
import { Linkedin, Github } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AnimatedList } from "@/components/magicui/animated-list";
import { MarqueeDemoHorizontal } from "@/components/magicui/MarqueeDemoHorizontal";
import ibrahimPhoto from "../assets/images/ibrahima.jpg";

import { 
  FaLaptopCode, 
  FaTools, 
  FaRocket, 
  FaChalkboardTeacher,
  FaFileImage,
  FaFileCode
} from 'react-icons/fa';

export default function Hero() {
  const handleOpenCv=()=>{
    window.open('/cv_ibrahima_diallo.pdf', '_blank');
  }

  return (
    <section className="w-full flex flex-col px-4 py-10 max-w-6xl mx-auto">
      {/* Bloc titre et description */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left">
  {/* Section gauche : Texte */}
  <div className="flex flex-col items-start text-left flex-1">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
      <TypingAnimation duration={100} startOnView={true} className="inline-block" as="span">
        Développeur Full Stack | Freelance
      </TypingAnimation>
    </h1>

    <p className="mt-3 text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl text-gray-700 dark:text-gray-300">
      Développeur front-end créant des applications Web performantes, réactives et conviviales à l'aide de technologies modernes.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 w-full sm:w-auto">
      <RainbowButton className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition dark:bg-white dark:text-black">
        Embauchez-moi
      </RainbowButton>
       <RainbowButton   onClick={handleOpenCv} className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition dark:bg-white dark:text-black">
        CV
      </RainbowButton>

      <a
        href="https://www.linkedin.com/in/ibrahima-diallo-9178ba263/"
        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition flex justify-center items-center"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} className="text-blue-600" />
      </a>

      <a
        href="https://github.com/ibrahima604/" 
        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition flex justify-center items-center"
        aria-label="GitHub"
      >
        <Github size={20} className="text-gray-900 dark:text-white" />
      </a>
    </div>
  </div>

  {/* Section droite : Photo */}
  <div className="flex justify-center md:justify-end w-full md:w-1/3">
 <img
  src={ibrahimPhoto}
  alt="Ma photo"
  className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover object-top shadow-lg"
/>


  </div>
</div>


      {/* Cartes centrées : sur mobile 1 colonne, tablette 2 ou 3 colonnes */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-full w-full mx-auto">
        {/* Carte Services */}
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition transform">
          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Services</h3>
          <AnimatedList className="space-y-6">
            {[{
              icon: FaLaptopCode,
              color: "text-blue-600",
              title: "Création",
              description: "Développement de sites web modernes et d'applications performantes adaptées à vos besoins."
            },{
              icon: FaTools,
              color: "text-green-600",
              title: "Entretien",
              description: "Suivi, mise à jour et optimisation continue de vos projets pour garantir leur performance."
            },{
              icon: FaRocket,
              color: "text-red-600",
              title: "Déploiement",
              description: "Déploiement de vos applications sur des serveurs fiables pour une disponibilité constante."
            },{
              icon: FaChalkboardTeacher,
              color: "text-purple-700",
              title: "Formation",
              description: "Je propose des formations en développement web pour vous permettre de maîtriser les compétences nécessaires à la création d'applications modernes."
            }].map(({icon: Icon, color, title, description}, i) => (
              <p key={i} className="flex flex-col items-center text-center gap-2">
                <Icon className={color} size={32} />
                <span>
                  <strong>{title}</strong><br />
                  {description}
                </span>
              </p>
            ))}
          </AnimatedList>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Développer des sites Web réactifs, des applications modernes et des solutions personnalisées.
          </p>
        </div>

        {/* Carte Conversion */}
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition transform">
          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Conversion</h3>
          <AnimatedList className="space-y-6">
            {[{
              icon: FaFileImage,
              color: "text-blue-600",
              title: "Images",
              description: "Conversion d'images en différents formats pour une utilisation optimale."
            },{
              icon: FaFileCode,
              color: "text-green-600",
              title: "Code",
              description: "Conversion de code entre différents langages pour faciliter la migration et l'intégration."
            }].map(({icon: Icon, color, title, description}, i) => (
              <p key={i} className="flex flex-col items-center text-center gap-2">
                <Icon className={color} size={32} />
                <span>
                  <strong>{title}</strong><br />
                  {description}
                </span>
              </p>
            ))}
          </AnimatedList>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Convertir des images et du code entre différents formats pour une meilleure compatibilité.
          </p>
        </div>

        {/* Carte Code propre */}
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition transform">
          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Code propre</h3>
          <MarqueeDemoHorizontal />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Rédaction de code maintenable, efficace et évolutif en suivant les meilleures pratiques.
          </p>
        </div>
      </div>
    </section>
  );
}
