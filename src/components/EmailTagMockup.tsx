import React from 'react';

const EmailUIPreview = (props: { className: string }) => {
  return (
    <div className={`bg-transparent rounded-lg border border-border shadow-sm w-full p-4 ${props.className}`}>
      {/* Email Header */}
      <div className="px-4 py-3 border-b border-border">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-lg font-semibold text-foreground pr-3">
            Q3 Project Review Meeting
          </h2>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive border border-destructive/20 whitespace-nowrap">
            Important
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-medium text-sm">SM</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-foreground">Sarah Mitchell</div>
            <div className="text-xs text-muted-foreground">sarah.mitchell@company.com</div>
          </div>
          <div className="text-xs text-muted-foreground">2:30 PM</div>
        </div>
      </div>
      
      {/* Email Content */}
      <div className="px-4 py-3">
        <p className="text-sm text-foreground leading-relaxed mb-3">
          Hi there,
        </p>
        <p className="text-sm text-foreground leading-relaxed">
          I hope this email finds you well. I would like to schedule a meeting to discuss the upcoming quarterly project milestones and review our current progress.
        </p>
      </div>
    </div>
  );
};

export default EmailUIPreview;