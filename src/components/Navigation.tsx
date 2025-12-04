import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          <span className="text-foreground">panha</span>
          <span className="text-muted-foreground">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors animated-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -mr-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="section-container py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium py-2 hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-border">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
