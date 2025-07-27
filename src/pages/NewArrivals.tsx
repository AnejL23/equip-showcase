import { Badge } from '@/components/ui/badge';
import { equipmentCatalog } from '@/config/equipment';
import ProductCard from '@/components/ProductCard';
import { Clock, Sparkles } from 'lucide-react';

const NewArrivals = () => {
  const newProducts = equipmentCatalog.filter((product) => product.new);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Sparkles className="w-3 h-3 mr-1" />
            Fresh Inventory
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            New Arrivals
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest additions to our equipment catalog. 
            These newly arrived machines feature cutting-edge technology 
            and enhanced performance capabilities.
          </p>
        </div>

        {/* Stats */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{newProducts.length}</div>
              <div className="text-sm text-muted-foreground">New Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {new Set(newProducts.map(p => p.category)).size}
              </div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                Updated Weekly
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {newProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No new arrivals at the moment
              </h3>
              <p className="text-muted-foreground">
                Check back soon for the latest equipment additions to our catalog.
              </p>
            </div>
          </div>
        )}

        {/* Category Breakdown */}
        {newProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              New Arrivals by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from(new Set(newProducts.map(p => p.category))).map((category) => {
                const categoryCount = newProducts.filter(p => p.category === category).length;
                return (
                  <div key={category} className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-lg font-semibold text-foreground">{category}</div>
                    <div className="text-2xl font-bold text-primary">{categoryCount}</div>
                    <div className="text-sm text-muted-foreground">
                      {categoryCount === 1 ? 'new item' : 'new items'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;