const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-sm font-medium tracking-tight hover:opacity-70 transition-opacity"
          >
            <span className="text-foreground">panha</span>
            <span className="text-muted-foreground">.dev</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Panha Chom. Crafted with precision.
          </p>

          {/* Back to Top */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
