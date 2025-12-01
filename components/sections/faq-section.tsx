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
  title = "Questions frequentes",
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
    question: "Combien de temps faut-il pour voir des resultats SEO ?",
    answer: "Le SEO est une strategie a moyen-long terme. Les premiers resultats sont generalement visibles apres 3 a 6 mois, avec des ameliorations continues sur 12 mois et au-dela. La rapidite des resultats depend de la concurrence dans votre secteur et de l'etat initial de votre site.",
  },
  {
    question: "Quelle est la difference entre SEO et SEA ?",
    answer: "Le SEO (Search Engine Optimization) concerne le referencement naturel et vise a ameliorer votre positionnement organique dans les resultats de recherche. Le SEA (Search Engine Advertising) concerne la publicite payante (Google Ads). Le SEO offre des resultats durables tandis que le SEA permet des resultats immediats mais necessite un budget publicitaire continu.",
  },
  {
    question: "Travaillez-vous avec des entreprises de toutes tailles au Luxembourg ?",
    answer: "Oui, nous accompagnons des entreprises de toutes tailles, des independants aux PME. Notre approche s'adapte a vos objectifs et a votre budget, que vous soyez une startup ou une entreprise etablie.",
  },
  {
    question: "Comment mesurez-vous le succes d'une campagne SEO ?",
    answer: "Nous suivons plusieurs indicateurs cles : positions sur les mots-cles cibles, trafic organique, taux de conversion, nombre de leads generes, et ROI. Vous recevez des rapports mensuels detailles avec l'evolution de ces metriques.",
  },
  {
    question: "Faut-il un contrat longue duree pour le SEO ?",
    answer: "Nous recommandons un engagement minimum de 6 mois pour voir des resultats significatifs, mais nous proposons des contrats flexibles sans engagement de longue duree. Vous pouvez arreter a tout moment avec un preavis d'un mois.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait des resultats ?",
    answer: "Nous travaillons en toute transparence avec des rapports reguliers. Si les objectifs ne sont pas atteints, nous ajustons notre strategie. Nous ne promettons jamais de resultats garantis car le SEO depend de nombreux facteurs, mais nous nous engageons a mettre en oeuvre les meilleures pratiques.",
  },
];

export const seaFAQs: FAQItem[] = [
  {
    question: "Quel budget minimum faut-il pour Google Ads ?",
    answer: "Nous recommandons un budget publicitaire minimum de 500 EUR/mois pour des campagnes efficaces au Luxembourg. Ce budget s'ajoute a nos frais de gestion. Le budget optimal depend de votre secteur et de vos objectifs.",
  },
  {
    question: "Combien de temps avant de voir les premiers resultats ?",
    answer: "Contrairement au SEO, les campagnes Google Ads generent des resultats immediats. Des le lancement, vos annonces sont visibles et vous pouvez recevoir des clics. L'optimisation des performances se fait ensuite sur 2-4 semaines.",
  },
  {
    question: "Gerez-vous aussi les campagnes Microsoft Ads (Bing) ?",
    answer: "Oui, nous gerons egalement les campagnes Microsoft Ads. Bien que Google domine le marche, Bing peut etre interessant pour certains secteurs avec une concurrence moindre et des couts par clic plus faibles.",
  },
  {
    question: "Comment optimisez-vous le cout par clic ?",
    answer: "Nous optimisons vos campagnes en continu : selection precise des mots-cles, ajustement des encheres, amelioration des scores de qualite, tests A/B des annonces, et ciblage geographique affine pour maximiser votre ROI.",
  },
  {
    question: "Puis-je modifier mon budget en cours de campagne ?",
    answer: "Absolument. Votre budget est flexible et peut etre ajuste a tout moment. Nous vous conseillons sur les periodes ou augmenter/reduire vos investissements selon la saisonnalite de votre activite.",
  },
  {
    question: "Que comprend exactement la gestion mensuelle ?",
    answer: "La gestion mensuelle inclut : monitoring quotidien, optimisation des encheres, tests A/B, ajustement des mots-cles, rapports de performance, et un point mensuel avec recommandations strategiques.",
  },
];

