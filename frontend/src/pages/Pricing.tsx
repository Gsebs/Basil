import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, CreditCard, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const pricingPlans = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for prototyping and small projects",
    features: [
      "100K vectors included",
      "1 collection",
      "Community support",
      "Basic API access",
      "1GB storage"
    ],
    limitations: [
      "Limited to 100 queries/day",
      "No SLA guarantee"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Developer",
    price: 29,
    description: "For growing applications and development teams",
    features: [
      "1M vectors included",
      "10 collections",
      "Email support",
      "Full API access",
      "10GB storage",
      "Advanced filtering",
      "99.9% uptime SLA"
    ],
    limitations: [],
    cta: "Start 14-day Free Trial",
    popular: true
  },
  {
    name: "Team",
    price: 99,
    description: "For production applications with team collaboration",
    features: [
      "10M vectors included",
      "Unlimited collections",
      "Priority support",
      "Team management",
      "100GB storage",
      "Advanced analytics",
      "99.99% uptime SLA",
      "Custom integrations"
    ],
    limitations: [],
    cta: "Start 14-day Free Trial",
    popular: false
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom solutions for large-scale deployments",
    features: [
      "Unlimited vectors",
      "Unlimited collections",
      "Dedicated support",
      "Custom SLA",
      "Unlimited storage",
      "On-premise deployment",
      "Custom features",
      "Training & consulting"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePlanSelect = async (planName: string) => {
    setLoadingPlan(planName);
    
    // Simulate checkout/contact process
    setTimeout(() => {
      if (planName === "Enterprise") {
        toast({
          title: "Contact Information Sent",
          description: "Our sales team will reach out to you within 24 hours.",
        });
      } else if (planName === "Starter") {
        toast({
          title: "Welcome to Basil!",
          description: "Your free account is ready. Redirecting to dashboard...",
        });
        // Redirect to auth
        setTimeout(() => {
          window.location.href = "/auth";
        }, 1500);
      } else {
        toast({
          title: "Trial Started!",
          description: "Your 14-day free trial has begun. No payment required.",
        });
        // Redirect to auth
        setTimeout(() => {
          window.location.href = "/auth";
        }, 1500);
      }
      setLoadingPlan(null);
    }, 2000);
  };

  const getPrice = (basePrice: number | null) => {
    if (basePrice === null) return "Custom";
    if (basePrice === 0) return "Free";
    return isAnnual ? Math.floor(basePrice * 0.8) : basePrice;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start building for free, then scale as you grow. No hidden fees or surprise charges.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <Badge variant="secondary" className="ml-2">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  {plan.price === null ? (
                    <span className="text-3xl font-bold">Custom</span>
                  ) : plan.price === 0 ? (
                    <span className="text-3xl font-bold">Free</span>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold">${getPrice(plan.price)}</span>
                      <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                  )}
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handlePlanSelect(plan.name)}
                  disabled={loadingPlan === plan.name}
                >
                  {loadingPlan === plan.name ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : plan.name === "Enterprise" ? (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      {plan.cta}
                    </>
                  ) : (
                    plan.cta
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens after my free trial ends?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your account will automatically downgrade to the free Starter plan. No charges will be made unless you upgrade to a paid plan.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I change plans at any time?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards and ACH transfers for annual plans. Enterprise customers can arrange custom payment terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}