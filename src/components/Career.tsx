import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>SJCE Mysuru</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built 5+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and vibe coded many projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI ML engineer</h4>
                <h5>SJCE Mysuru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed many AI ML projects based on my learnings some include spam detection, image classification, RAG chatbot, etc.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer & AI ML Engineer</h4>
                <h5>SJCE Mysuru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working on Genrative AI projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
