import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Zap, 
  Globe, 
  Brain, 
  Shield, 
  Search,
  BarChart3,
  Code,
  Users,
  Layers,
  MessageSquare,
  Lock
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: "Self-Driving Operations",
      description: "Autonomous database that tunes and manages itself with ML-based optimization, auto-healing, and self-securing capabilities.",
      highlight: true
    },
    {
      icon: Layers,
      title: "Multi-Model Support",
      description: "Handle vector similarity search and traditional SQL queries in one engine. True HTAP with real-time updates and analytics.",
      highlight: true
    },
    {
      icon: Globe,
      title: "Infinite Global Scale", 
      description: "Cloud-native architecture that distributes data across regions with tunable consistency levels and automatic sharding.",
      highlight: true
    },
    {
      icon: Brain,
      title: "AI-Native Optimization",
      description: "Machine learning embedded throughout - learned indexes, query optimization, and reinforcement learning for real-time tuning.",
      highlight: true
    },
    {
      icon: MessageSquare,
      title: "Natural Language Queries",
      description: "Ask questions in English and get vector search results. Built-in NLP models translate intent to queries automatically.",
      highlight: false
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, role-based access control, audit logging with blockchain verification, and compliance-ready features.",
      highlight: false
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "State-of-the-art ANN algorithms (HNSW, IVF-PQ) with optional GPU acceleration for billion-scale vector search.",
      highlight: false
    },
    {
      icon: Search,
      title: "Hybrid Search",
      description: "Combine vector similarity with scalar filters seamlessly. Find similar items with complex metadata conditions.",
      highlight: false
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "Simple SDKs, interactive console, copyable code examples, and command palette for power users.",
      highlight: false
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Built-in analytics on vector data with materialized views, aggregations, and similarity joins for insights.",
      highlight: false
    },
    {
      icon: Users,
      title: "Multi-Tenancy",
      description: "Deploy as SaaS or on-premise with organization management, role-based access, and team collaboration features.",
      highlight: false
    },
    {
      icon: Lock,
      title: "Cost Optimization",
      description: "Intelligent storage tiering from hot RAM to cold object storage with cost-aware query planning.",
      highlight: false
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Features for Modern AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Basil combines cutting-edge research with practical engineering to deliver 
              capabilities that current vector databases only dream of achieving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`transition-smooth hover-lift ${
                  feature.highlight 
                    ? "border-primary bg-gradient-to-br from-primary-muted to-background shadow-glow" 
                    : "hover:border-primary/50"
                }`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    feature.highlight 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-primary-muted text-primary"
                  }`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className={feature.highlight ? "text-primary" : ""}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}