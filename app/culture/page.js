export const metadata = {
  title: "Culture",
  description:
    "Explore the rich cultural heritage of the Ngemba people — the Fon system, traditional music and dance, ndop cloth, beadwork, Achu cuisine, and our beautiful royal attire.",
};

const CULTURE_PHOTOS = [
  { src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964454/community8_corcy9.jpg", caption: "Traditional dance" },
  { src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964454/community9_avoruu.jpg", caption: "Royal attire" },
  { src: "/photos/community10.jpg", caption: "Community elders" },
  { src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964455/community11_ckvr53.jpg", caption: "Cultural ceremony" },
  { src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964457/community13_yafkfb.jpg", caption: "Drumming and song" },
  { src: "https://res.cloudinary.com/dksshweet/image/upload/v1778964458/community14_jgm5tt.jpg", caption: "In our colors" },
];

export default function CulturePage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Heritage</span>
          <h1>Our Rich Cultural Heritage</h1>
          <p>
            The traditions, arts, and rhythms that the Ngemba people carry
            with us from the Bamenda Highlands to wherever we make our home.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="prose">
            <h2>The Fon System</h2>
            <p>
              The Fon is the traditional ruler of a Ngemba village — a leader
              who is at once head of state, chief priest, custodian of
              ancestral wisdom, and symbolic father of the people. Surrounded
              by a council of notables (Kwifoyn or its equivalent), the Fon
              presides over festivals, dispenses traditional justice, and
              preserves the sacred objects of the community.
            </p>
            <p>
              Even in diaspora, the spirit of the Fon system lives on in our
              respect for elders, our council-based decision-making, and the
              ceremonial gravity we bring to our cultural events.
            </p>

            <h2>Traditional Music and Dance</h2>
            <p>
              Music is the heartbeat of Ngemba life. The deep, resonant call
              of the <strong>djembe</strong> and traditional slit drums
              announces births, marriages, deaths, and royal ceremonies.
              Dancing is communal and intricate — every gesture is a sentence
              in a language older than the colonial maps.
            </p>
            <p>
              At our gatherings you will hear the rhythms of the Fon dance,
              feel the cadence of call-and-response, and see the proud line
              of dancers in flowing robes.
            </p>

            <h2>Traditional Crafts</h2>
            <h3>Ndop Cloth</h3>
            <p>
              The indigo-and-white <strong>ndop</strong> cloth — its geometric
              patterns stitched and dyed by hand — is one of the great
              textile traditions of the grasslands. Once reserved for royalty,
              it remains a powerful emblem of Ngemba identity.
            </p>
            <h3>Raffia Weaving</h3>
            <p>
              From bags and mats to the elegant raffia bag carried by men of
              standing, woven raffia is everywhere in our material culture.
            </p>
            <h3>Beadwork</h3>
            <p>
              The golden, red, and black beadwork seen on royal calabashes,
              stools, and headpieces is among the most recognizable art forms
              of the Cameroonian grasslands. Beadwork tells stories — of
              lineage, of office, of cosmology.
            </p>
            <h3>Blacksmithing</h3>
            <p>
              The blacksmith holds an honored place in Ngemba society,
              forging tools, weapons, and ceremonial objects from iron — a
              craft surrounded by ritual and respect.
            </p>

            <h2>Achu — Our Signature Dish</h2>
            <p>
              <strong>Achu</strong> is the queen of Ngemba cuisine: pounded
              cocoyam (and sometimes ripe banana) served with a fragrant,
              spiced <em>yellow soup</em> made from limestone-rich palm oil,
              red oil, and an aromatic blend of spices that varies by village
              and by family. Eaten with the right hand, shared from a common
              dish, Achu is more than food — it is a sacrament of togetherness.
            </p>

            <h2>Language</h2>
            <p>
              The Ngemba people speak a closely related family of Bantoid
              languages, often grouped as the <strong>Ngemba languages</strong>.
              Each village has its own dialect — Bafut, Mankon, Bambili, Awing,
              Pinyin, Mendankwe-Nkwen — and our elders move between them with
              the ease of those who have always known a multilingual world.
              English and Cameroonian Pidgin are our common tongues alongside.
            </p>

            <h2>Traditional Attire</h2>
            <p>
              At every cultural celebration, NCACS members rise in our
              traditional attire — flowing, richly embroidered robes in deep
              reds, blacks, and royal blues; chiefly head-pieces beaded in
              gold; raffia bags slung at the shoulder. To dress well is to
              honor our ancestors and to teach our children where they come from.
            </p>
          </article>

          <figure className="notable-figure">
            <div className="notable-image-wrap">
              <span className="photo-badge">Portrait of a Ngemba Notable</span>
              <img
                src="https://res.cloudinary.com/dksshweet/image/upload/v1778866807/notable_op0dxk.jpg"
                alt="Portrait of a Ngemba Notable in full traditional Toghu regalia"
                loading="lazy"
              />
            </div>
            <figcaption>
              A distinguished Ngemba notable in full traditional Toghu
              regalia, beaded crown, and royal staff adorned with cowrie
              shells. This portrait captures the nobility, spirituality,
              and artistic richness of the Ngemba people.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="eyebrow">Glimpses</span>
            <h2 className="section-title center">Culture in Motion</h2>
          </div>
          <div className="photo-grid">
            {CULTURE_PHOTOS.map((p, i) => (
              <div className="photo-card" key={i}>
                <img src={p.src} alt={p.caption} loading="lazy" />
                <div className="photo-card-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
