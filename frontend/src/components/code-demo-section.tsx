import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

export function CodeDemoSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("python");

  const codeExamples = {
    python: `# Install Basil SDK
pip install basil-db

# Connect to Basil
from basil import Client

# Initialize client
client = Client(api_key="your_api_key")

# Create a collection
collection = client.create_collection(
    name="documents",
    dimension=384,
    metric="cosine"
)

# Insert vectors with metadata
vectors = [
    {
        "id": "doc_1",
        "vector": [0.1, 0.2, 0.3, ...],
        "metadata": {
            "title": "AI Research Paper",
            "category": "research",
            "date": "2024-01-15"
        }
    }
]

collection.insert(vectors)

# Query similar documents
results = collection.query(
    vector=[0.1, 0.2, 0.3, ...],
    top_k=10,
    filter={"category": "research"}
)

print(f"Found {len(results)} similar documents")`,

    javascript: `// Install Basil SDK
npm install @basil/client

// Connect to Basil
import { BasilClient } from '@basil/client';

// Initialize client
const client = new BasilClient({
  apiKey: 'your_api_key'
});

// Create a collection
const collection = await client.createCollection({
  name: 'documents',
  dimension: 384,
  metric: 'cosine'
});

// Insert vectors with metadata
const vectors = [{
  id: 'doc_1',
  vector: [0.1, 0.2, 0.3, /* ... */],
  metadata: {
    title: 'AI Research Paper',
    category: 'research',
    date: '2024-01-15'
  }
}];

await collection.insert(vectors);

// Query similar documents
const results = await collection.query({
  vector: [0.1, 0.2, 0.3, /* ... */],
  topK: 10,
  filter: { category: 'research' }
});

console.log(\`Found \${results.length} similar documents\`);`,

    curl: `# Create a collection
curl -X POST "https://api.basil.dev/v1/collections" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "documents",
    "dimension": 384,
    "metric": "cosine"
  }'

# Insert vectors
curl -X POST "https://api.basil.dev/v1/collections/documents/vectors" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vectors": [{
      "id": "doc_1",
      "vector": [0.1, 0.2, 0.3],
      "metadata": {
        "title": "AI Research Paper",
        "category": "research"
      }
    }]
  }'

# Query similar vectors
curl -X POST "https://api.basil.dev/v1/collections/documents/query" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vector": [0.1, 0.2, 0.3],
    "top_k": 10,
    "filter": {"category": "research"}
  }'`
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Building in Minutes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple APIs that scale from prototype to production. 
              Add vector search to your application with just a few lines of code.
            </p>
          </div>
          
          <div className="bg-card rounded-xl shadow-elegant border p-6">
            {/* Language tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b">
              {[
                { key: "python", label: "Python" },
                { key: "javascript", label: "JavaScript" },
                { key: "curl", label: "cURL" }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-smooth ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Code block */}
            <div className="relative">
              <pre className="code-block overflow-x-auto text-sm leading-relaxed">
                <code>{codeExamples[activeTab as keyof typeof codeExamples]}</code>
              </pre>
              
              {/* Copy button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="absolute top-4 right-4 opacity-70 hover:opacity-100"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}