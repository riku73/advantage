"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/ui/fade-in";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSection({
  title = "Questions fréquentes",
  subtitle,
  faqs,
  className = "",
}: FAQSectionProps) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-4 text-muted-foreground">{subtitle}</p>
            )}
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

// FAQ data for each service
export const seoFAQs: FAQItem[] = [
  {
    question: "Combien de temps faut-il pour voir des résultats SEO ?",
    answer: "Le SEO est une stratégie à moyen-long terme. Les premiers résultats sont généralement visibles après 3 à 6 mois, avec des améliorations continues sur 12 mois et au-delà. La rapidité des résultats dépend de la concurrence dans votre secteur et de l'état initial de votre site.",
  },
  {
    question: "Quelle est la différence entre SEO et SEA ?",
    answer: "Le SEO (Search Engine Optimization) concerne le référencement naturel et vise à améliorer votre positionnement organique dans les résultats de recherche. Le SEA (Search Engine Advertising) concerne la publicité payante (Google Ads). Le SEO offre des résultats durables tandis que le SEA permet des résultats immédiats mais nécessite un budget publicitaire continu.",
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles au Luxembourg ?",
    answer: "Oui, nous accompagnons des entreprises de toutes tailles, des indépendants aux PME. Notre approche s'adapte à vos objectifs et à votre budget, que vous soyez une startup ou une entreprise établie.",
  },
  {
    question: "Comment mesurez-vous le succès d'une campagne SEO ?",
    answer: "Nous suivons plusieurs indicateurs clés : positions sur les mots-clés cibles, trafic organique, taux de conversion, nombre de leads générés, et ROI. Vous recevez des rapports mensuels détaillés avec l'évolution de ces métriques.",
  },
  {
    question: "Faut-il un contrat longue durée pour le SEO ?",
    answer: "Nous recommandons un engagement minimum de 6 mois pour voir des résultats significatifs, mais nous proposons des contrats flexibles sans engagement de longue durée. Vous pouvez arrêter à tout moment avec un préavis d'un mois.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait des résultats ?",
    answer: "Nous travaillons en toute transparence avec des rapports réguliers. Si les objectifs ne sont pas atteints, nous ajustons notre stratégie. Nous ne promettons jamais de résultats garantis car le SEO dépend de nombreux facteurs, mais nous nous engageons à mettre en œuvre les meilleures pratiques.",
  },
];

export const seaFAQs: FAQItem[] = [
  {
    question: "Quel budget minimum faut-il pour Google Ads ?",
    answer: "Nous recommandons un budget publicitaire minimum de 500 EUR/mois pour des campagnes efficaces au Luxembourg. Ce budget s'ajoute à nos frais de gestion. Le budget optimal dépend de votre secteur et de vos objectifs.",
  },
  {
    question: "Combien de temps avant de voir les premiers résultats ?",
    answer: "Contrairement au SEO, les campagnes Google Ads génèrent des résultats immédiats. Dès le lancement, vos annonces sont visibles et vous pouvez recevoir des clics. L'optimisation des performances se fait ensuite sur 2-4 semaines.",
  },
  {
    question: "Gérez-vous aussi les campagnes Microsoft Ads (Bing) ?",
    answer: "Oui, nous gérons également les campagnes Microsoft Ads. Bien que Google domine le marché, Bing peut être intéressant pour certains secteurs avec une concurrence moindre et des coûts par clic plus faibles.",
  },
  {
    question: "Comment optimisez-vous le coût par clic ?",
    answer: "Nous optimisons vos campagnes en continu : sélection précise des mots-clés, ajustement des enchères, amélioration des scores de qualité, tests A/B des annonces, et ciblage géographique affiné pour maximiser votre ROI.",
  },
  {
    question: "Puis-je modifier mon budget en cours de campagne ?",
    answer: "Absolument. Votre budget est flexible et peut être ajusté à tout moment. Nous vous conseillons sur les périodes où augmenter/réduire vos investissements selon la saisonnalité de votre activité.",
  },
  {
    question: "Que comprend exactement la gestion mensuelle ?",
    answer: "La gestion mensuelle inclut : monitoring quotidien, optimisation des enchères, tests A/B, ajustement des mots-clés, rapports de performance, et un point mensuel avec recommandations stratégiques.",
  },
];

