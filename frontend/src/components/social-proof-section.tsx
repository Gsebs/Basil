import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Code, Rocket } from "lucide-react";

export function SocialProofSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the Future of AI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
              Currently in development with early access partners. Join our community of forward-thinking developers 
              building the next generation of AI applications.
            </p>
          </div>

          {/* Early Access Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Early Access Program</h3>
                <p className="text-sm text-muted-foreground">
                  Be among the first to test our revolutionary vector database
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Developer Preview</h3>
                <p className="text-sm text-muted-foreground">
                  Access APIs and SDKs before public release
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Founder Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Special pricing and priority support for early adopters
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Early Access CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Be among the first to experience Basil's revolutionary approach to vector databases. 
              Limited spots available for our beta program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Request Beta Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">Schedule a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}