export const emailMarketingFAQs: FAQItem[] = [
  {
    question: "Quelle plateforme utilisez-vous pour l'e-mail marketing ?",
    answer: "Nous travaillons principalement avec Mailchimp, mais nous pouvons aussi utiliser Brevo (ex-Sendinblue), ActiveCampaign ou d'autres plateformes selon vos besoins et votre CRM existant.",
  },
  {
    question: "Comment eviter que mes e-mails arrivent en spam ?",
    answer: "Nous configurons correctement les enregistrements SPF, DKIM et DMARC, utilisons des pratiques d'envoi conformes, maintenons une liste propre, et optimisons le contenu pour eviter les filtres anti-spam.",
  },
  {
    question: "Quel taux d'ouverture puis-je esperer ?",
    answer: "Les taux d'ouverture varient selon le secteur (15-25% en moyenne). Avec une strategie de segmentation et de personnalisation, nous visons des taux superieurs a la moyenne de votre industrie.",
  },
  {
    question: "Puis-je importer ma liste de contacts existante ?",
    answer: "Oui, a condition que vos contacts aient donne leur consentement (RGPD). Nous vous aidons a nettoyer et segmenter votre base pour de meilleures performances.",
  },
  {
    question: "Proposez-vous des templates personnalises ?",
    answer: "Oui, nous creons des templates sur-mesure alignes avec votre charte graphique. Ces templates sont responsive et optimises pour tous les clients e-mail.",
  },
  {
    question: "Comment respectez-vous le RGPD ?",
    answer: "Toutes nos campagnes sont conformes au RGPD : consentement explicite, lien de desinscription obligatoire, traitement securise des donnees, et documentation des consentements.",
  },
];

export const sitesWebFAQs: FAQItem[] = [
  {
    question: "Combien coute un site web professionnel ?",
    answer: "Nos sites vitrine demarrent a partir de 590 EUR pour une page unique, 1 490 EUR pour un site standard de 5 pages, et 2 490 EUR pour un site e-commerce. Le prix final depend de vos besoins specifiques.",
  },
  {
    question: "Combien de temps prend la creation d'un site ?",
    answer: "Un site vitrine simple prend 2-3 semaines, un site standard 4-6 semaines, et un e-commerce 6-10 semaines. Ces delais incluent la validation de votre part a chaque etape.",
  },
  {
    question: "Puis-je modifier mon site moi-meme apres la livraison ?",
    answer: "Oui, nous utilisons WordPress ou des CMS modernes qui permettent de modifier facilement le contenu. Nous incluons une formation complete a la gestion de votre site.",
  },
  {
    question: "Proposez-vous l'hebergement et la maintenance ?",
    answer: "Oui, nous proposons des forfaits d'hebergement et maintenance a partir de 29 EUR/mois incluant : hebergement securise, sauvegardes, mises a jour, et support technique.",
  },
  {
    question: "Mon site sera-t-il optimise pour mobile ?",
    answer: "Absolument. Tous nos sites sont responsive et optimises pour mobile. Avec plus de 60% du trafic web sur mobile, c'est une priorite absolue.",
  },
  {
    question: "Incluez-vous le referencement de base ?",
    answer: "Oui, chaque site inclut une optimisation SEO de base : structure technique correcte, balises meta, vitesse de chargement optimisee, et integration Google Analytics.",
  },
];

export const landingPagesFAQs: FAQItem[] = [
  {
    question: "Quelle est la difference entre une landing page et un site web ?",
    answer: "Une landing page est une page unique concue pour convertir les visiteurs en leads ou clients, avec un objectif precis et un appel a l'action clair. Un site web est plus complet avec plusieurs pages et objectifs.",
  },
  {
    question: "Combien de temps pour creer une landing page ?",
    answer: "Une landing page peut etre livree en 1-2 semaines selon la complexite. Cela inclut le design, le copywriting et l'integration des formulaires.",
  },
  {
    question: "Proposez-vous des tests A/B ?",
    answer: "Oui, nous pouvons creer plusieurs versions de votre landing page pour tester differents elements (titres, images, CTA) et optimiser les conversions.",
  },
  {
    question: "Puis-je avoir plusieurs landing pages pour une meme campagne ?",
    answer: "Oui, c'est meme recommande. Avoir des landing pages specifiques pour chaque audience ou mot-cle ameliore significativement les taux de conversion.",
  },
  {
    question: "Integrez-vous les formulaires avec mon CRM ?",
    answer: "Oui, nous integrons vos formulaires avec la plupart des CRM (HubSpot, Salesforce, Pipedrive, etc.) et outils marketing (Mailchimp, ActiveCampaign, etc.).",
  },
];

