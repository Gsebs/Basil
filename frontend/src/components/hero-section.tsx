import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Zap, Globe, Brain, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Basil</span>
            <br />
            <span className="text-primary text-4xl md:text-6xl lg:text-7xl">
              The Serverless Vector Database
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-5xl lg:text-6xl">
              for AI Applications
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The next-generation vector database that combines AI-powered automation, 
            multi-modal capabilities, and seamless relational integration.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth text-lg px-8 py-6 hover-glow"
            >
              Join Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary-muted transition-smooth text-lg px-8 py-6"
            >
              Request Demo
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-glow group-hover:text-primary-foreground transition-smooth">
                <Database className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Self-Driving</span>
            </div>
            
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-glow group-hover:text-primary-foreground transition-smooth">
                <Zap className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Lightning Fast</span>
            </div>
            
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-glow group-hover:text-primary-foreground transition-smooth">
                <Globe className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Global Scale</span>
            </div>
            
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-glow group-hover:text-primary-foreground transition-smooth">
                <Brain className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">AI-Native</span>
            </div>
            
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-glow group-hover:text-primary-foreground transition-smooth">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Enterprise</span>
            </div>
            
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-12 h-12 bg-primary-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary-glow group-hover:text-primary-foreground transition-smooth">
                <ArrowRight className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Serverless</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}