import { useEffect, useState } from 'react';

export function useProductEditor() {
  const [editingProductId, setEditingProductId] = useState(0);

  useEffect(() => {
    console.log(editingProductId);
  }, [editingProductId]);

  return {
    editingProductId,
    setEditingProductId,
  };
}