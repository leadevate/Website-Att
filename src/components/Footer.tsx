const Footer = () => (
  <footer className="border-t border-border/30 py-12 px-4 bg-deep-space">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <a href="#" className="text-xl font-display font-bold text-foreground tracking-wider">
          LEAD<span className="text-neon-purple">EVATE</span>
        </a>
        <p className="text-muted-foreground text-sm mt-1">AI-powered growth tools for small businesses.</p>
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-neon-purple transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-neon-purple transition-colors">Terms of Service</a>
        <a href="mailto:leadevatemarketing@gmail.com" className="hover:text-neon-purple transition-colors">Contact</a>
      </div>

      <p className="text-sm text-muted-foreground">© 2025 Leadevate. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
