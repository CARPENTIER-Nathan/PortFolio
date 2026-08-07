import { Fragment } from "react";

/**
 * Affiche un texte en convertissant les passages entourés de ** en gras.
 *
 *   "Je privilégie la **sobriété** technique."
 *   → Je privilégie la <strong>sobriété</strong> technique.
 *
 * Seule la mise en gras est interprétée : tout le reste du texte est échappé
 * normalement par React, aucun HTML brut n'est injecté.
 */
export default function TexteRiche({ texte }: { texte: string }) {
  // split avec un groupe capturant : les indices impairs sont les passages en gras
  const segments = texte.split(/\*\*(.+?)\*\*/g);

  return (
    <>
      {segments.map((segment, index) =>
        index % 2 === 1 ? (
          <strong key={index}>{segment}</strong>
        ) : (
          <Fragment key={index}>{segment}</Fragment>
        )
      )}
    </>
  );
}