export const logoBrandingFAQs: FAQItem[] = [
  {
    question: "Combien de propositions de logo recevrai-je ?",
    answer: "Vous recevez 3 propositions initiales de concepts differents. Apres votre choix, nous affinons la direction selectionnee avec des variations.",
  },
  {
    question: "Quels fichiers recevrai-je a la livraison ?",
    answer: "Vous recevez tous les formats necessaires : AI (source), SVG, PNG (transparent), JPG, PDF, ainsi que des versions pour le web et l'impression en differentes tailles.",
  },
  {
    question: "Puis-je demander des modifications illimitees ?",
    answer: "Notre forfait inclut 3 tours de revisions. Des modifications supplementaires sont possibles moyennant un supplement. Nous travaillons avec vous jusqu'a votre satisfaction.",
  },
  {
    question: "Incluez-vous un guide de style ?",
    answer: "Oui, le forfait branding complet inclut un guide de style definissant l'utilisation du logo, la palette de couleurs, la typographie et les regles graphiques.",
  },
  {
    question: "Combien de temps prend la creation d'un logo ?",
    answer: "Comptez 2-3 semaines pour un logo, et 4-6 semaines pour une identite de marque complete incluant le guide de style.",
  },
];

export const socialMediaAdsFAQs: FAQItem[] = [
  {
    question: "Sur quelles plateformes gerez-vous les publicites ?",
    answer: "Nous gerons les publicites sur Meta (Facebook et Instagram), LinkedIn, TikTok et Pinterest selon votre cible et vos objectifs.",
  },
  {
    question: "Quel budget minimum pour les reseaux sociaux ?",
    answer: "Nous recommandons un minimum de 300 EUR/mois de budget publicitaire par plateforme pour des resultats significatifs au Luxembourg.",
  },
  {
    question: "Creez-vous les visuels publicitaires ?",
    answer: "Oui, la creation des visuels et videos courtes est incluse dans nos forfaits. Nous produisons du contenu optimise pour chaque plateforme.",
  },
  {
    question: "Comment ciblez-vous mon audience ?",
    answer: "Nous utilisons le ciblage demographique, geographique, par interets, comportements, et audiences similaires. Nous affinons le ciblage en continu selon les performances.",
  },
  {
    question: "Puis-je voir les statistiques en temps reel ?",
    answer: "Oui, nous pouvons vous donner acces aux tableaux de bord en temps reel, ou vous envoyer des rapports a la frequence souhaitee.",
  },
  {
    question: "Quelle frequence de reporting ?",
    answer: "Nous fournissons des rapports mensuels detailles avec analyse des performances et recommandations. Des rapports hebdomadaires sont disponibles en option.",
  },
];

export const videoProductionFAQs: FAQItem[] = [
  {
    question: "Quel type de videos produisez-vous ?",
    answer: "Nous produisons des videos promotionnelles courtes (reels, stories), des videos corporate, des temoignages clients, des presentations produits et des videos evenementielles.",
  },
  {
    question: "Combien de revisions sont incluses ?",
    answer: "Nos forfaits incluent 3 revisions pour les videos courtes et des revisions illimitees pour les videos corporate. Nous travaillons jusqu'a votre validation finale.",
  },
  {
    question: "Filmez-vous sur site au Luxembourg ?",
    answer: "Oui, nous nous deplacons dans tout le Luxembourg et la Grande Region pour les tournages. Les frais de deplacement sont inclus dans nos devis.",
  },
  {
    question: "Puis-je utiliser ma propre musique ?",
    answer: "Oui, si vous avez les droits. Sinon, nous utilisons des bibliotheques de musiques libres de droits incluses dans nos forfaits.",
  },
  {
    question: "Dans quels formats livrez-vous les videos ?",
    answer: "Nous livrons les videos dans tous les formats necessaires : MP4 HD/4K, formats optimises pour chaque reseau social (carre, vertical, horizontal), et fichiers source sur demande.",
  },
];

