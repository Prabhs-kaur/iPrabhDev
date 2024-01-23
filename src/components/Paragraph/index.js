"use client";
function Paragraph({ content }) {
  return (
    <>
      {Array.isArray(content.description) ? (
        content.description.map((item) => {
          return <p className="fs-5 text-dark">{item}</p>;
        })
      ) : (
        <p className="fs-5 text-dark">{content.description}</p>
      )}
    </>
  );
}
export default Paragraph;
