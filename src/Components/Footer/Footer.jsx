import "../Footer/Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="icons">
        <div className="icon">
          <a
            href="https://github.com/Asandile26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://twitter.com/LA_Nator21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://m.facebook.com/100090013194612/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/asandile-langeni-05b027201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin" width={500}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
