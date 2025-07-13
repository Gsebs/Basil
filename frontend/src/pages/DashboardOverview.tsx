import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Database, Search, Zap, TrendingUp, Plus, ExternalLink } from "lucide-react";

const stats = [
  {
    name: "Total Vectors",
    value: "2.4M",
    change: "+12%",
    changeType: "positive",
    icon: Database,
  },
  {
    name: "Queries Today",
    value: "8,432",
    change: "+23%",
    changeType: "positive", 
    icon: Search,
  },
  {
    name: "Avg Response Time",
    value: "24ms",
    change: "-8%",
    changeType: "positive",
    icon: Zap,
  },
  {
    name: "Collections",
    value: "12",
    change: "+2",
    changeType: "neutral",
    icon: TrendingUp,
  },
];

const recentCollections = [
  {
    name: "product-embeddings",
    vectors: "1.2M",
    dimension: 1536,
    status: "active",
    lastQuery: "2 minutes ago",
  },
  {
    name: "user-preferences", 
    vectors: "850K",
    dimension: 768,
    status: "active",
    lastQuery: "15 minutes ago",
  },
  {
    name: "content-similarity",
    vectors: "340K", 
    dimension: 1536,
    status: "indexing",
    lastQuery: "1 hour ago",
  },
];

const quickActions = [
  {
    title: "Create Collection",
    description: "Set up a new vector collection",
    icon: Plus,
    href: "/dashboard/collections/new",
  },
  {
    title: "Run Query",
    description: "Test similarity search",
    icon: Search,
    href: "/dashboard/query",
  },
  {
    title: "View Documentation",
    description: "Learn about APIs and SDKs",
    icon: ExternalLink,
    href: "/docs",
  },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening with your vector database.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span
                    className={
                      stat.changeType === "positive"
                        ? "text-emerald-600"
                        : stat.changeType === "negative"
                        ? "text-red-600"
                        : "text-muted-foreground"
                    }
                  >
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Recent Collections */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Collections</CardTitle>
            <CardDescription>
              Your most recently active vector collections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCollections.map((collection) => (
                <div key={collection.name} className="flex items-center justify-between border-b border-border last:border-0 pb-4 last:pb-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{collection.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {collection.vectors} vectors • {collection.dimension}d
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={collection.status === "active" ? "default" : "secondary"}>
                      {collection.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{collection.lastQuery}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to get you started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.title}
                    variant="ghost"
                    className="w-full justify-start h-auto p-4"
                    asChild
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 mt-0.5 text-primary" />
                      <div className="text-left">
                        <p className="font-medium">{action.title}</p>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}