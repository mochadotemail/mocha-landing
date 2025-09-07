export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-lg font-bold text-primary">
              <span className="italic">mocha</span>
              <span className="text-primary/70">.email</span>
            </h3>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Mocha. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