export const photographyFAQs: FAQItem[] = [
  {
    question: "Quelle duree pour une session photo corporate ?",
    answer: "Une session standard dure 2-3 heures, suffisant pour des portraits individuels et de groupe, plus des photos d'ambiance. Des sessions plus longues sont disponibles pour des besoins specifiques.",
  },
  {
    question: "Combien de photos retouchees recevrai-je ?",
    answer: "Une session standard inclut 20-30 photos retouchees. Le nombre exact depend de la duree de la session et de vos besoins.",
  },
  {
    question: "Puis-je utiliser les photos pour tous mes supports ?",
    answer: "Oui, vous recevez les droits d'utilisation complets pour tous vos supports marketing : site web, reseaux sociaux, print, presentations, etc.",
  },
  {
    question: "Faites-vous des photos d'evenements ?",
    answer: "Oui, nous couvrons les evenements professionnels : conferences, inaugurations, soirees d'entreprise, team buildings, etc.",
  },
  {
    question: "Proposez-vous des portraits d'equipe ?",
    answer: "Oui, c'est l'une de nos specialites. Nous realisons des portraits individuels coherents pour toute votre equipe, ainsi que des photos de groupe.",
  },
];

export const printDesignFAQs: FAQItem[] = [
  {
    question: "Quels types de supports imprimez-vous ?",
    answer: "Nous designons tous types de supports : cartes de visite, flyers, brochures, affiches, roll-ups, packaging, et bien plus encore.",
  },
  {
    question: "Gerez-vous aussi l'impression ?",
    answer: "Oui, nous coordonnons l'impression avec nos partenaires locaux de confiance pour garantir la qualite et des tarifs competitifs.",
  },
  {
    question: "Combien de revisions sont incluses ?",
    answer: "Nos forfaits incluent 2-3 tours de revisions selon le type de support. Nous travaillons jusqu'a votre satisfaction.",
  },
  {
    question: "Dans quels formats livrez-vous les fichiers ?",
    answer: "Vous recevez les fichiers print-ready (PDF haute resolution, CMYK) ainsi que les fichiers sources editables (AI, INDD) sur demande.",
  },
  {
    question: "Respectez-vous notre charte graphique existante ?",
    answer: "Absolument. Nous travaillons en coherence avec votre identite visuelle existante, ou pouvons vous aider a la creer si necessaire.",
  },
];

export const digitalStrategyFAQs: FAQItem[] = [
  {
    question: "Qu'est-ce qu'une session de consulting digital ?",
    answer: "C'est une session d'1 heure ou nous analysons votre presence digitale actuelle et definissons ensemble une strategie adaptee a vos objectifs et budget.",
  },
  {
    question: "Que recois-je apres la session ?",
    answer: "Vous recevez une roadmap personnalisee avec des recommandations concretes, prioritisees et actionables, plus 7 jours de support par e-mail.",
  },
  {
    question: "Pouvez-vous ensuite m'aider a executer la strategie ?",
    answer: "Oui, nous pouvons vous accompagner dans la mise en oeuvre avec nos differents services ou vous orienter vers les bonnes ressources.",
  },
  {
    question: "La session peut-elle se faire en visio ?",
    answer: "Oui, nous proposons des sessions en presentiel a Luxembourg ou en visioconference selon votre preference.",
  },
  {
    question: "Pour quel type d'entreprise est-ce adapte ?",
    answer: "Le consulting est particulierement utile pour les entreprises qui debutent leur transformation digitale ou souhaitent optimiser leur strategie existante.",
  },
];

export const projectManagementFAQs: FAQItem[] = [
  {
    question: "Que comprend la gestion de projet externalisee ?",
    answer: "Nous prenons en charge la coordination complete de votre projet : planification, gestion des prestataires, suivi des delais, controle qualite et reporting regulier.",
  },
  {
    question: "Pour quels types de projets est-ce adapte ?",
    answer: "Ideal pour les lancements de site, campagnes marketing multi-canaux, rebranding, evenements digitaux, ou tout projet necessitant la coordination de plusieurs prestataires.",
  },
  {
    question: "Comment se passe la communication ?",
    answer: "Vous avez un point de contact unique. Nous organisons des points reguliers (hebdomadaires ou bi-hebdomadaires) et vous tenons informe en continu via l'outil de votre choix.",
  },
  {
    question: "Travaillez-vous avec mes prestataires existants ?",
    answer: "Oui, nous pouvons coordonner vos prestataires actuels ou vous recommander des partenaires de confiance selon les besoins du projet.",
  },
  {
    question: "Quelle est la duree typique d'un accompagnement ?",
    answer: "Cela depend du projet. Un lancement de site prend typiquement 2-3 mois, une campagne marketing 1-3 mois. Nous definissons ensemble la duree lors du cadrage.",
  },
];

