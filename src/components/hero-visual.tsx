export default function HeroVisual() {
  return (
    <div className="relative mt-16 w-full max-w-7xl mx-auto px-4">
      {/* Video Container */}
      <div className="relative bg-card rounded-xl overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
        {/* Browser-like Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-muted/50 border-b hover:bg-muted/60 transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform duration-200"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform duration-200"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform duration-200"></div>
          </div>
          <div className="text-sm text-muted-foreground font-mono hover:text-foreground transition-colors duration-200">
            mocha.email
          </div>
          <div className="w-16"></div>
        </div>

        {/* Video Content Area */}
        <div className="relative aspect-video bg-background p-8">
          {/* Email Interface Mockup */}
          <div className="h-full bg-muted/30 rounded-lg border p-6 hover:bg-muted/40 transition-colors duration-200">
            {/* Email Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <span className="text-primary-foreground font-bold text-lg">
                    M
                  </span>
                </div>
                <div>
                  <div className="text-lg font-semibold hover:text-primary transition-colors duration-200">
                    Mocha
                  </div>
                  <div className="text-sm text-muted-foreground">
                    inbox@mocha.email
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">2:30 PM</div>
            </div>

            {/* Email Content Preview */}
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded animate-pulse hover:bg-muted/80 transition-colors duration-300"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-3/4 hover:bg-muted/80 transition-colors duration-300"></div>
              <div className="h-4 bg-muted rounded animate-pulse w-1/2 hover:bg-muted/80 transition-colors duration-300"></div>
            </div>

            {/* Email List Preview */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-4 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all duration-200 hover:scale-[1.01]">
                <div className="w-8 h-8 bg-muted rounded-full hover:bg-muted/80 transition-colors duration-200"></div>
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded w-1/3 mb-2 hover:bg-muted/80 transition-colors duration-300"></div>
                  <div className="h-2 bg-muted rounded w-2/3 hover:bg-muted/80 transition-colors duration-300"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-muted/10 rounded-lg hover:bg-muted/20 transition-all duration-200 hover:scale-[1.01]">
                <div className="w-8 h-8 bg-muted rounded-full hover:bg-muted/80 transition-colors duration-200"></div>
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded w-1/4 mb-2 hover:bg-muted/80 transition-colors duration-300"></div>
                  <div className="h-2 bg-muted rounded w-1/2 hover:bg-muted/80 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-sm text-secondary-foreground/60 bg-background/90 backdrop-blur-md border rounded-full py-1 px-2 hover:bg-background  transition-all duration-300 cursor-pointer group">
              {/* <div className="w-0 h-0 border-l-[20px] border-l-foreground border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 group-hover:border-l-primary transition-colors duration-300"></div> */}
              Coming Soon
            </div>
          </div>

          {/* Demo Badge */}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-sm">
            Demo Video
          </div>
        </div>
      </div>
    </div>
  );
}