export const emailMarketingFAQs: FAQItem[] = [
  {
    question: "Quelle plateforme utilisez-vous pour l'e-mail marketing ?",
    answer: "Nous travaillons principalement avec Mailchimp, mais nous pouvons aussi utiliser Brevo (ex-Sendinblue), ActiveCampaign ou d'autres plateformes selon vos besoins et votre CRM existant.",
  },
  {
    question: "Comment éviter que mes e-mails arrivent en spam ?",
    answer: "Nous configurons correctement les enregistrements SPF, DKIM et DMARC, utilisons des pratiques d'envoi conformes, maintenons une liste propre, et optimisons le contenu pour éviter les filtres anti-spam.",
  },
  {
    question: "Quel taux d'ouverture puis-je espérer ?",
    answer: "Les taux d'ouverture varient selon le secteur (15-25% en moyenne). Avec une stratégie de segmentation et de personnalisation, nous visons des taux supérieurs à la moyenne de votre industrie.",
  },
  {
    question: "Puis-je importer ma liste de contacts existante ?",
    answer: "Oui, à condition que vos contacts aient donné leur consentement (RGPD). Nous vous aidons à nettoyer et segmenter votre base pour de meilleures performances.",
  },
  {
    question: "Proposez-vous des templates personnalisés ?",
    answer: "Oui, nous créons des templates sur-mesure alignés avec votre charte graphique. Ces templates sont responsive et optimisés pour tous les clients e-mail.",
  },
  {
    question: "Comment respectez-vous le RGPD ?",
    answer: "Toutes nos campagnes sont conformes au RGPD : consentement explicite, lien de désinscription obligatoire, traitement sécurisé des données, et documentation des consentements.",
  },
];

export const sitesWebFAQs: FAQItem[] = [
  {
    question: "Combien coûte un site web professionnel ?",
    answer: "Nos sites vitrine démarrent à partir de 590 EUR pour une page unique, 1 490 EUR pour un site standard de 5 pages, et 2 490 EUR pour un site e-commerce. Le prix final dépend de vos besoins spécifiques.",
  },
  {
    question: "Combien de temps prend la création d'un site ?",
    answer: "Un site vitrine simple prend 2-3 semaines, un site standard 4-6 semaines, et un e-commerce 6-10 semaines. Ces délais incluent la validation de votre part à chaque étape.",
  },
  {
    question: "Puis-je modifier mon site moi-même après la livraison ?",
    answer: "Oui, nous utilisons WordPress ou des CMS modernes qui permettent de modifier facilement le contenu. Nous incluons une formation complète à la gestion de votre site.",
  },
  {
    question: "Proposez-vous l'hébergement et la maintenance ?",
    answer: "Oui, nous proposons des forfaits d'hébergement et maintenance à partir de 29 EUR/mois incluant : hébergement sécurisé, sauvegardes, mises à jour, et support technique.",
  },
  {
    question: "Mon site sera-t-il optimisé pour mobile ?",
    answer: "Absolument. Tous nos sites sont responsive et optimisés pour mobile. Avec plus de 60% du trafic web sur mobile, c'est une priorité absolue.",
  },
  {
    question: "Incluez-vous le référencement de base ?",
    answer: "Oui, chaque site inclut une optimisation SEO de base : structure technique correcte, balises meta, vitesse de chargement optimisée, et intégration Google Analytics.",
  },
];

export const landingPagesFAQs: FAQItem[] = [
  {
    question: "Quelle est la différence entre une landing page et un site web ?",
    answer: "Une landing page est une page unique conçue pour convertir les visiteurs en leads ou clients, avec un objectif précis et un appel à l'action clair. Un site web est plus complet avec plusieurs pages et objectifs.",
  },
  {
    question: "Combien de temps pour créer une landing page ?",
    answer: "Une landing page peut être livrée en 1-2 semaines selon la complexité. Cela inclut le design, le copywriting et l'intégration des formulaires.",
  },
  {
    question: "Proposez-vous des tests A/B ?",
    answer: "Oui, nous pouvons créer plusieurs versions de votre landing page pour tester différents éléments (titres, images, CTA) et optimiser les conversions.",
  },
  {
    question: "Puis-je avoir plusieurs landing pages pour une même campagne ?",
    answer: "Oui, c'est même recommandé. Avoir des landing pages spécifiques pour chaque audience ou mot-clé améliore significativement les taux de conversion.",
  },
  {
    question: "Intégrez-vous les formulaires avec mon CRM ?",
    answer: "Oui, nous intégrons vos formulaires avec la plupart des CRM (HubSpot, Salesforce, Pipedrive, etc.) et outils marketing (Mailchimp, ActiveCampaign, etc.).",
  },
];

