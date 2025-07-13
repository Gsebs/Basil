import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Save, Trash2, AlertTriangle, CreditCard } from "lucide-react";

export default function DashboardSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account and project settings.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Project Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Project Settings</CardTitle>
            <CardDescription>
              Configure your Basil project settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" defaultValue="My Vector Database" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="projectDescription">Description</Label>
              <Textarea 
                id="projectDescription" 
                placeholder="Describe your project..."
                defaultValue="Production vector database for e-commerce recommendations"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectRegion">Region</Label>
              <Input id="projectRegion" defaultValue="us-east-1" disabled />
              <p className="text-xs text-muted-foreground">
                Contact support to change your project region
              </p>
            </div>

            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Performance Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Performance & Limits</CardTitle>
            <CardDescription>
              Configure performance and usage limits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-scaling</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically scale resources based on demand
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Query Rate Limiting</Label>
                <p className="text-sm text-muted-foreground">
                  Limit queries per second to prevent abuse
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Automatic Indexing</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically optimize indexes for better performance
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Current Usage</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Vector Storage</span>
                    <span className="font-medium">2.4 GB / 10 GB</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "24%" }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>API Calls (this month)</span>
                    <span className="font-medium">124K / 1M</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Billing & Usage
            </CardTitle>
            <CardDescription>
              Manage your subscription and billing information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Plan</p>
                <p className="text-sm text-muted-foreground">Pro Plan - $49/month</p>
              </div>
              <Badge>Active</Badge>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium">This Month's Usage</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Vector Storage</span>
                  <span>$12.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Query Requests</span>
                  <span>$3.20</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Data Transfer</span>
                  <span>$1.10</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>$16.80</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">View Invoices</Button>
              <Button variant="outline">Update Payment Method</Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Danger Zone
            </CardTitle>
            <CardDescription>
              Irreversible actions that will permanently affect your project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
              <div>
                <h4 className="font-medium">Delete Project</h4>
                <p className="text-sm text-muted-foreground">
                  Permanently delete this project and all its data
                </p>
              </div>
              <Button variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}