import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn about the Ngemba Cultural Association of Colorado Springs — our story, our people, our heritage, and our mission bridging Cameroon and Colorado.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Who We Are</span>
          <h1>About NCACS</h1>
          <p>
            A community rooted in the highlands of Cameroon, flourishing in
            the foothills of the Rockies — bound by heritage, friendship,
            and a shared promise of mutual care.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="prose">
            <h2>Our Story</h2>
            <p>
              The Ngemba Cultural Association of Colorado Springs was founded
              in 2025 by a group of Ngemba sons and daughters who, having made
              their homes in Colorado, recognized a shared longing — a longing
              for the warmth of community, the familiarity of tradition, and
              the strength that comes only from standing with one's own people.
            </p>
            <p>
              From quiet conversations in living rooms grew a vision: to build
              an organization that would unite Ngemba families across Colorado
              Springs, preserve the culture our parents and grandparents
              entrusted to us, and stand together in moments of celebration
              and difficulty alike.
            </p>
            <p>
              Today, NCACS is that home — a registered cultural association
              of dedicated members, founding leaders, and growing families,
              all moving forward together under a single motto: <strong>
              Fostering Unity and Strength Through Social Engagement,
              Networking, and Collective Growth.</strong>
            </p>

          </article>
        </div>
      </section>

      <section className="section" style={{ background: "#0c0c0c" }}>
        <div className="container">
          <div className="heritage-section">
            <div className="heritage-intro">
              <span className="eyebrow">Our Heritage</span>
              <h2>The Ngemba People — Our History and Heritage</h2>
              <p>
                A storied people of the Bamenda Grassfields — warriors,
                traders, custodians of tradition, and a nation that has
                never been conquered in spirit.
              </p>
            </div>

            <article className="heritage-card">
              <h3>Our Origins</h3>
              <p>
                The Ngemba people are part of the great Tikar race, one of
                the most storied peoples of Central Africa. The Tikar
                emerged from the Sudan region around the 8th century,
                migrating southward and establishing themselves as master
                ironworkers and warriors — earning the name &ldquo;conquerors&rdquo;
                among neighboring peoples.
              </p>
              <p>
                Around 933 CE, facing pressures from war and famine, the
                Tikar ancestors moved into the Adamawa region of present-day
                Nigeria and Cameroon, beginning a centuries-long journey
                that would eventually bring them to the breathtaking
                highlands of the Bamenda Grassfields.
              </p>
            </article>

            <div className="ndop-divider" aria-hidden="true" />

            <article className="heritage-card">
              <h3>The Ngemba Fondoms</h3>
              <p>
                The first Ngemba migrations into the Grassfields began
                around the 11th century, continuing through the 13th
                century. The great Fondom of Bafut arrived during this
                period, with the last groups completing their migration
                around the 17th century. Today the Ngemba nation is made
                up of proud and distinct Fondoms across the Greater
                Northwest and parts of the Western Region of Cameroon:
              </p>
              <ul>
                <li><strong>Awing</strong></li>
                <li><strong>Bafut</strong></li>
                <li><strong>Bambili</strong></li>
                <li><strong>Mbu-Clan</strong></li>
                <li><strong>Bambui</strong></li>
                <li><strong>Babanki</strong></li>
                <li><strong>Mendankwe</strong></li>
                <li><strong>Nkwen</strong></li>
                <li><strong>Mankon</strong></li>
                <li><strong>Pinyin</strong></li>
                <li><strong>Alatening</strong></li>
                <li><strong>Chomba</strong></li>
                <li><strong>Akum</strong></li>
                <li><strong>Nsogwa</strong></li>
                <li><strong>Babadjou</strong> — West Region</li>
              </ul>
              <p>
                Each Fondom carries its own traditions, history, and
                identity — yet together they form the magnificent
                tapestry of the Ngemba people.
              </p>
            </article>

            <div className="ndop-divider" aria-hidden="true" />

            <article className="heritage-card">
              <h3>Governance: A Kingdom of Order and Wisdom</h3>
              <p>
                The Ngemba people developed one of the most sophisticated
                systems of governance in the Grassfields region, built on
                powerful pillars of authority, accountability, and balance.
              </p>

              <h4>The Fon (Mfor) — The Sacred King</h4>
              <p>
                At the center of Ngemba governance stands the Fon — an
                absolute monarch and the primary spiritual leader of the
                community. The Fon is not merely a political ruler but a
                living link between the people and their ancestors. His
                authority is sacred and his word carries the weight of
                generations.
              </p>

              <h4>The Kwifor — Guardian Society</h4>
              <p>
                The Kwifor is a powerful secret society that serves as
                the highest council of elders and the ultimate check on
                royal authority. Their responsibilities are vast and
                deeply respected. When the throne becomes vacant, the
                Kwifor is responsible for enthroning the new Fon. They
                are the custodians of traditional law — ensuring the Fon
                rules within the boundaries of ancestral wisdom. No king
                rules without accountability to the Kwifor.
              </p>

              <h4>The Manjong — The Army</h4>
              <p>
                The Manjong is the traditional military society of the
                Ngemba people, led by the Muma — the head of the army.
                The Manjong was responsible for defending Ngemba territory
                and maintaining order, and remains an important cultural
                institution today.
              </p>

              <h4>The Takumbeng — Voice of the Women</h4>
              <p>
                The Takumbeng is a sacred society representing the
                women&apos;s wing of Ngemba culture. Far more than a
                social group, the Takumbeng holds spiritual authority —
                leading purification rites, performing cleansing rituals,
                and intervening during times of community crisis. Their
                power is deeply respected and their presence commands
                attention.
              </p>
            </article>

            <div className="ndop-divider" aria-hidden="true" />

            <article className="heritage-card">
              <h3>Trade and Commerce</h3>
              <p>
                Long before European contact, the Ngemba people were
                accomplished traders and skilled craftspeople. Their main
                trade exports included kola nuts, ivory, salt, palm oil,
                iron goods, cloth, pearls, and cowrie shells. Cowrie
                shells were used as currency in many parts of the region.
              </p>
              <p>
                Their most important trading partners were the Jukun and
                Hausa peoples of Northern Nigeria — relationships that
                brought prosperity and connected the Ngemba to vast
                trading networks across West and Central Africa.
              </p>
            </article>

            <div className="ndop-divider" aria-hidden="true" />

            <article className="heritage-card">
              <h3>A Warrior Nation</h3>
              <p>
                The Ngemba people are historically a warrior race —
                fierce defenders of their land, identity, and
                independence. Their warrior spirit is embedded in their
                very names. Names like <strong>Achiri Mbi</strong> of
                Baforchu and Bafut meaning <em>Protector of the World</em>
                and <strong>Abu Mbi</strong> meaning <em>Conqueror of
                the World</em> reflect how the Ngemba saw themselves —
                as the center of the universe, answerable to no foreign
                power.
              </p>
              <p>
                In the middle of the 19th century, the Bali Chamba tribe
                migrated from Northern Nigeria and invaded Ngemba
                territory. The Ngemba fought back and defeated them,
                protecting their homeland and their way of life.
              </p>
              <p>
                When German colonial forces entered the Bamenda
                Grassfields in 1891, they encountered a people who would
                not bow. German explorer Eugene Zintgraff sent messengers
                to the Fon of Bafut demanding ivory as a symbol of
                submission. The messengers were killed — because
                submission is alien to the Ngemba spirit.
              </p>
              <p>
                In retaliation the Germans attacked, burning the town of
                Mankon on January 31, 1891. But the warriors of Bafut,
                Mankon, Baforchu, and other Ngemba communities ambushed
                the German forces on their return journey, inflicting
                heavy losses. This moment marked the beginning of a
                decade-long war of resistance against German colonial
                rule — a proud chapter in Ngemba history that speaks to
                the unbreakable spirit of a people who refused to be
                conquered.
              </p>
            </article>

            <div className="ndop-divider" aria-hidden="true" />

            <article className="heritage-card">
              <h3>Our Traditional Foods</h3>
              <p>
                Food is at the heart of Ngemba culture — a celebration
                of the land, community, and togetherness.
              </p>
              <p>
                Our most beloved traditional dishes are <strong>Achu and
                Yellow Soup</strong> — a rich, aromatic dish made from
                pounded cocoyam served with a deeply flavored yellow
                palm oil soup, the undisputed signature meal of the
                Ngemba people. Equally celebrated is <strong>Fufu and
                Njama Njama</strong> — pounded cassava or corn served
                with stir-fried garden huckleberry leaves, a dish that
                brings warmth and comfort to every Ngemba home.
              </p>
              <p>
                Traditional proteins include bush meat, beef, goat,
                chicken, bush fowl, and pork — often prepared with
                local spices and herbs that have been used for
                generations.
              </p>
              <p>
                Every meal shared among the Ngemba is more than food —
                it is an act of unity, hospitality, and cultural pride.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="prose">
            <h2>The Ngemba People</h2>
            <p>
              The Ngemba are a closely related cluster of peoples of the
              North West Region of Cameroon, centered around the city of
              Bamenda in the Bamenda Highlands. We share a common linguistic
              and cultural heritage, organized historically into chiefdoms
              ruled by traditional Fons.
            </p>
            <p>
              The Ngemba family includes the villages and communities of:
            </p>
            <ul>
              <li><strong>Bafut</strong> — one of the great Fondoms of the North West</li>
              <li><strong>Mankon</strong> — historic kingdom at the heart of Bamenda</li>
              <li><strong>Bambili</strong> — known for its scholarship and tradition</li>
              <li><strong>Awing</strong> — proud guardians of cultural practice</li>
              <li><strong>Pinyin</strong> — keepers of the highlands</li>
              <li><strong>Mendankwe-Nkwen</strong> — kin of the eastern Bamenda</li>
            </ul>
            <p>
              Wherever Ngemba people gather — from Bamenda to Yaoundé, from
              Lagos to London, from Houston to Colorado Springs — we carry
              with us the same drums, the same proverbs, and the same
              unshakeable sense of who we are.
            </p>

            <h2>Our Heritage</h2>
            <p>
              Ngemba culture is rich, intricate, and beautifully alive.
              Among the threads we celebrate and preserve:
            </p>
            <h3>The Fon System</h3>
            <p>
              At the center of traditional Ngemba society sits the Fon — a
              chief who is at once political leader, custodian of sacred
              tradition, and the symbolic father of his people. The Fon's
              palace, council of elders, and traditional ceremonies anchor
              the community to its ancestors.
            </p>
            <h3>Traditional Attire</h3>
            <p>
              The flowing embroidered robes and richly patterned head pieces
              worn at our gatherings are no mere costume — they are a living
              language of identity, status, and belonging.
            </p>
            <h3>Music, Dance &amp; Ndop</h3>
            <p>
              The deep voice of the djembe and slit drum, the call-and-response
              of royal dances, and the indigo geometry of ndop cloth all
              speak of an artistic tradition we are proud to carry forward.
            </p>
            <h3>Achu</h3>
            <p>
              No Ngemba gathering is complete without Achu — pounded cocoyam
              and ripe banana served with our signature yellow soup. It is
              food, it is celebration, it is home.
            </p>

            <h2>Our Purpose</h2>
            <p>
              The bylaws of NCACS commit us to eight foundational objectives:
            </p>
            <ol>
              <li>To unite the Ngemba people residing in Colorado Springs and the surrounding areas.</li>
              <li>To preserve and promote Ngemba culture, language, and traditions.</li>
              <li>To foster social engagement, friendship, and networking among members.</li>
              <li>To support members in times of celebration, hardship, and bereavement.</li>
              <li>To encourage collective growth — educational, professional, and spiritual.</li>
              <li>To engage in charitable initiatives benefiting our Colorado Springs community.</li>
              <li>To support development projects in the Ngemba homeland in Cameroon.</li>
              <li>To represent the Ngemba people with dignity in our adopted home.</li>
            </ol>

            <h2>The Colorado Springs Connection</h2>
            <p>
              Colorado Springs — a city of mountains, military service,
              learning, and faith — has become for many of us a second
              homeland. Here we raise our children, build our careers,
              worship, and build community. NCACS exists to ensure that
              the Ngemba identity which shaped us continues to nourish the
              next generation, even as we contribute our gifts to the city
              that has welcomed us.
            </p>
            <p>
              We bridge two worlds. We honor both.
            </p>
          </article>

          <div style={{ textAlign: "center", marginTop: 64 }}>
            <div className="flex-buttons">
              <Link href="/membership" className="btn btn-primary">Become a Member</Link>
              <Link href="/leadership" className="btn btn-outline">Meet Our Leaders</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