export const logoBrandingFAQs: FAQItem[] = [
  {
    question: "Combien de propositions de logo recevrai-je ?",
    answer: "Vous recevez 3 propositions initiales de concepts différents. Après votre choix, nous affinons la direction sélectionnée avec des variations.",
  },
  {
    question: "Quels fichiers recevrai-je à la livraison ?",
    answer: "Vous recevez tous les formats nécessaires : AI (source), SVG, PNG (transparent), JPG, PDF, ainsi que des versions pour le web et l'impression en différentes tailles.",
  },
  {
    question: "Puis-je demander des modifications illimitées ?",
    answer: "Notre forfait inclut 3 tours de révisions. Des modifications supplémentaires sont possibles moyennant un supplément. Nous travaillons avec vous jusqu'à votre satisfaction.",
  },
  {
    question: "Incluez-vous un guide de style ?",
    answer: "Oui, le forfait branding complet inclut un guide de style définissant l'utilisation du logo, la palette de couleurs, la typographie et les règles graphiques.",
  },
  {
    question: "Combien de temps prend la création d'un logo ?",
    answer: "Comptez 2-3 semaines pour un logo, et 4-6 semaines pour une identité de marque complète incluant le guide de style.",
  },
];

export const socialMediaAdsFAQs: FAQItem[] = [
  {
    question: "Sur quelles plateformes gérez-vous les publicités ?",
    answer: "Nous gérons les publicités sur Meta (Facebook et Instagram), LinkedIn, TikTok et Pinterest selon votre cible et vos objectifs.",
  },
  {
    question: "Quel budget minimum pour les réseaux sociaux ?",
    answer: "Nous recommandons un minimum de 300 EUR/mois de budget publicitaire par plateforme pour des résultats significatifs au Luxembourg.",
  },
  {
    question: "Créez-vous les visuels publicitaires ?",
    answer: "Oui, la création des visuels et vidéos courtes est incluse dans nos forfaits. Nous produisons du contenu optimisé pour chaque plateforme.",
  },
  {
    question: "Comment ciblez-vous mon audience ?",
    answer: "Nous utilisons le ciblage démographique, géographique, par intérêts, comportements, et audiences similaires. Nous affinons le ciblage en continu selon les performances.",
  },
  {
    question: "Puis-je voir les statistiques en temps réel ?",
    answer: "Oui, nous pouvons vous donner accès aux tableaux de bord en temps réel, ou vous envoyer des rapports à la fréquence souhaitée.",
  },
  {
    question: "Quelle fréquence de reporting ?",
    answer: "Nous fournissons des rapports mensuels détaillés avec analyse des performances et recommandations. Des rapports hebdomadaires sont disponibles en option.",
  },
];

export const videoProductionFAQs: FAQItem[] = [
  {
    question: "Quel type de vidéos produisez-vous ?",
    answer: "Nous produisons des vidéos promotionnelles courtes (reels, stories), des vidéos corporate, des témoignages clients, des présentations produits et des vidéos événementielles.",
  },
  {
    question: "Combien de révisions sont incluses ?",
    answer: "Nos forfaits incluent 3 révisions pour les vidéos courtes et des révisions illimitées pour les vidéos corporate. Nous travaillons jusqu'à votre validation finale.",
  },
  {
    question: "Filmez-vous sur site au Luxembourg ?",
    answer: "Oui, nous nous déplaçons dans tout le Luxembourg et la Grande Région pour les tournages. Les frais de déplacement sont inclus dans nos devis.",
  },
  {
    question: "Puis-je utiliser ma propre musique ?",
    answer: "Oui, si vous avez les droits. Sinon, nous utilisons des bibliothèques de musiques libres de droits incluses dans nos forfaits.",
  },
  {
    question: "Dans quels formats livrez-vous les vidéos ?",
    answer: "Nous livrons les vidéos dans tous les formats nécessaires : MP4 HD/4K, formats optimisés pour chaque réseau social (carré, vertical, horizontal), et fichiers source sur demande.",
  },
];

