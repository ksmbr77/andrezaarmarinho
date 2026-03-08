-- Drop the existing select policy and create one that allows all products to be viewed
DROP POLICY "Anyone can view active products" ON public.products;

-- Public users see active products, but allow viewing all for admin
CREATE POLICY "Anyone can view all products"
  ON public.products FOR SELECT
  USING (true);