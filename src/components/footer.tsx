import { MailDivider } from "./mail-divider"

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <h1 className="font-serif text-2xl font-medium text-primary hover:text-primary/90 transition-colors mb-4">
              <span className="mx-0.5">mocha</span>
              <span className="text-primary/70">.email</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-4 w-2/3 leading-relaxed">
              Revolutionizing email with intelligent automation and seamless integration.
              Take control of your inbox with a fast and AI powered email
              client built for people who live in email all day
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/manifesto" className="hover:text-primary transition-colors">Manifesto</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li> */}
              <li><a href="mailto:info@mocha.email" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="https://discord.gg/gQd2JJVuvb" className="hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://x.com/mochadotemail" className="hover:text-primary transition-colors">X (Formerly Twitter)</a></li>
              {/* <li><a href="https://linkedin.com/company/mochaemail" className="hover:text-primary transition-colors">LinkedIn</a></li> */}
              <li><a href="https://github.com/mochadotemail" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <MailDivider/>
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/50">
              © 2025 Mocha Engineering, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-sm text-muted-foreground/50 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-sm text-muted-foreground/50 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
