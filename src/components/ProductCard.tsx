import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { EquipmentItem } from '@/config/equipment';
import { Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: EquipmentItem;
  onViewDetails?: (product: EquipmentItem) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-card-hover">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.new && (
            <Badge variant="default" className="bg-accent text-accent-foreground">
              New
            </Badge>
          )}
          {product.featured && (
            <Badge variant="secondary" className="bg-industrial-accent text-background">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        <Badge 
          variant="outline" 
          className="absolute top-3 right-3 bg-background/90 backdrop-blur"
        >
          {product.category}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-1 text-foreground">
          {product.name}
        </CardTitle>
        <div className="text-2xl font-bold text-primary">{product.price}</div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-foreground">Key Specs:</h4>
          <div className="grid grid-cols-2 gap-1 text-xs">
            {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted-foreground">{key}:</span>
                <span className="text-foreground font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          variant="outline"
          onClick={() => onViewDetails?.(product)}
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;