export const emailDeliverabilityFAQs: FAQItem[] = [
  {
    question: "Pourquoi mes e-mails arrivent-ils en spam ?",
    answer: "Plusieurs facteurs peuvent causer cela : configuration DNS incorrecte (SPF/DKIM/DMARC), reputation de l'expediteur, contenu suspect, ou liste de contacts de mauvaise qualite.",
  },
  {
    question: "Que comprend l'audit de delivrabilite ?",
    answer: "Nous analysons votre configuration technique, la reputation de votre domaine, vos pratiques d'envoi, et la qualite de vos listes. Vous recevez un rapport detaille avec recommandations.",
  },
  {
    question: "Combien de temps pour voir une amelioration ?",
    answer: "Les corrections techniques ont un effet immediat. L'amelioration de la reputation peut prendre 2-4 semaines selon la gravite des problemes identifies.",
  },
  {
    question: "Proposez-vous un suivi apres l'intervention ?",
    answer: "Oui, nous incluons un suivi de 30 jours pour verifier que les ameliorations sont effectives et ajuster si necessaire.",
  },
  {
    question: "Travaillez-vous avec toutes les plateformes d'envoi ?",
    answer: "Oui, nous intervenons quelle que soit votre plateforme : Mailchimp, Brevo, SendGrid, Amazon SES, serveur dedie, etc.",
  },
];

export const socialContentFAQs: FAQItem[] = [
  {
    question: "Combien de posts par mois sont inclus ?",
    answer: "Notre forfait standard inclut 8-10 posts par mois. Des forfaits plus frequents (15-20 posts) sont disponibles selon vos besoins.",
  },
  {
    question: "Creez-vous les visuels et les textes ?",
    answer: "Oui, nous creons l'ensemble : visuels personnalises, redaction des captions, recherche de hashtags et planning editorial complet.",
  },
  {
    question: "Sur quelles plateformes publiez-vous ?",
    answer: "Nous gerons Facebook, Instagram, LinkedIn et TikTok. Le forfait de base inclut 2 plateformes, extensible selon vos besoins.",
  },
  {
    question: "Dois-je valider les contenus avant publication ?",
    answer: "Oui, vous recevez le planning et les contenus en avance pour validation. Nous integrons vos retours avant publication.",
  },
  {
    question: "Gerez-vous aussi les reponses aux commentaires ?",
    answer: "Le community management (reponses, interactions) peut etre ajoute en option a votre forfait de creation de contenu.",
  },
];

export const printCoordinationFAQs: FAQItem[] = [
  {
    question: "Comment fonctionne la coordination d'impression ?",
    answer: "Nous selectionnons l'imprimeur adapte a votre projet, negocions les tarifs, suivons la production et controlons la qualite avant livraison.",
  },
  {
    question: "Avec quels imprimeurs travaillez-vous ?",
    answer: "Nous avons des partenaires de confiance au Luxembourg et en Grande Region, selectionnes selon le type de support et le volume.",
  },
  {
    question: "Les tarifs d'impression sont-ils transparents ?",
    answer: "Oui, nous vous transmettons les devis de nos partenaires avec notre marge de coordination clairement indiquee.",
  },
  {
    question: "Gerez-vous les gros volumes ?",
    answer: "Oui, nous avons l'habitude de gerer des volumes importants : catalogues, magazines, mailings de masse, etc.",
  },
  {
    question: "Quel est le delai de livraison moyen ?",
    answer: "Les delais varient selon le support : 3-5 jours pour des cartes de visite, 1-2 semaines pour des brochures, jusqu'a 3-4 semaines pour des projets complexes.",
  },
];
