import { Fragment } from "react";

export default function TexteRiche({ texte }: { texte: string }) {
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
