CREATE TABLE contracts_test_santiagoperez (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  premium_amount DECIMAL(10,2) NOT NULL,
  start_date DATE DEFAULT CURRENT_DATE,
  end_date DATE DEFAULT CURRENT_DATE + INTERVAL '1 year'
);

INSERT INTO contracts_test_santiagoperez (name, premium_amount) VALUES
  ('Contrato A', 1500.00),
  ('Contrato B', 2450.75);
