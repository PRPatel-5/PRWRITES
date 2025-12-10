import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Blog', value: 'blog' },
  { name: 'Gaming', value: 'gaming' },
  { name: 'Tech', value: 'tech' },
  { name: 'News', value: 'news' },
  { name: 'Article', value: 'article' }
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            selectedCategory === category.value
              ? 'bg-accent text-primary'
              : 'bg-slate/10 text-slate hover:bg-slate/20'
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;