export const photographyFAQs: FAQItem[] = [
  {
    question: "Quelle durée pour une session photo corporate ?",
    answer: "Une session standard dure 2-3 heures, suffisant pour des portraits individuels et de groupe, plus des photos d'ambiance. Des sessions plus longues sont disponibles pour des besoins spécifiques.",
  },
  {
    question: "Combien de photos retouchées recevrai-je ?",
    answer: "Une session standard inclut 20-30 photos retouchées. Le nombre exact dépend de la durée de la session et de vos besoins.",
  },
  {
    question: "Puis-je utiliser les photos pour tous mes supports ?",
    answer: "Oui, vous recevez les droits d'utilisation complets pour tous vos supports marketing : site web, réseaux sociaux, print, présentations, etc.",
  },
  {
    question: "Faites-vous des photos d'événements ?",
    answer: "Oui, nous couvrons les événements professionnels : conférences, inaugurations, soirées d'entreprise, team buildings, etc.",
  },
  {
    question: "Proposez-vous des portraits d'équipe ?",
    answer: "Oui, c'est l'une de nos spécialités. Nous réalisons des portraits individuels cohérents pour toute votre équipe, ainsi que des photos de groupe.",
  },
];

export const printDesignFAQs: FAQItem[] = [
  {
    question: "Quels types de supports imprimez-vous ?",
    answer: "Nous designons tous types de supports : cartes de visite, flyers, brochures, affiches, roll-ups, packaging, et bien plus encore.",
  },
  {
    question: "Gérez-vous aussi l'impression ?",
    answer: "Oui, nous coordonnons l'impression avec nos partenaires locaux de confiance pour garantir la qualité et des tarifs compétitifs.",
  },
  {
    question: "Combien de révisions sont incluses ?",
    answer: "Nos forfaits incluent 2-3 tours de révisions selon le type de support. Nous travaillons jusqu'à votre satisfaction.",
  },
  {
    question: "Dans quels formats livrez-vous les fichiers ?",
    answer: "Vous recevez les fichiers print-ready (PDF haute résolution, CMYK) ainsi que les fichiers sources éditables (AI, INDD) sur demande.",
  },
  {
    question: "Respectez-vous notre charte graphique existante ?",
    answer: "Absolument. Nous travaillons en cohérence avec votre identité visuelle existante, ou pouvons vous aider à la créer si nécessaire.",
  },
];

export const digitalStrategyFAQs: FAQItem[] = [
  {
    question: "Qu'est-ce qu'une session de consulting digital ?",
    answer: "C'est une session d'1 heure où nous analysons votre présence digitale actuelle et définissons ensemble une stratégie adaptée à vos objectifs et budget.",
  },
  {
    question: "Que reçois-je après la session ?",
    answer: "Vous recevez une roadmap personnalisée avec des recommandations concrètes, priorisées et actionnables, plus 7 jours de support par e-mail.",
  },
  {
    question: "Pouvez-vous ensuite m'aider à exécuter la stratégie ?",
    answer: "Oui, nous pouvons vous accompagner dans la mise en œuvre avec nos différents services ou vous orienter vers les bonnes ressources.",
  },
  {
    question: "La session peut-elle se faire en visio ?",
    answer: "Oui, nous proposons des sessions en présentiel à Luxembourg ou en visioconférence selon votre préférence.",
  },
  {
    question: "Pour quel type d'entreprise est-ce adapté ?",
    answer: "Le consulting est particulièrement utile pour les entreprises qui débutent leur transformation digitale ou souhaitent optimiser leur stratégie existante.",
  },
];

