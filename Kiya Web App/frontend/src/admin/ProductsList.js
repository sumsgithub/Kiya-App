import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await api.get('/products');
      setProducts(res.data);
    } catch (err) {
      setError('Could not load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await api.delete(`/products/${id}`);
      setProducts(p => p.filter(x => x._id !== id));
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      <Link to="/admin/add-product"><button style={{ marginBottom: 12 }}>Add Product</button></Link>

      {loading ? <p>Loading...</p> : null}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'grid', gap: 12 }}>
        {products.map(p => (
          <div key={p._id} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: 12, border: '1px solid #eee', borderRadius: 8
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <img src={p.image || '/placeholder.png'} alt={p.name}
                   style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6 }} />
              <div>
                <div style={{ fontWeight: 600 }}>{p.name}</div>
                <div>AED {p.price.toFixed(2)}</div>
                <div style={{ color: '#666', fontSize: 13 }}>{p.category}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <Link to={`/admin/edit-product/${p._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
