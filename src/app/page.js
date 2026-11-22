const projects = [
  { emoji: "🧩", title: "Puzzle Box", type: "Interactive UI", color: "lavender" },
  { emoji: "🚀", title: "Launchpad", type: "Landing page", color: "peach" },
  { emoji: "🌱", title: "Little Garden", type: "Web app", color: "mint" },
];

export default function Home() {
  return (
    <main id="home">
      <nav className="nav">
        <a className="logo" href="#home">yash<span>★</span></a>
        <div className="links">
          <a href="#about">About</a>
          <a href="#projects">Playground</a>
          <a href="#contact">Say hello</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <span className="sticker">OPEN TO COOL PROJECTS ✨</span>
          <h1>Ideas are<br />better when<br /><span>you play.</span></h1>
          <p>
            Hey, I’m Yash Patil — a developer making friendly websites,
            playful interfaces, and little things for the internet.
          </p>
          <a className="button" href="#projects">Explore the playground <span>↓</span></a>
        </div>

        <div className="playground" aria-label="Colorful playground illustration">
          <div className="sun">☀</div>
          <div className="ball ballOne">✦</div>
          <div className="ball ballTwo">✿</div>
          <div className="swing">
            <div className="swingTop" />
            <div className="rope ropeLeft" />
            <div className="rope ropeRight" />
            <div className="seat" />
          </div>
          <div className="slide">
            <div className="slideTop" />
            <div className="slideLeg" />
          </div>
          <div className="ground" />
          <span className="doodle">have fun!</span>
        </div>

        <div className="scrollNote">SCROLL TO PLAY ↓</div>
      </section>

      <section className="about section" id="about">
        <span className="sectionLabel">01 — THE PLAYER</span>
        <div>
          <h2>Curious mind.<br /><span>Builder hands.</span></h2>
          <p>
            I like exploring how things work, then turning what I learn into
            useful digital experiences. My favorite projects mix thoughtful
            design, smooth interactions, and a little bit of surprise.
          </p>
        </div>
        <div className="toolbox">
          <span>MY TOOLBOX</span>
          <p>Next.js · React · JavaScript · CSS · Figma</p>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="projectsHeading">
          <div>
            <span className="sectionLabel">02 — THINGS I’VE MADE</span>
            <h2>Welcome to my<br /><span>playground.</span></h2>
          </div>
          <p>Small experiments, big ideas,<br />and everything in between.</p>
        </div>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <a
              className={`projectCard ${project.color}`}
              href="#contact"
              key={project.title}
            >
              <span className="cardNumber">0{index + 1}</span>
              <span className="projectEmoji">{project.emoji}</span>
              <div>
                <span className="projectType">{project.type}</span>
                <h3>{project.title}</h3>
              </div>
              <span className="cardArrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <span className="sectionLabel">03 — YOUR TURN</span>
        <h2>Got an idea?<br /><span>Let’s play.</span></h2>
        <p>I’d love to hear what you’re dreaming up.</p>
        <a className="contactButton" href="mailto:yash@example.com">
          Say hello <span>↗</span>
        </a>
      </section>

      <footer>
        <a className="logo" href="#home">yash<span>★</span></a>
        <span>Made with curiosity by Yash Patil · © 2025</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}