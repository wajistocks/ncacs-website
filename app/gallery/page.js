import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Gallery",
  description:
    "Photographs from NCACS gatherings — cultural events, community celebrations, and the vibrant traditional attire of the Ngemba people.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">In Pictures</span>
          <h1>Our Community in Photos</h1>
          <p>
            A growing record of the moments we share — the dances, the
            feasts, the prayers, the laughter — across every gathering of
            the Ngemba family in Colorado Springs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
