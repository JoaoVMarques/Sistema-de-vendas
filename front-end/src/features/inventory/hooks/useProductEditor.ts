import { useState } from 'react';

export function useProductEditor() {
  const [editingProductId, setEditingProductId] = useState(0);

  return {
    editingProductId,
    setEditingProductId,
  };
}