export const projectManagementFAQs: FAQItem[] = [
  {
    question: "Que comprend la gestion de projet externalisée ?",
    answer: "Nous prenons en charge la coordination complète de votre projet : planification, gestion des prestataires, suivi des délais, contrôle qualité et reporting régulier.",
  },
  {
    question: "Pour quels types de projets est-ce adapté ?",
    answer: "Idéal pour les lancements de site, campagnes marketing multi-canaux, rebranding, événements digitaux, ou tout projet nécessitant la coordination de plusieurs prestataires.",
  },
  {
    question: "Comment se passe la communication ?",
    answer: "Vous avez un point de contact unique. Nous organisons des points réguliers (hebdomadaires ou bi-hebdomadaires) et vous tenons informé en continu via l'outil de votre choix.",
  },
  {
    question: "Travaillez-vous avec mes prestataires existants ?",
    answer: "Oui, nous pouvons coordonner vos prestataires actuels ou vous recommander des partenaires de confiance selon les besoins du projet.",
  },
  {
    question: "Quelle est la durée typique d'un accompagnement ?",
    answer: "Cela dépend du projet. Un lancement de site prend typiquement 2-3 mois, une campagne marketing 1-3 mois. Nous définissons ensemble la durée lors du cadrage.",
  },
];

export const emailDeliverabilityFAQs: FAQItem[] = [
  {
    question: "Pourquoi mes e-mails arrivent-ils en spam ?",
    answer: "Plusieurs facteurs peuvent causer cela : configuration DNS incorrecte (SPF/DKIM/DMARC), réputation de l'expéditeur, contenu suspect, ou liste de contacts de mauvaise qualité.",
  },
  {
    question: "Que comprend l'audit de délivrabilité ?",
    answer: "Nous analysons votre configuration technique, la réputation de votre domaine, vos pratiques d'envoi, et la qualité de vos listes. Vous recevez un rapport détaillé avec recommandations.",
  },
  {
    question: "Combien de temps pour voir une amélioration ?",
    answer: "Les corrections techniques ont un effet immédiat. L'amélioration de la réputation peut prendre 2-4 semaines selon la gravité des problèmes identifiés.",
  },
  {
    question: "Proposez-vous un suivi après l'intervention ?",
    answer: "Oui, nous incluons un suivi de 30 jours pour vérifier que les améliorations sont effectives et ajuster si nécessaire.",
  },
  {
    question: "Travaillez-vous avec toutes les plateformes d'envoi ?",
    answer: "Oui, nous intervenons quelle que soit votre plateforme : Mailchimp, Brevo, SendGrid, Amazon SES, serveur dédié, etc.",
  },
];

export const socialContentFAQs: FAQItem[] = [
  {
    question: "Combien de posts par mois sont inclus ?",
    answer: "Notre forfait standard inclut 8-10 posts par mois. Des forfaits plus fréquents (15-20 posts) sont disponibles selon vos besoins.",
  },
  {
    question: "Créez-vous les visuels et les textes ?",
    answer: "Oui, nous créons l'ensemble : visuels personnalisés, rédaction des captions, recherche de hashtags et planning éditorial complet.",
  },
  {
    question: "Sur quelles plateformes publiez-vous ?",
    answer: "Nous gérons Facebook, Instagram, LinkedIn et TikTok. Le forfait de base inclut 2 plateformes, extensible selon vos besoins.",
  },
  {
    question: "Dois-je valider les contenus avant publication ?",
    answer: "Oui, vous recevez le planning et les contenus en avance pour validation. Nous intégrons vos retours avant publication.",
  },
  {
    question: "Gérez-vous aussi les réponses aux commentaires ?",
    answer: "Le community management (réponses, interactions) peut être ajouté en option à votre forfait de création de contenu.",
  },
];

export const printCoordinationFAQs: FAQItem[] = [
  {
    question: "Comment fonctionne la coordination d'impression ?",
    answer: "Nous sélectionnons l'imprimeur adapté à votre projet, négocions les tarifs, suivons la production et contrôlons la qualité avant livraison.",
  },
  {
    question: "Avec quels imprimeurs travaillez-vous ?",
    answer: "Nous avons des partenaires de confiance au Luxembourg et en Grande Région, sélectionnés selon le type de support et le volume.",
  },
  {
    question: "Les tarifs d'impression sont-ils transparents ?",
    answer: "Oui, nous vous transmettons les devis de nos partenaires avec notre marge de coordination clairement indiquée.",
  },
  {
    question: "Gérez-vous les gros volumes ?",
    answer: "Oui, nous avons l'habitude de gérer des volumes importants : catalogues, magazines, mailings de masse, etc.",
  },
  {
    question: "Quel est le délai de livraison moyen ?",
    answer: "Les délais varient selon le support : 3-5 jours pour des cartes de visite, 1-2 semaines pour des brochures, jusqu'à 3-4 semaines pour des projets complexes.",
  },
];
