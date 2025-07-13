import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Search, MoreHorizontal, Database, Trash2, Settings, Eye } from "lucide-react";

const collections = [
  {
    id: "1",
    name: "product-embeddings",
    vectors: "1,234,567",
    dimension: 1536,
    status: "active",
    created: "2024-01-15",
    lastUpdated: "2 minutes ago",
    size: "2.4 GB",
  },
  {
    id: "2", 
    name: "user-preferences",
    vectors: "856,432",
    dimension: 768,
    status: "active",
    created: "2024-01-12",
    lastUpdated: "15 minutes ago",
    size: "1.2 GB",
  },
  {
    id: "3",
    name: "content-similarity",
    vectors: "342,158",
    dimension: 1536,
    status: "indexing",
    created: "2024-01-10",
    lastUpdated: "1 hour ago",
    size: "756 MB",
  },
  {
    id: "4",
    name: "recommendation-engine",
    vectors: "2,145,678",
    dimension: 512,
    status: "active",
    created: "2024-01-05",
    lastUpdated: "3 hours ago",
    size: "3.1 GB",
  },
];

export default function Collections() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Collections</h1>
          <p className="text-muted-foreground mt-2">
            Manage your vector collections and monitor their performance.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Collection
        </Button>
      </div>

      {/* Search and filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search Collections</CardTitle>
          <CardDescription>
            Find and manage your vector collections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search collections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Collections table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Collections</CardTitle>
          <CardDescription>
            {filteredCollections.length} collection{filteredCollections.length !== 1 ? 's' : ''} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Vectors</TableHead>
                <TableHead>Dimension</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCollections.map((collection) => (
                <TableRow key={collection.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{collection.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{collection.vectors}</TableCell>
                  <TableCell>{collection.dimension}d</TableCell>
                  <TableCell>
                    <Badge variant={collection.status === "active" ? "default" : "secondary"}>
                      {collection.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{collection.size}</TableCell>
                  <TableCell>{collection.lastUpdated}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Search className="mr-2 h-4 w-4" />
                          Query Collection
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}