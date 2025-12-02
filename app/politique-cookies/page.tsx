import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies | ADVANTAGE",
  description: "Politique de cookies et traceurs - ADVANTAGE, agence marketing digital au Luxembourg.",
};

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Politique de cookies
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Dernière mise à jour : Décembre 2025
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p className="text-muted-foreground">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
                smartphone) lors de votre visite sur notre site. Les cookies permettent de reconnaître
                votre navigateur et de mémoriser certaines informations pour améliorer votre expérience
                de navigation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Types de cookies utilisés</h2>

              <h3 className="text-lg font-medium mt-6 mb-3">Cookies strictement nécessaires</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                Ils sont généralement configurés en réponse à des actions de votre part (préférences de
                confidentialité, connexion, formulaires).
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">Cookies analytiques</h3>
              <p className="text-muted-foreground mb-4">
                Ces cookies nous permettent de mesurer l&apos;audience de notre site et d&apos;analyser
                le comportement des visiteurs afin d&apos;améliorer nos services.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Google Analytics</strong><br />
                  Finalité : Analyse de trafic et statistiques<br />
                  Durée : 13 mois maximum
                </p>
              </div>

              <h3 className="text-lg font-medium mt-6 mb-3">Cookies de préférences</h3>
              <p className="text-muted-foreground">
                Ces cookies permettent de mémoriser vos préférences (langue, thème sombre/clair)
                pour personnaliser votre expérience sur notre site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Tableau récapitulatif des cookies</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold">Nom</th>
                      <th className="text-left py-3 px-4 font-semibold">Finalité</th>
                      <th className="text-left py-3 px-4 font-semibold">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-3 px-4">theme</td>
                      <td className="py-3 px-4">Préférence thème clair/sombre</td>
                      <td className="py-3 px-4">1 an</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">_ga</td>
                      <td className="py-3 px-4">Google Analytics - Identification visiteur</td>
                      <td className="py-3 px-4">13 mois</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">_gid</td>
                      <td className="py-3 px-4">Google Analytics - Identification session</td>
                      <td className="py-3 px-4">24 heures</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">cookie_consent</td>
                      <td className="py-3 px-4">Mémorisation de vos choix cookies</td>
                      <td className="py-3 px-4">1 an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Gestion des cookies</h2>
              <p className="text-muted-foreground mb-4">
                Vous pouvez à tout moment modifier vos préférences en matière de cookies :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  <strong>Via votre navigateur :</strong> Vous pouvez configurer votre navigateur
                  pour refuser tous les cookies ou être alerté lorsqu&apos;un cookie est envoyé.
                </li>
                <li>
                  <strong>Via notre bandeau cookies :</strong> Lors de votre première visite,
                  vous pouvez accepter ou refuser les cookies non essentiels.
                </li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-3">Configuration par navigateur</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Conséquences du refus des cookies</h2>
              <p className="text-muted-foreground">
                Si vous refusez les cookies ou si vous les supprimez, certaines fonctionnalités
                du site pourraient ne pas fonctionner correctement. Vos préférences de navigation
                (thème, langue) ne seront pas mémorisées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Contact</h2>
              <p className="text-muted-foreground">
                Pour toute question concernant notre utilisation des cookies, vous pouvez nous
                contacter à l&apos;adresse : take@advantage.lu
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
