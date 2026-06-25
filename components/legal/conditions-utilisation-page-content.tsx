import Link from "next/link"
import { LegalPageShell, LegalSection } from "@/components/legal/legal-page-shell"

const CONTACT_EMAIL = "ripusousse@gmail.com"

export function ConditionsUtilisationPageContent() {
  return (
    <LegalPageShell
      eyebrow="Conditions"
      title="Conditions d'utilisation"
      description="Les présentes conditions régissent l'accès au site RIPU26 et l'utilisation de l'espace auteur, y compris la soumission de communications."
      updatedAt="24 juin 2026"
    >
      <LegalSection title="1. Objet">
        <p>
          Les présentes conditions d&apos;utilisation (ci-après « Conditions ») encadrent
          l&apos;utilisation du site web de la Rencontre Internationale de la Pédagogie Universitaire
          2026 (RIPU26) et de l&apos;espace auteur en ligne, accessible après création de compte.
        </p>
      </LegalSection>

      <LegalSection title="2. Accès au service">
        <p>
          L&apos;accès à certaines fonctionnalités (soumission de communication) nécessite la création
          d&apos;un compte. Vous vous engagez à fournir des informations exactes, complètes et à
          jour.
        </p>
        <p>
          Chaque compte est personnel. Vous êtes responsable de la confidentialité de vos identifiants
          et de toute activité réalisée depuis votre compte.
        </p>
      </LegalSection>

      <LegalSection title="3. Soumission de communications">
        <p>En soumettant une communication via l&apos;espace en ligne, vous déclarez notamment que :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Le contenu soumis est original ou correctement autorisé</li>
          <li>Les informations sur les auteurs et affiliations sont exactes</li>
          <li>Vous respectez la limite d&apos;une soumission par compte auteur</li>
          <li>Vous acceptez le processus d&apos;évaluation en double aveugle du comité scientifique</li>
        </ul>
        <p>
          Le comité d&apos;organisation se réserve le droit de refuser ou de retirer toute soumission
          non conforme au règlement de l&apos;appel à communications ou aux présentes Conditions.
        </p>
      </LegalSection>

      <LegalSection title="4. Propriété intellectuelle">
        <p>
          Les contenus que vous soumettez restent votre propriété. En déposant une communication,
          vous accordez au comité RIPU26 une licence non exclusive permettant d&apos;examiner, traiter,
          archiver et, le cas échéant, diffuser le contenu dans le cadre du colloque et de ses
          supports officiels.
        </p>
        <p>
          Le site, sa charte graphique, les textes institutionnels et les éléments de marque RIPU26
          sont protégés et ne peuvent être reproduits sans autorisation écrite.
        </p>
      </LegalSection>

      <LegalSection title="5. Comportements interdits">
        <p>Il est notamment interdit de :</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Tenter d&apos;accéder de manière non autorisée au site ou aux comptes d&apos;autres utilisateurs</li>
          <li>Soumettre des contenus illicites, diffamatoires ou portant atteinte aux droits de tiers</li>
          <li>Contourner les limitations techniques (nombre de soumissions, formats imposés, etc.)</li>
          <li>Utiliser le service à des fins frauduleuses ou contraires à l&apos;éthique scientifique</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Disponibilité du service">
        <p>
          Nous nous efforçons d&apos;assurer la disponibilité de l&apos;espace de soumission, sans
          garantie d&apos;accès ininterrompu. Des opérations de maintenance, des incidents techniques
          ou la clôture des dépôts peuvent suspendre temporairement ou définitivement les soumissions.
        </p>
      </LegalSection>

      <LegalSection title="7. Données personnelles">
        <p>
          Le traitement de vos données personnelles est décrit dans notre{" "}
          <Link href="/confidentialite" className="font-semibold text-[var(--brand)] hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation de responsabilité">
        <p>
          RIPU26 ne saurait être tenu responsable des dommages indirects liés à l&apos;utilisation du
          site, dans les limites autorisées par la loi. Vous utilisez le service sous votre propre
          responsabilité.
        </p>
      </LegalSection>

      <LegalSection title="9. Modification et contact">
        <p>
          Les présentes Conditions peuvent être modifiées à tout moment. La version en vigueur est
          celle publiée sur cette page à la date indiquée ci-dessus.
        </p>
        <p>
          Pour toute question :{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[var(--brand)] hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
