// Simulated vector database API responses and functions
export interface Vector {
  id: string;
  vector: number[];
  metadata?: Record<string, any>;
}

export interface Collection {
  id: string;
  name: string;
  dimension: number;
  metric: 'cosine' | 'euclidean' | 'dot';
  vectorCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface SearchResult {
  id: string;
  score: number;
  metadata?: Record<string, any>;
}

export interface SearchResponse {
  results: SearchResult[];
  took: number;
  total: number;
}

// Mock data
const mockCollections: Collection[] = [
  {
    id: 'col_1',
    name: 'product-embeddings',
    dimension: 1536,
    metric: 'cosine',
    vectorCount: 1234567,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T15:30:00Z'
  },
  {
    id: 'col_2',
    name: 'user-preferences',
    dimension: 768,
    metric: 'cosine',
    vectorCount: 856432,
    createdAt: '2024-01-12T09:00:00Z',
    updatedAt: '2024-01-20T14:15:00Z'
  }
];

const mockVectors: Record<string, Vector[]> = {
  'col_1': [
    {
      id: 'vec_001',
      vector: Array(1536).fill(0).map(() => Math.random() * 2 - 1),
      metadata: {
        title: 'Premium Wireless Headphones',
        category: 'Electronics',
        price: 299.99,
        brand: 'AudioTech'
      }
    },
    {
      id: 'vec_002',
      vector: Array(1536).fill(0).map(() => Math.random() * 2 - 1),
      metadata: {
        title: 'Noise-Canceling Earbuds',
        category: 'Electronics',
        price: 199.99,
        brand: 'SoundWave'
      }
    }
  ]
};

// Utility functions
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const cosineSimilarity = (a: number[], b: number[]): number => {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

// API simulation functions
export const basilApi = {
  // Collections API
  collections: {
    list: async (): Promise<Collection[]> => {
      await delay(300);
      return mockCollections;
    },

    get: async (id: string): Promise<Collection | null> => {
      await delay(200);
      return mockCollections.find(col => col.id === id) || null;
    },

    create: async (params: {
      name: string;
      dimension: number;
      metric?: 'cosine' | 'euclidean' | 'dot';
    }): Promise<Collection> => {
      await delay(500);
      const newCollection: Collection = {
        id: `col_${Date.now()}`,
        name: params.name,
        dimension: params.dimension,
        metric: params.metric || 'cosine',
        vectorCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      mockCollections.push(newCollection);
      return newCollection;
    },

    delete: async (id: string): Promise<void> => {
      await delay(300);
      const index = mockCollections.findIndex(col => col.id === id);
      if (index > -1) {
        mockCollections.splice(index, 1);
        delete mockVectors[id];
      }
    }
  },

  // Vectors API
  vectors: {
    insert: async (collectionId: string, vectors: Omit<Vector, 'id'>[]): Promise<{ inserted: number }> => {
      await delay(400);
      
      if (!mockVectors[collectionId]) {
        mockVectors[collectionId] = [];
      }

      const newVectors = vectors.map((vec, index) => ({
        ...vec,
        id: `vec_${Date.now()}_${index}`
      }));

      mockVectors[collectionId].push(...newVectors);
      
      // Update collection vector count
      const collection = mockCollections.find(col => col.id === collectionId);
      if (collection) {
        collection.vectorCount = mockVectors[collectionId].length;
        collection.updatedAt = new Date().toISOString();
      }

      return { inserted: newVectors.length };
    },

    search: async (collectionId: string, params: {
      vector: number[];
      topK?: number;
      filter?: Record<string, any>;
    }): Promise<SearchResponse> => {
      const startTime = Date.now();
      await delay(50); // Simulate fast search

      const vectors = mockVectors[collectionId] || [];
      const topK = params.topK || 10;

      // Calculate similarities
      let results = vectors.map(vec => ({
        id: vec.id,
        score: cosineSimilarity(params.vector, vec.vector),
        metadata: vec.metadata
      }));

      // Apply filters if provided
      if (params.filter) {
        results = results.filter(result => {
          if (!result.metadata) return false;
          
          return Object.entries(params.filter!).every(([key, value]) => {
            return result.metadata![key] === value;
          });
        });
      }

      // Sort by score (descending) and take topK
      results.sort((a, b) => b.score - a.score);
      results = results.slice(0, topK);

      const took = Date.now() - startTime;

      return {
        results,
        took,
        total: results.length
      };
    },

    get: async (collectionId: string, vectorId: string): Promise<Vector | null> => {
      await delay(100);
      const vectors = mockVectors[collectionId] || [];
      return vectors.find(vec => vec.id === vectorId) || null;
    },

    delete: async (collectionId: string, vectorId: string): Promise<void> => {
      await delay(200);
      const vectors = mockVectors[collectionId] || [];
      const index = vectors.findIndex(vec => vec.id === vectorId);
      if (index > -1) {
        vectors.splice(index, 1);
        
        // Update collection vector count
        const collection = mockCollections.find(col => col.id === collectionId);
        if (collection) {
          collection.vectorCount = vectors.length;
          collection.updatedAt = new Date().toISOString();
        }
      }
    }
  },

  // Analytics API
  analytics: {
    getUsage: async (): Promise<{
      totalVectors: number;
      totalQueries: number;
      storageUsed: string;
      avgQueryTime: number;
    }> => {
      await delay(300);
      
      const totalVectors = mockCollections.reduce((sum, col) => sum + col.vectorCount, 0);
      
      return {
        totalVectors,
        totalQueries: Math.floor(Math.random() * 10000) + 5000,
        storageUsed: '2.4 GB',
        avgQueryTime: Math.floor(Math.random() * 50) + 10
      };
    }
  }
};