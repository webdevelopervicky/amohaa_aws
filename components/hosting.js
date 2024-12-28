"use client"
import { useEffect, useState } from 'react';

export default function Hosting() {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/hosting-plans');
        if (!response.ok) {
          throw new Error('Failed to fetch hosting plans');
        }
        const data = await response.json();
        setPlans(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
      <h1>Hosting Plans</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {plans.map((plan, index) => (
            <li key={index}>
              <strong>{plan.name}</strong>: {plan.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
