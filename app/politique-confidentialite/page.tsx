import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | ADVANTAGE",
  description: "Politique de confidentialité et protection des données personnelles - ADVANTAGE Luxembourg.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Politique de confidentialité
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : Décembre 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Responsable du traitement</h2>
              <p className="text-muted-foreground">
                ADVANTAGE S.à r.l., située au 2 Rue de Sandweiler, L-5974 Itzig, Luxembourg,
                est responsable du traitement de vos données personnelles collectées via ce site.
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Contact :</strong> take@advantage.lu
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Données collectées</h2>
              <p className="text-muted-foreground mb-4">
                Nous collectons les données suivantes :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone</li>
                <li><strong>Données professionnelles :</strong> nom de l&apos;entreprise, fonction</li>
                <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                <li><strong>Données de communication :</strong> contenu des messages envoyés via nos formulaires</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Finalités du traitement</h2>
              <p className="text-muted-foreground mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Vous fournir nos services de marketing digital</li>
                <li>Améliorer notre site et nos services</li>
                <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Base légale du traitement</h2>
              <p className="text-muted-foreground">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li><strong>Votre consentement</strong> pour les communications marketing</li>
                <li><strong>L&apos;exécution d&apos;un contrat</strong> pour la fourniture de nos services</li>
                <li><strong>Notre intérêt légitime</strong> pour l&apos;amélioration de nos services</li>
                <li><strong>Nos obligations légales</strong> pour la conservation de certaines données</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Durée de conservation</h2>
              <p className="text-muted-foreground">
                Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles
                elles ont été collectées, soit :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li>Données clients : durée de la relation commerciale + 5 ans</li>
                <li>Données prospects : 3 ans à compter du dernier contact</li>
                <li>Données de navigation : 13 mois maximum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Vos droits</h2>
              <p className="text-muted-foreground mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Pour exercer ces droits, contactez-nous à : take@advantage.lu
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Sécurité des données</h2>
              <p className="text-muted-foreground">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                protéger vos données contre tout accès non autorisé, modification, divulgation ou
                destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Transfert de données</h2>
              <p className="text-muted-foreground">
                Vos données peuvent être transférées vers des pays situés en dehors de l&apos;Union
                Européenne dans le cadre de l&apos;utilisation de certains services (hébergement,
                analytics). Ces transferts sont encadrés par des garanties appropriées conformément
                au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Contact et réclamation</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique ou vos données personnelles,
                contactez-nous à take@advantage.lu.
              </p>
              <p className="text-muted-foreground mt-4">
                Vous avez également le droit d&apos;introduire une réclamation auprès de la
                Commission Nationale pour la Protection des Données (CNPD) du Luxembourg.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
