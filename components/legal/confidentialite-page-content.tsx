import Link from "next/link"
import { LegalPageShell, LegalSection } from "@/components/legal/legal-page-shell"

const CONTACT_EMAIL = "ripusousse@gmail.com"

export function ConfidentialitePageContent() {
  return (
    <LegalPageShell
      eyebrow="Confidentialité"
      title="Politique de confidentialité"
      description="Cette politique décrit comment RIPU26 collecte, utilise et protège vos données personnelles dans le cadre du site web et de l'espace auteur."
      updatedAt="24 juin 2026"
    >
      <LegalSection title="1. Responsable du traitement">
        <p>
          Le comité d&apos;organisation de la Rencontre Internationale de la Pédagogie Universitaire
          (RIPU26) est responsable du traitement des données collectées via le site{" "}
          <strong className="text-[var(--black)]">ripusousse.com</strong> et l&apos;espace de
          soumission en ligne.
        </p>
        <p>
          Contact :{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[var(--brand)] hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="2. Données collectées">
        <p>Nous pouvons collecter les catégories de données suivantes :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Identité et coordonnées (nom, prénom, e-mail, téléphone, affiliation)</li>
          <li>Données de compte (identifiant, mot de passe chiffré, connexion Google le cas échéant)</li>
          <li>Données de soumission (titre, abstract, auteurs, thématiques, document PDF)</li>
          <li>Données techniques (logs, adresse IP, type de navigateur) à des fins de sécurité</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Finalités du traitement">
        <p>Vos données sont utilisées pour :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Créer et gérer votre compte auteur</li>
          <li>Recevoir, instruire et évaluer votre soumission scientifique</li>
          <li>Vous contacter au sujet de RIPU26 (confirmations, notifications, organisation)</li>
          <li>Assurer la sécurité du site et prévenir les usages frauduleux</li>
          <li>Respecter nos obligations légales</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Base légale">
        <p>
          Le traitement repose notamment sur l&apos;exécution de mesures précontractuelles et
          contractuelles (inscription, soumission), votre consentement (création de compte,
          communications) et nos intérêts légitimes (sécurité et bon fonctionnement du service).
        </p>
      </LegalSection>

      <LegalSection title="5. Hébergement et sous-traitants">
        <p>
          Certaines données sont traitées par des prestataires agissant pour notre compte, notamment :
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-[var(--black)]">Supabase</strong> — authentification et stockage
            des soumissions
          </li>
          <li>
            <strong className="text-[var(--black)]">Google</strong> — connexion OAuth (si vous
            choisissez cette option)
          </li>
          <li>
            <strong className="text-[var(--black)]">Services d&apos;e-mail</strong> — envoi de
            notifications et confirmations
          </li>
        </ul>
        <p>
          Ces prestataires n&apos;accèdent qu&apos;aux données nécessaires à leurs services et sont
          soumis à des obligations de confidentialité.
        </p>
      </LegalSection>

      <LegalSection title="6. Durée de conservation">
        <p>
          Les données de compte et de soumission sont conservées pendant la durée de l&apos;édition
          RIPU26 et le temps nécessaire au traitement scientifique et administratif, puis archivées ou
          supprimées conformément aux obligations applicables.
        </p>
      </LegalSection>

      <LegalSection title="7. Vos droits">
        <p>
          Conformément à la réglementation applicable, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de
          vos données.
        </p>
        <p>
          Pour exercer vos droits, contactez-nous à{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[var(--brand)] hover:underline">
            {CONTACT_EMAIL}
          </a>
          . Vous pouvez également introduire une réclamation auprès de l&apos;autorité de protection
          des données compétente.
        </p>
      </LegalSection>

      <LegalSection title="8. Cookies">
        <p>
          Le site peut utiliser des cookies strictement nécessaires au fonctionnement (session,
          sécurité) et, en production, des outils de mesure d&apos;audience. Vous pouvez configurer
          votre navigateur pour limiter ou refuser les cookies non essentiels.
        </p>
      </LegalSection>

      <LegalSection title="9. Modifications">
        <p>
          Cette politique peut être mise à jour. La date de dernière mise à jour est indiquée en haut
          de page. Nous vous invitons à la consulter régulièrement.
        </p>
        <p>
          Voir aussi nos{" "}
          <Link href="/conditions-utilisation" className="font-semibold text-[var(--brand)] hover:underline">
            conditions d&apos;utilisation
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
