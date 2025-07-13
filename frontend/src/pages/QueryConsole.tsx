import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Copy, Download, Clock } from "lucide-react";

const collections = [
  { id: "1", name: "product-embeddings", dimension: 1536 },
  { id: "2", name: "user-preferences", dimension: 768 },
  { id: "3", name: "content-similarity", dimension: 1536 },
];

const mockResults = [
  {
    id: "vec_001",
    score: 0.96,
    metadata: {
      title: "Premium Wireless Headphones",
      category: "Electronics",
      price: "$299.99"
    }
  },
  {
    id: "vec_002", 
    score: 0.94,
    metadata: {
      title: "Noise-Canceling Earbuds",
      category: "Electronics", 
      price: "$199.99"
    }
  },
  {
    id: "vec_003",
    score: 0.89,
    metadata: {
      title: "Studio Monitor Headphones",
      category: "Electronics",
      price: "$449.99"
    }
  }
];

export default function QueryConsole() {
  const [selectedCollection, setSelectedCollection] = useState("");
  const [queryVector, setQueryVector] = useState("");
  const [topK, setTopK] = useState("10");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<typeof mockResults>([]);
  const [queryTime, setQueryTime] = useState<number | null>(null);

  const handleRunQuery = async () => {
    if (!selectedCollection || !queryVector) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResults(mockResults);
      setQueryTime(24);
      setIsLoading(false);
    }, 1000);
  };

  const exampleQuery = `[0.1, -0.2, 0.8, 0.3, -0.6, 0.9, -0.1, 0.4, 0.7, -0.3, 0.2, -0.8, 0.5, 0.1, -0.4, 0.6]`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Query Console</h1>
        <p className="text-muted-foreground mt-2">
          Test similarity search queries against your vector collections.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Query Input */}
        <Card>
          <CardHeader>
            <CardTitle>Query Parameters</CardTitle>
            <CardDescription>
              Configure your similarity search query
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="collection">Collection</Label>
              <Select value={selectedCollection} onValueChange={setSelectedCollection}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a collection" />
                </SelectTrigger>
                <SelectContent>
                  {collections.map((collection) => (
                    <SelectItem key={collection.id} value={collection.id}>
                      {collection.name} ({collection.dimension}d)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vector">Query Vector</Label>
              <Textarea
                id="vector"
                placeholder="Enter vector as JSON array, e.g., [0.1, -0.2, 0.8, ...]"
                value={queryVector}
                onChange={(e) => setQueryVector(e.target.value)}
                rows={6}
                className="font-mono text-sm"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQueryVector(exampleQuery)}
              >
                Use Example
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topk">Top K Results</Label>
              <Input
                id="topk"
                type="number"
                value={topK}
                onChange={(e) => setTopK(e.target.value)}
                min="1"
                max="100"
              />
            </div>

            <Button 
              onClick={handleRunQuery}
              disabled={!selectedCollection || !queryVector || isLoading}
              className="w-full"
            >
              <Play className="mr-2 h-4 w-4" />
              {isLoading ? "Running Query..." : "Run Query"}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Query Results</span>
              {queryTime && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {queryTime}ms
                </Badge>
              )}
            </CardTitle>
            <CardDescription>
              Similarity search results for your query
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results.length > 0 ? (
              <div className="space-y-4">
                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm">
                    <Copy className="mr-2 h-3 w-3" />
                    Copy JSON
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Export
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {results.map((result, index) => (
                    <div key={result.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm text-muted-foreground">
                          #{index + 1} • {result.id}
                        </span>
                        <Badge variant="outline">
                          Score: {result.score}
                        </Badge>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-medium">{result.metadata.title}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{result.metadata.category}</span>
                          <span>•</span>
                          <span className="font-medium">{result.metadata.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Play className="mx-auto h-12 w-12 opacity-30 mb-4" />
                <p>Run a query to see similarity search results</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}