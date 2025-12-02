import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | ADVANTAGE",
  description: "Mentions légales du site ADVANTAGE - Agence marketing digital au Luxembourg.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Mentions légales
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground mb-2">
                <strong>ADVANTAGE S.à r.l.</strong><br />
                2 Rue de Sandweiler<br />
                L-5974 Itzig<br />
                Luxembourg
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>E-mail :</strong> take@advantage.lu<br />
                <strong>Téléphone :</strong> +352 27 56 59 62
              </p>
              <p className="text-muted-foreground">
                <strong>Numéro RCS :</strong> B123456<br />
                <strong>TVA :</strong> LU12345678
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Directeur de la publication</h2>
              <p className="text-muted-foreground">
                Le directeur de la publication est le représentant légal de la société ADVANTAGE S.à r.l.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Hébergement</h2>
              <p className="text-muted-foreground">
                Ce site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.)
                est la propriété exclusive de ADVANTAGE S.à r.l. ou de ses partenaires. Toute reproduction,
                représentation, modification, publication ou adaptation de tout ou partie des éléments du
                site est interdite sans l&apos;autorisation écrite préalable de ADVANTAGE S.à r.l.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Limitation de responsabilité</h2>
              <p className="text-muted-foreground">
                ADVANTAGE S.à r.l. s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site. Toutefois, ADVANTAGE S.à r.l. ne peut garantir
                l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition
                sur ce site et décline toute responsabilité pour toute imprécision, inexactitude ou omission
                portant sur des informations disponibles sur ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Liens hypertextes</h2>
              <p className="text-muted-foreground">
                Ce site peut contenir des liens hypertextes vers d&apos;autres sites. ADVANTAGE S.à r.l.
                n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur
                contenu ou aux pratiques de confidentialité de ces sites tiers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Droit applicable</h2>
              <p className="text-muted-foreground">
                Les présentes mentions légales sont régies par le droit luxembourgeois. En cas de litige,
                les tribunaux luxembourgeois seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
