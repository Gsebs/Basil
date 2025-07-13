import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Code2, 
  Database, 
  ExternalLink, 
  Github, 
  MessageSquare,
  Search,
  Zap
} from "lucide-react";

const quickStartSteps = [
  {
    step: 1,
    title: "Install the SDK",
    code: "npm install @basil/client",
    description: "Install our JavaScript/TypeScript SDK"
  },
  {
    step: 2,
    title: "Initialize Client",
    code: `import { BasilClient } from '@basil/client';

const client = new BasilClient({
  apiKey: 'your_api_key_here',
  endpoint: 'https://api.basil.dev'
});`,
    description: "Set up your Basil client with your API key"
  },
  {
    step: 3,
    title: "Create Collection",
    code: `await client.collections.create({
  name: 'my-embeddings',
  dimension: 1536,
  metric: 'cosine'
});`,
    description: "Create your first vector collection"
  },
  {
    step: 4,
    title: "Insert Vectors",
    code: `await client.vectors.insert('my-embeddings', [
  {
    id: 'doc1',
    vector: [0.1, -0.2, 0.8, ...],
    metadata: { title: 'Document 1' }
  }
]);`,
    description: "Add vectors with optional metadata"
  },
  {
    step: 5,
    title: "Search Vectors",
    code: `const results = await client.vectors.search('my-embeddings', {
  vector: [0.1, -0.2, 0.8, ...],
  topK: 10,
  filter: { category: 'tech' }
});`,
    description: "Perform similarity search with filters"
  }
];

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/collections",
    description: "Create a new vector collection",
    example: "Create collection with custom dimensions and distance metric"
  },
  {
    method: "POST", 
    endpoint: "/vectors/insert",
    description: "Insert vectors into a collection",
    example: "Batch insert up to 1000 vectors with metadata"
  },
  {
    method: "POST",
    endpoint: "/vectors/search",
    description: "Perform similarity search",
    example: "Find similar vectors with optional metadata filtering"
  },
  {
    method: "GET",
    endpoint: "/collections/{id}/stats",
    description: "Get collection statistics",
    example: "Retrieve vector count, dimensions, and performance metrics"
  }
];

const sdkLanguages = [
  { name: "JavaScript/TypeScript", status: "Available", docs: "/docs/sdk/javascript" },
  { name: "Python", status: "Available", docs: "/docs/sdk/python" },
  { name: "Go", status: "Coming Soon", docs: "#" },
  { name: "Rust", status: "Planned", docs: "#" },
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Learn how to integrate Basil into your applications with our comprehensive guides, 
              API references, and SDK documentation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Getting Started</h3>
                <div className="space-y-2 text-sm">
                  <a href="#quickstart" className="block text-muted-foreground hover:text-foreground">
                    Quick Start
                  </a>
                  <a href="#authentication" className="block text-muted-foreground hover:text-foreground">
                    Authentication
                  </a>
                  <a href="#concepts" className="block text-muted-foreground hover:text-foreground">
                    Core Concepts
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">API Reference</h3>
                <div className="space-y-2 text-sm">
                  <a href="#collections" className="block text-muted-foreground hover:text-foreground">
                    Collections
                  </a>
                  <a href="#vectors" className="block text-muted-foreground hover:text-foreground">
                    Vectors
                  </a>
                  <a href="#search" className="block text-muted-foreground hover:text-foreground">
                    Search
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">SDKs</h3>
                <div className="space-y-2 text-sm">
                  <a href="#javascript" className="block text-muted-foreground hover:text-foreground">
                    JavaScript/TypeScript
                  </a>
                  <a href="#python" className="block text-muted-foreground hover:text-foreground">
                    Python
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Quick Start */}
            <section id="quickstart">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Quick Start Guide
                  </CardTitle>
                  <CardDescription>
                    Get started with Basil in under 5 minutes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {quickStartSteps.map((step) => (
                    <div key={step.step} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          {step.step}
                        </div>
                        <h3 className="font-semibold">{step.title}</h3>
                      </div>
                      <div className="ml-11">
                        <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                        <div className="rounded-lg bg-muted p-4">
                          <pre className="text-sm overflow-x-auto">
                            <code>{step.code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* API Reference */}
            <section id="api-reference">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5" />
                    API Reference
                  </CardTitle>
                  <CardDescription>
                    Complete reference for all Basil API endpoints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="font-mono">
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm">{endpoint.endpoint}</code>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {endpoint.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Example: {endpoint.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* SDKs */}
            <section id="sdks">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Official SDKs
                  </CardTitle>
                  <CardDescription>
                    Client libraries for your favorite programming languages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {sdkLanguages.map((sdk) => (
                      <div key={sdk.name} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{sdk.name}</h3>
                          <Badge variant={sdk.status === "Available" ? "default" : "secondary"}>
                            {sdk.status}
                          </Badge>
                        </div>
                        {sdk.status === "Available" && (
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={sdk.docs}>
                              <BookOpen className="mr-2 h-3 w-3" />
                              View Docs
                            </a>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resources */}
            <section id="resources">
              <Card>
                <CardHeader>
                  <CardTitle>Additional Resources</CardTitle>
                  <CardDescription>
                    More ways to learn and get help with Basil
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Button variant="outline" className="h-auto p-4 flex-col gap-2" asChild>
                      <a href="https://github.com/basil-db/examples" target="_blank">
                        <Github className="h-5 w-5" />
                        <span className="font-medium">Example Projects</span>
                        <span className="text-xs text-muted-foreground">
                          Sample applications and code
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="h-auto p-4 flex-col gap-2" asChild>
                      <a href="https://discord.gg/basil" target="_blank">
                        <MessageSquare className="h-5 w-5" />
                        <span className="font-medium">Community</span>
                        <span className="text-xs text-muted-foreground">
                          Join our Discord server
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="h-auto p-4 flex-col gap-2" asChild>
                      <a href="/support" target="_blank">
                        <Search className="h-5 w-5" />
                        <span className="font-medium">Support</span>
                        <span className="text-xs text-muted-foreground">
                          Get help from our team
                        </span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}