import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Developer",
      price: "Free",
      period: "",
      description: "Perfect for experimentation and small projects",
      features: [
        "Up to 1GB of vectors",
        "10,000 queries/month",
        "Basic vector search",
        "Community support",
        "API access",
        "Documentation"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For production applications and growing teams",
      features: [
        "Up to 100GB of vectors",
        "1M queries/month",
        "Advanced ANN algorithms",
        "Multi-model support",
        "Email support",
        "Team collaboration",
        "Usage analytics",  
        "API rate limiting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale deployments with custom needs",
      features: [
        "Unlimited vectors",
        "Unlimited queries",
        "Self-driving optimization",
        "Natural language queries",
        "On-premise deployment",
        "24/7 dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "Advanced security",
        "Compliance features"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprise bills. 
              Pay only for what you use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative transition-smooth hover-lift ${
                  plan.popular 
                    ? "border-primary shadow-glow bg-gradient-to-br from-primary-muted to-background" 
                    : "hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-primary hover:opacity-90" 
                        : plan.name === "Enterprise"
                        ? "variant-outline"
                        : ""
                    }`}
                    variant={plan.name === "Enterprise" ? "outline" : "default"}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional pricing info */}
          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Usage-Based Billing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-2">Vector Storage</p>
                  <p>$0.25 per GB-month for vectors and indexes</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Query Pricing</p>
                  <p>$0.40 per 1,000 vector similarity queries</p>
                </div>
              </div>
              <p className="mt-4 text-xs">
                All plans include generous free tiers. Enterprise customers can negotiate custom pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}